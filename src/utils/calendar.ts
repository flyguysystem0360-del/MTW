/**
 * Generates an .ics file download for Misa West Live in Concert
 */
export function downloadCalendarInvite() {
  const eventDetails = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Misa West Concert//Live Reggae Fundraiser//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:misa-west-live-20261220@dingle-concert',
    'DTSTAMP:20261027T000000Z',
    'DTSTART:20261220T170000Z',
    'DTEND:20261220T230000Z',
    'SUMMARY:Misa West Live in Concert — Reggae Fundraiser',
    'DESCRIPTION:Live reggae performance by Misa West at The Dingle with DJ Jah Macka on the sound system. Authentic Jamaican food on sale and open bars. Entry £10 at the door. Support the GoFundMe campaign: https://gofund.me/297ce37b2',
    'LOCATION:The Dingle\\, B45 0BP\\, United Kingdom',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([eventDetails], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', 'Misa_West_Live_Concert_Dec20_2026.ics');
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(url);
}

/**
 * Returns a web intent URL for Google Calendar
 */
export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent('Misa West Live in Concert — Reggae Fundraiser');
  const details = encodeURIComponent(
    'Misa West Live in Concert with DJ Jah Macka at The Dingle. Authentic Jamaican food, open bar, £10 door entry. Support the campaign: https://gofund.me/297ce37b2'
  );
  const location = encodeURIComponent('The Dingle, B45 0BP, United Kingdom');
  const dates = '20261220T170000Z/20261220T230000Z';

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
