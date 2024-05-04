import { Doctor } from "@prisma/client";
import Image from "next/image";
import doctorAvatarPlaceholder from "@/assets/doctor-avatar-placeholder.png";

interface DoctorListItemProps {
  doctor: Doctor;
}

export default function DoctorListItem({
  doctor: { firstName, lastName, specialty, biography, pricePerHour, avatar },
}: DoctorListItemProps) {
  return (
    <article className="flex gap-4 border rounded-lg p-4 hover:bg-muted/60">
      <Image
        src={avatar || doctorAvatarPlaceholder}
        alt={`Dr ${firstName} ${lastName}`}
        width={150}
        height={150}
        className="rounded-lg self-start border"
      />
      <div className="flex-grow-0 space-y-2">
        <div>
          <h2 className="font-bold text-xl">
            Dr {firstName} {lastName}
          </h2>
          <p>{specialty}</p>
          <p className="font-bold">£{pricePerHour} per visit</p>
          <p>{biography}</p>
        </div>
      </div>
    </article>
  );
}
