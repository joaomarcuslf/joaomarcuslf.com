import Link from "next/link";

import site from "@/site";
import { SocialMetadata } from "@/types/social";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="mb-0">
          Made by <strong>@joaomarcuslf</strong>.
        </p>

        <span className="icon-text mt-5 px-15 is-flex-container has-space-evenly">
          {(site?.socialMedias as SocialMetadata[])?.map((social) => (
            <Link key={social.url} href={social.url} target="blank">
              <span className="is-hidden">{social.name}</span>
              <span className="icon is-large">
                <span className={`${social.icon} fa-lg`}> </span>
              </span>
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
