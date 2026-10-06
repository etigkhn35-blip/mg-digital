"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import {
  projects,
  type ProjectCategory,
  type Project,
} from "../data/projects";

type WorkArchiveProps = {
  locale: "en" | "tr";
};

type ViewMode = "services" | "industries" | "all";

type IndustryFilter = "all" | ProjectCategory;

type ServiceSection = {
  number: string;
  titleEN: string;
  titleTR: string;
  descriptionEN: string;
  descriptionTR: string;
  projectSlugs: string[];
};

const industryFilters: {
  value: IndustryFilter;
  en: string;
  tr: string;
}[] = [
  {
    value: "all",
    en: "All",
    tr: "Tümü",
  },
  {
    value: "hospitality",
    en: "Hospitality",
    tr: "Konaklama",
  },
  {
    value: "lifestyle",
    en: "Lifestyle",
    tr: "Yaşam Tarzı",
  },
  {
    value: "food",
    en: "Food & Beverage",
    tr: "Gastronomi",
  },
  {
    value: "luxury",
    en: "Luxury",
    tr: "Lüks",
  },
  {
    value: "culture",
    en: "Culture",
    tr: "Kültür",
  },
];

const serviceSections: ServiceSection[] = [
  {
    number: "01",
    titleEN: "BRAND\nSTRATEGY",
    titleTR: "MARKA\nSTRATEJİSİ",
    descriptionEN:
      "We define positioning, audience and brand direction to create distinctive identities with cultural relevance.",
    descriptionTR:
      "Markaların konumlandırmasını, hedef kitlesini ve yönünü belirleyerek kültürel karşılığı olan güçlü kimlikler oluşturuyoruz.",
    projectSlugs: [
      "rixos-tersane",
      "splendid-palace",
    ],
  },
  {
    number: "02",
    titleEN: "SOCIAL +\nCONTENT",
    titleTR: "SOSYAL MEDYA +\nİÇERİK",
    descriptionEN:
      "We build social worlds and content systems designed to keep brands visible, relevant and in motion.",
    descriptionTR:
      "Markaları görünür, güncel ve hareket halinde tutan sosyal medya dünyaları ve içerik sistemleri oluşturuyoruz.",
    projectSlugs: [
      "mynos-bodrum",
      "la-lara",
    ],
  },
  {
    number: "03",
    titleEN: "BRANDING +\nCREATIVE",
    titleTR: "MARKALAŞMA +\nYARATICILIK",
    descriptionEN:
      "We create identities, campaigns and visual systems that give brands a distinct place in culture.",
    descriptionTR:
      "Markalara kültür içinde kendine özgü bir yer kazandıran kimlikler, kampanyalar ve görsel sistemler yaratıyoruz.",
    projectSlugs: [
      "cartier",
      "the-istanbul-butcher",
    ],
  },
  {
    number: "04",
    titleEN: "DIGITAL +\nGROWTH",
    titleTR: "DİJİTAL +\nBÜYÜME",
    descriptionEN:
      "We connect creative thinking with digital experiences, performance and measurable growth.",
    descriptionTR:
      "Yaratıcı düşünceyi dijital deneyimler, performans ve ölçülebilir büyümeyle bir araya getiriyoruz.",
    projectSlugs: [
      "rixos-tersane",
      "mynos-bodrum",
    ],
  },
];

