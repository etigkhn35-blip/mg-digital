"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

type BackToTopButtonProps = {
  label?: string;
};

export default function BackToTopButton({
  label = "Back to top",
}: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    function getEffectiveBackground(element: Element | null): string {
      let current = element;

      while (current && current !== document.documentElement) {
        const background = window.getComputedStyle(current).backgroundColor;

        if (
          background &&
          background !== "transparent" &&
          background !== "rgba(0, 0, 0, 0)"
        ) {
          return background;
        }

        current = current.parentElement;
      }

      return window.getComputedStyle(document.body).backgroundColor;
    }

    function isDarkColor(color: string): boolean {
      const match = color.match(
        /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/
      );

      if (!match) return false;

      const r = Number(match[1]);
      const g = Number(match[2]);
      const b = Number(match[3]);

      const luminance =
        (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

      return luminance < 0.45;
    }

    function updateButton() {
      setVisible(window.scrollY > 140);

      const x = window.innerWidth - 30;
      const y = window.innerHeight - 58;

      const elements = document.elementsFromPoint(x, y);

      const elementBehindButton =
        elements.find(
          (element) =>
            !element.classList.contains("mg-back-to-top") &&
            !element.closest(".mg-back-to-top")
        ) ?? null;

      const background = getEffectiveBackground(elementBehindButton);

      setOnDark(isDarkColor(background));
    }

    updateButton();

    window.addEventListener("scroll", updateButton, {
      passive: true,
    });

    window.addEventListener("resize", updateButton);

    return () => {
      window.removeEventListener("scroll", updateButton);
      window.removeEventListener("resize", updateButton);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      className={[
        "mg-back-to-top",
        visible ? "is-visible" : "",
        onDark ? "is-on-dark" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp strokeWidth={1.1} />
    </button>
  );
}