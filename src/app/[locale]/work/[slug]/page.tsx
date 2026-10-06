import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

import {
  getNextProject,
  getProject,
} from "../../../../data/projects";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: PageProps) {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  const tr = locale === "tr";

  return (
    <main id="top" className="mg-project-page">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="mg-project-hero">
        <Header locale={locale} />

        <div className="mg-project-hero-media">

          {project.coverType === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src={project.cover}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              src={project.cover}
              alt={project.client}
            />
          )}

          <div className="mg-project-hero-shade" />

          <div className="mg-project-hero-content">

            <div className="mg-project-hero-top">
              <Link href={`/${locale}/work`}>
                <ArrowLeft
                  size={13}
                  strokeWidth={1.4}
                />

                {tr ? "TÜM İŞLER" : "ALL WORK"}
              </Link>

              <span>
                {tr
                  ? project.categoryTR
                  : project.categoryEN}
              </span>
            </div>

            <h1>{project.client}</h1>

            <div className="mg-project-hero-bottom">
              <span>{project.location}</span>
              <span>{project.year}</span>
            </div>

          </div>
        </div>
      </section>


      {/* ===================================================
          01 — PROJECT
      =================================================== */}

      <section className="mg-project-info">

        <div className="mg-project-label">
          <span>01</span>

          <span>
            {tr ? "PROJE" : "PROJECT"}
          </span>
        </div>

        <div className="mg-project-info-main">

          <h2>
            {tr
              ? project.statementTR
              : project.statementEN}
          </h2>

          <div className="mg-project-info-bottom">

            <p>
              {tr
                ? project.introTR
                : project.introEN}
            </p>

            <div className="mg-project-services">

              <span>
                {tr ? "HİZMETLER" : "SERVICES"}
              </span>

              <ul>
                {(tr
                  ? project.servicesTR
                  : project.servicesEN
                ).map((service) => (
                  <li key={service}>
                    {service}
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </section>


      {/* ===================================================
    02 — VISUAL WORLD
=================================================== */}

<section className="mg-project-gallery">

  <div className="mg-project-gallery-label">
    <span>02</span>

    <span>
      {tr ? "GÖRSEL DÜNYA" : "VISUAL WORLD"}
    </span>
  </div>

  <div className="mg-project-gallery-grid">

    {project.media.map((item, index) => (
      <figure
        key={`${item.src}-${index}`}
        className={`mg-project-gallery-item mg-project-gallery-${item.layout}`}
      >
        <div className="mg-project-gallery-media">

          {item.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src={item.src}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
          )}

          <div className="mg-project-gallery-placeholder">
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{project.client}</strong>

            <small>
              {item.type === "video"
                ? tr
                  ? "FİLM"
                  : "FILM"
                : tr
                  ? "GÖRSEL"
                  : "IMAGE"}
            </small>
          </div>

        </div>

        <figcaption>
          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{project.client}</span>

          <span>
            {item.type === "video"
              ? tr
                ? "FİLM"
                : "FILM"
              : tr
                ? "GÖRSEL"
                : "IMAGE"}
          </span>
        </figcaption>
      </figure>
    ))}

  </div>
</section>

      {/* ===================================================
          03 — APPROACH
      =================================================== */}

      <section className="mg-project-approach">

        <div className="mg-project-label">
          <span>03</span>

          <span>
            {tr
              ? "YAKLAŞIM"
              : "APPROACH"}
          </span>
        </div>

        <div className="mg-project-approach-content">

          <h2>
            {tr
              ? project.approachTitleTR
              : project.approachTitleEN}
          </h2>

          <p>
            {tr
              ? project.approachTR
              : project.approachEN}
          </p>

        </div>
      </section>


      {/* ===================================================
          04 — NEXT PROJECT
      =================================================== */}

      <section className="mg-project-next">

        <div className="mg-project-label">
          <span>04</span>

          <span>
            {tr
              ? "SONRAKİ PROJE"
              : "NEXT PROJECT"}
          </span>
        </div>

        <Link
          href={`/${locale}/work/${nextProject.slug}`}
          className="mg-project-next-link"
        >
          <span>
            {nextProject.client}
          </span>

          <ArrowUpRight strokeWidth={1} />
        </Link>

      </section>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <Footer locale={locale} />

    </main>
  );
}