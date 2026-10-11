import { notFound } from "next/navigation";

import Intro from "../../components/Intro";
import Hero from "../../components/Hero";
import SelectedWork from "../../components/SelectedWork";
import Capabilities from "../../components/Capabilities";
import FeaturedPartnerships from "../../components/FeaturedPartnerships";
import Clients from "../../components/Clients";
import Agency from "../../components/Agency";
import Thinking from "../../components/Thinking";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleHome({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

return (
  <main>
    <Intro />

    <Hero locale={locale} />

    <FeaturedPartnerships locale={locale} />

    <Capabilities locale={locale} />

    <SelectedWork locale={locale} />

    <Clients locale={locale} />

    <Agency locale={locale} />

    <Thinking locale={locale} />

    <BackToTopButton
  label={locale === "tr" ? "Sayfanın başına dön" : "Back to top"}
/>

<Footer locale={locale} />
  </main>
);
}