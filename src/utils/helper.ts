export function formatDateTimeFromString(dateString: string): string {
  const dateTime = new Date(dateString);
  const pad = (num: number): string => num.toString().padStart(2, "0");

  const day = pad(dateTime.getDate());
  const month = pad(dateTime.getMonth() + 1); // getMonth() returns a zero-based index
  const year = dateTime.getFullYear().toString().substr(-2); // Get last two digits of year
  const hours = pad(dateTime.getHours());
  const minutes = pad(dateTime.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
