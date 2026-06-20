import ReferralProgram from "@/rendering/referralProgram";

export const metadata = {
  title: "LUNAR WOLF Partner Program | Grow With Your Network",
  description: "Refer EA users, build your network, and participate in the LUNAR WOLF partner ecosystem through a structured referral program.",
};

export default async function page({ searchParams }) {
  const params = await searchParams;

  return (
    <div>
      <ReferralProgram searchParams={params} />
    </div>
  );
}
