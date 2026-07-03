export function formatSectionLabel(label) {
  if (!label || typeof label !== "string") {
    return label;
  }

  if (label.includes(" ")) {
    return label.toLowerCase();
  }

  return label
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .toLowerCase();
}
