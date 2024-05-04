import prisma from "@/lib/prisma";

export default async function Home() {
  const doctors = await prisma.doctor.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return <main>{JSON.stringify(doctors)}</main>;
}
