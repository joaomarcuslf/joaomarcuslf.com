import site from "@/site";

export default function ContactInfo() {
  return (
    <section>
      <h2 className="underlined">Contact Info:</h2>

      <p className="pl-1">
        <strong className="pr-1">Mobile:</strong>
        {site.mobile}
      </p>
      <p className="pl-1">
        <strong className="pr-1">E-mail:</strong>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p className="pl-1">
        <strong className="pr-1">Linkedin:</strong>
        <a href={site.socialMedias[1].url}>{site.socialMedias[1].url}</a>
      </p>
      <p className="pl-1">
        <strong className="pr-1">Site:</strong>
        <a href={site.url}>{site.url}</a>
      </p>
    </section>
  );
}
