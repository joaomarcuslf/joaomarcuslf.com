import site from "@/site";

export default function CalendarButton() {
  return (
    <a
      className="calendar-link button has-icon has-text is-dark is-outlined"
      href={site.calendar}
      target="_blank"
    >
      <span className="icon is-large">
        <i className="fas fa-calendar"></i>
      </span>
      <span className="ml-1">Let&apos;s Meet!</span>
    </a>
  );
}
