import { NextResponse } from "next/server";
import { getMongoDatabase } from "@/lib/mongodb";
import { joinFormSchema } from "@/utils/join-form-schema";

const collectionName = process.env.MONGO_COLLECTION || "joinApplications";
const notificationEmail = "ritesh.vrt@gmail.com";

function buildFieldErrors(zodError) {
  const flattened = zodError.flatten();
  const fieldErrors = {};

  Object.entries(flattened.fieldErrors).forEach(([fieldName, messages]) => {
    if (Array.isArray(messages) && messages[0]) {
      fieldErrors[fieldName] = messages[0];
    }
  });

  return fieldErrors;
}

async function sendBrevoNotification(application) {
  const brevoApiKey = process.env.BREVO_API_KEY || process.env.BREVO_KEY || process.env.BREVO_APIKEY;

  if (!brevoApiKey) {
    throw new Error("Brevo API key is missing. Add BREVO_API_KEY in environment variables.");
  }

  const senderEmail =
    process.env.BREVO_SENDER_EMAIL || process.env.BREVO_FROM_EMAIL || process.env.BREVO_MAIL_FROM;
  const senderName = process.env.BREVO_SENDER_NAME || "Vega Cohort";

  if (!senderEmail) {
    throw new Error("Brevo sender email is missing. Add BREVO_SENDER_EMAIL in environment variables.");
  }

  const emailPayload = {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [{ email: notificationEmail }],
    subject: "New Cohort Form Submission",
    htmlContent: `
      <h3>New join form submission received</h3>
      <p><strong>Full name:</strong> ${application.fullName}</p>
      <p><strong>Batch:</strong> ${application.batch}</p>
      <p><strong>Company:</strong> ${application.company}</p>
      <p><strong>Title:</strong> ${application.title}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>Phone:</strong> ${application.phone || "-"}</p>
      <p><strong>Company size:</strong> ${application.companySize}</p>
      <p><strong>Submitted at:</strong> ${new Date(application.createdAt).toLocaleString("en-IN")}</p>
    `,
  };

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": brevoApiKey,
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`Brevo request failed: ${response.status} ${responseText}`);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = joinFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          fieldErrors: buildFieldErrors(parsed.error),
        },
        { status: 400 }
      );
    }

    const application = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
    };

    const database = await getMongoDatabase();
    await database.collection(collectionName).insertOne(application);
    await sendBrevoNotification(application);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit the form right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
