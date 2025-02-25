import Link from "next/link";
import Image from "next/image";

import { PostMetadata } from "@/types/post";

export default function MentorshipView({ mentorship }: { mentorship: PostMetadata }) {
  const WrapperComponent = ({ children }: { children: React.ReactNode}) => {
    return mentorship.internal ? (
      <Link className="images-section-item pb-3" href={mentorship.slug}>
        {children}
      </Link>
    ) : (
      <a
        className="images-section-item pb-3"
        href={mentorship.slug}
        target="blank"
      >
        {children}
      </a>
    );
  };

  return (
    <WrapperComponent>
      <article className="project-card">
        <figure className="project-card-image">
          <p className="image">
            <Image
              className="images-section-image"
              src={mentorship?.img}
              alt={mentorship.alt || `Image from ${mentorship.title}`}
              width="128"
              height="128"
            />
          </p>
        </figure>
        <div className="project-card-content">
          <header className="project-card-header">
            <p className="project-card-subtitle">
              <small>{mentorship.lang?.toUpperCase()}</small>
            </p>
            <h6 className="project-card-title">{mentorship.title}</h6>
          </header>
        </div>
      </article>
    </WrapperComponent>
  );
}
