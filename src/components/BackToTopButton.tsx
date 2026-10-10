"use client";

import { ArrowUp } from "lucide-react";

type BackToTopButtonProps = {
  label?: string;
};

export default function BackToTopButton({
  label = "Back to top",
}: BackToTopButtonProps) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      className="mg-back-to-top"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
    >
      <ArrowUp strokeWidth={1.1} />
    </button>
  );
}