function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: "en" | "tr";
}) {
  const tr = locale === "tr";

  return (
    <article className="mg-work-editorial-project">
      <Link
        href={`/${locale}/work/${project.slug}`}
        className="mg-work-editorial-project-link"
      >
        <div className="mg-work-editorial-media">
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
              loading="lazy"
            />
          )}

          <div className="mg-work-editorial-hover">
            <span>
              {tr
                ? "PROJEYİ GÖR"
                : "VIEW PROJECT"}
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.4}
            />
          </div>
        </div>

        <div className="mg-work-editorial-info">
          <h3>{project.client}</h3>

          <p>
            {tr
              ? project.categoryTR
              : project.categoryEN}
            {" · "}
            {project.location}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function WorkArchive({
  locale,
}: WorkArchiveProps) {
  const tr = locale === "tr";

  const [viewMode, setViewMode] =
    useState<ViewMode>("services");

  const [activeIndustry, setActiveIndustry] =
    useState<IndustryFilter>("all");

  const filteredProjects = useMemo(() => {
    if (activeIndustry === "all") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeIndustry
    );
  }, [activeIndustry]);

  const getProjectBySlug = (
    slug: string
  ) => {
    return projects.find(
      (project) => project.slug === slug
    );
  };

  return (
    <section className="mg-work-archive mg-work-editorial">

      {/* ==================================================
          TOP NAVIGATION
      =================================================== */}

      <div className="mg-work-editorial-top">
        <div className="mg-work-editorial-tabs">
          <button
            type="button"
            className={
              viewMode === "services"
                ? "active"
                : ""
            }
            onClick={() =>
              setViewMode("services")
            }
          >
            {tr ? "HİZMETLER" : "SERVICES"}
          </button>

          <button
            type="button"
            className={
              viewMode === "industries"
                ? "active"
                : ""
            }
            onClick={() =>
              setViewMode("industries")
            }
          >
            {tr ? "SEKTÖRLER" : "INDUSTRIES"}
          </button>

          <button
            type="button"
            className={
              viewMode === "all"
                ? "active"
                : ""
            }
            onClick={() =>
              setViewMode("all")
            }
          >
            {tr ? "TÜM İŞLER" : "ALL WORK"}
          </button>
        </div>

        <p className="mg-work-editorial-manifesto">
          {tr
            ? "Yarattığımız işler; strateji, yaratıcılık ve kültürün kesişiminde markalara kendilerine özgü bir alan açar."
            : "Our work lives at the intersection of strategy, creativity and culture, creating a distinct place for brands."}
        </p>
      </div>


      {/* ==================================================
          SERVICES
      =================================================== */}

      {viewMode === "services" && (
        <div className="mg-work-services">
          {serviceSections.map(
            (section, sectionIndex) => {
              const sectionProjects =
                section.projectSlugs
                  .map(getProjectBySlug)
                  .filter(
                    (
                      project
                    ): project is Project =>
                      Boolean(project)
                  );

              return (
                <div
                  className="mg-work-service-row"
                  key={section.number}
                >
                  <div className="mg-work-service-number">
                    <span>
                      {section.number}
                    </span>

                    <span>
                      /{String(
                        serviceSections.length
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mg-work-service-content">
                    <div className="mg-work-service-copy">
                      <div>
                        <h2>
                          {(tr
                            ? section.titleTR
                            : section.titleEN
                          )
                            .split("\n")
                            .map(
                              (
                                line,
                                index
                              ) => (
                                <span
                                  key={index}
                                >
                                  {line}
                                </span>
                              )
                            )}
                        </h2>

                        <p>
                          {tr
                            ? section.descriptionTR
                            : section.descriptionEN}
                        </p>
                      </div>

                      <Link
                        href={`/${locale}/services`}
                        className="mg-work-service-more"
                      >
                        <span>
                          {tr
                            ? "DAHA FAZLA"
                            : "LEARN MORE"}
                        </span>

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.4}
                        />
                      </Link>
                    </div>

                    <div
                      className={`mg-work-service-projects ${
                        sectionIndex % 2 === 1
                          ? "mg-work-service-projects-offset"
                          : ""
                      }`}
                    >
                      {sectionProjects.map(
                        (project) => (
                          <ProjectCard
                            key={
                              project.slug
                            }
                            project={project}
                            locale={locale}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}


      {/* ==================================================
          INDUSTRIES
      =================================================== */}

      {viewMode === "industries" && (
        <div className="mg-work-industries">
          <div className="mg-work-industry-filter">
            {industryFilters.map(
              (filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={
                    activeIndustry ===
                    filter.value
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveIndustry(
                      filter.value
                    )
                  }
                >
                  {tr
                    ? filter.tr
                    : filter.en}
                </button>
              )
            )}
          </div>

          <div className="mg-work-all-grid">
            {filteredProjects.map(
              (project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  locale={locale}
                />
              )
            )}
          </div>
        </div>
      )}


      {/* ==================================================
          ALL WORK
      =================================================== */}

      {viewMode === "all" && (
        <div className="mg-work-all">
          <div className="mg-work-all-meta">
            <span>
              {String(
                projects.length
              ).padStart(2, "0")}
            </span>

            <span>
              {tr
                ? "SEÇİLİ PROJELER"
                : "SELECTED PROJECTS"}
            </span>
          </div>

          <div className="mg-work-all-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
              />
            ))}
          </div>
        </div>
      )}


      {/* ==================================================
          END
      =================================================== */}

      <div className="mg-work-editorial-end">
        <span>M&G DIGITAL</span>

        <p>
          {tr
            ? "Seçili projeler ve devam eden iş birlikleri."
            : "Selected projects and ongoing partnerships."}
        </p>
      </div>
    </section>
  );
}