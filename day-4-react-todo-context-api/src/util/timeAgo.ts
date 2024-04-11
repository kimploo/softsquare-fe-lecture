import { formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale'; // Importing the Korean locale

export default function timeAgo(date) {
  // Ensure the date is a valid Date object
  if (!(date instanceof Date)) {
    console.error('The provided value is not a valid Date object.');
    return '';
  }

  const now = new Date();
  // Include the locale in the options
  const timeAgoString = formatDistance(date, now, { addSuffix: true, locale: ko });

  return timeAgoString;
}
