import Image from "next/image";
import Container from "@/components/layout/Container";
import VegaName from "@/components/ui/VegaName";
import styles from "@/components/layout/Footer.module.css";

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.38-1.11-.58-2.3-.58-3.53 0-.54-.45-.99-1-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="footer-mail-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#ec407a" />
        </linearGradient>
      </defs>
      <path
        fill="url(#footer-mail-gradient)"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163 18.162 15.404 18.162 12 15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 9.5h3v9H5v-9zm1.5-4.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM11 9.5h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.62V18.5h-3v-4.02c0-.96-.02-2.19-1.34-2.19-1.34 0-1.55 1.05-1.55 2.14v4.07H11V9.5z" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "linkedIn",
    href: "https://www.linkedin.com/company/vrt-management-group-llc/",
    icon: IconLinkedIn,
    iconClass: styles.socialIconLinkedin,
  },
  {
    label: "x",
    href: "https://x.com/VRT_management",
    icon: IconX,
    iconClass: styles.socialIconX,
  },
  {
    label: "facebook",
    href: "https://www.facebook.com/vrtmgmt/",
    icon: IconFacebook,
    iconClass: styles.socialIconFacebook,
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/vrt_management/",
    icon: IconInstagram,
    iconClass: styles.socialIconInstagram,
  },
  {
    label: "youtube",
    href: "https://www.youtube.com/@vrt-management-group",
    icon: IconYoutube,
    iconClass: styles.socialIconYoutube,
  },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-white pb-7 pt-[60px] text-foreground`}>
      <Container className="max-w-[1640px] px-10 md:px-12 xl:px-[88px]">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.05fr_1fr_1fr_0.95fr_1.05fr]">
          <div>
            <div className={styles.footerLogo}>
              <Image
                src="/vrt_logo.png"
                alt="VRT Management Group logo"
                width={800}
                height={460}
                className="h-auto w-full"
              />
            </div>
            <p className={styles.footerText}>from vision to scalable, profitable growth.</p>
          </div>

          <div>
            <h3 className={`${styles.footerTitle} ${styles.footerTitlePink}`}>Company</h3>
            <p className={`${styles.footerText} max-w-[220px]`}>
              vrt management group, llc • empowering growth through proven systems
            </p>

            <div className={styles.sectionBlock}>
              <h3 className={`${styles.footerTitle} ${styles.footerTitleOrange}`}>Contact</h3>
              <div className={styles.linkStackWide}>
                <a href="tel:+12033041918" className={`${styles.footerLink} ${styles.contactRow}`}>
                  <span className={styles.contactIcon}>
                    <IconPhone />
                  </span>
                  <span>+1-203-304-1918</span>
                </a>
                <a href="mailto:coachrajesh@vrt9.com" className={`${styles.footerLink} ${styles.contactRow}`}>
                  <span className={styles.contactIcon}>
                    <IconMail />
                  </span>
                  <span>coachrajesh@vrt9.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="xl:pl-8">
            <h3 className={`${styles.footerTitle} ${styles.footerTitleGreen}`}>Upcoming Cohorts</h3>
            <div className={styles.linkStack}>
              <a href="#join" className={styles.footerLink}>
                silicon valley, ca
              </a>
              <a href="#join" className={styles.footerLink}>
                austin, tx
              </a>
              <a href="#join" className={styles.footerLink}>
                connecticut
              </a>
            </div>

            <div className={styles.sectionBlock}>
              <h3 className={`${styles.footerTitle} ${styles.footerTitleRed}`}>Get Started</h3>
              <div className={styles.linkStack}>
                <a href="#join" className={styles.footerLink}>
                  reserveMySeat
                </a>
                <a href="#founder" className={styles.footerLink}>
                  bookACall
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`${styles.footerTitle} ${styles.footerTitleBlue}`}>Social Media</h3>
            <div className={styles.socialList}>
              {socialLinks.map(({ label, href, icon: Icon, iconClass }) => (
                <a
                  key={label}
                  className={styles.socialLink}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={`${styles.socialIcon} ${iconClass}`}>
                    <Icon />
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${styles.footerTitle} ${styles.footerTitleGold}`}>Locations</h3>
            <div className={styles.locationStack}>
              <div>
                <div className={styles.footerSubheading}>botsford, ct</div>
                <p className={styles.footerText}>1 botsford hill road</p>
                <p className={styles.footerText}>po box 150</p>
                <p className={styles.footerText}>botsford, ct 06404</p>
                <a href="tel:+12033041918" className={`${styles.footerLink} ${styles.contactRow} mt-[10px]`}>
                  <span className={styles.contactIcon}>
                    <IconPhone />
                  </span>
                  <span>+1-203-304-1918</span>
                </a>
              </div>

              <div>
                <div className={styles.footerSubheading}>hyderabad, india</div>
                <p className={styles.footerText}>gcc (global capability center)</p>
                <a href="tel:+12033041918" className={`${styles.footerLink} ${styles.contactRow} mt-[10px]`}>
                  <span className={styles.contactIcon}>
                    <IconPhone />
                  </span>
                  <span>+1-203-304-1918</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2026 <VegaName />, visionary entrepreneurs growth accelerator. all rights reserved.
        </div>
      </Container>
    </footer>
  );
}
