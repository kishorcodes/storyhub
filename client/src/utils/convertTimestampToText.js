export default function convertTimestampToText(timestamp) {
  const date = new Date(timestamp);
  const options = { weekday: "short", month: "short", day: "numeric" };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(date).replace(",", "");
  return formattedDate;
}
