"use client";

import dynamic from "next/dynamic";

const AmbientScene = dynamic(() => import("@/components/3d/AmbientScene"), { ssr: false });

export default function AmbientSceneLoader() {
  return <AmbientScene />;
}
