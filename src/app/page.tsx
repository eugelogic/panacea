import DoctorListItem from "@/components/DoctorListItem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const doctors = await prisma.doctor.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="max-w-3xl m-auto my-10 px-3 space-y-10">
      <div className="space-y-5">
        <h1 className="text-4xl tracking-tight font-bold">Doctors</h1>
        <p>Find the right doctor for you.</p>
      </div>
      <section>
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <DoctorListItem doctor={doctor} key={doctor.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
