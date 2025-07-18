// import Image from "next/image";
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const routes = useRouter();

  useEffect(() => {
    routes.replace("/login");
  }, []);

  return <div className="text-primary">Home</div>;
}
