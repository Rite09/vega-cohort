function capitalizeFirst(text) {
  if (!text) {
    return text;
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatSectionLabel(label) {
  if (!label || typeof label !== "string") {
    return label;
  }

  if (label.includes(" ")) {
    return capitalizeFirst(label.toLowerCase());
  }

  const formatted = label
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .toLowerCase();

  return capitalizeFirst(formatted);
}
