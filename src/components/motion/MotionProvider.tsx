"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false;

function registerGsapPlugins() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  registered = true;
}

if (typeof window !== "undefined") {
  registerGsapPlugins();
}

// Mounted once in the root layout. Guarantees ScrollTrigger is registered
// before any section's useGSAP runs, without re-registering per section.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsapPlugins();
    return () => {
      // Full-page unmount only (e.g. HMR) — individual sections clean up
      // their own ScrollTriggers via useGSAP's automatic revert.
    };
  }, []);

  return <>{children}</>;
}
