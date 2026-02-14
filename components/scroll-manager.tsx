"use client";

import { useEffect } from "react";

export function ScrollManager() {
  useEffect(() => {
    // Clear hash and scroll to top on initial page load
    if (window.location.hash) {
      // Remove hash from URL without triggering navigation
      window.history.replaceState(null, "", window.location.pathname);
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
