'use client'
import ReferralProgram from "@/rendering/referralProgram";
import React, { useEffect } from "react";

export default async function page({ searchParams }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const params = await searchParams;

  return (
    <div>
      <ReferralProgram searchParams={params} />
    </div>
  );
}
