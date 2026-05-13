import ReferralProgram from "@/rendering/referralProgram";
import React from "react";

export default async function page({ searchParams }) {
  const params = await searchParams;

  return (
    <div>
      <ReferralProgram searchParams={params} />
    </div>
  );
}
