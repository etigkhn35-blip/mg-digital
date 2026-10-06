"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1600);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`mg-intro ${leaving ? "mg-intro-leaving" : ""}`}>
      <div className="mg-intro-logo">
        <Image
  src="/brand/mg-intro-logo.png"
  alt="M&G Digital Communication Agency"
  width={500}
  height={220}
  priority
  loading="eager"
/>
      </div>
    </div>
  );
}