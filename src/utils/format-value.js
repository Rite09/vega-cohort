export function formatValue(value, { prefix = "", suffix = "" } = {}) {
  return `${prefix}${Number(value).toLocaleString()}${suffix}`;
}
