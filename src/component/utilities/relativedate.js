import { formatDistanceToNow, format } from "date-fns";

// Helper function to display dates like "now", "today", "yesterday" or "Month day, year"
export default function displayRelativeDate(date) {
  const now = new Date();
  const differenceInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  if (differenceInDays === 0) {
    const diffInHours = Math.abs(now - date) / (1000 * 60 * 60);
    if (diffInHours < 1) {
      return "now";
    }
    return "today";
  } else if (differenceInDays === 1) {
    return "yesterday";
  } else if (differenceInDays <= 2) {
    return `${differenceInDays} days ago`;
  } else {
    // Display as "Month day, year" format
    return format(date, "MMM dd, yyyy");
  }
}

// Usage examples
const someDate = new Date("2024-09-25T10:00:00");
console.log(displayRelativeDate(someDate)); // e.g., 'September 25, 2024' after 2 days
