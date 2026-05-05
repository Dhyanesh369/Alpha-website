"use client";

import { ReactNode } from "react";
import AmbientSceneLoader from "@/components/3d/AmbientSceneLoader";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import PageTransition from "@/components/animations/PageTransition";

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Persistent 3D Background (fixed behind everything) */}
      <AmbientSceneLoader />
      <CustomCursor />
      <SmoothScroll />
      <Navbar />
      <main className="flex-grow flex flex-col relative z-10">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </>
  );
}
