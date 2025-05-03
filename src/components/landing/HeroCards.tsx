import CreatorPC from "@/assets/creator-pc.png";
import Image from 'next/image';

export const HeroCards = () => {
  return (
    <div className="flex flex-row">
      <div className="relative w-[900px] h-[500px] rounded-lg">
        <Image
          src={CreatorPC.src}
          fill
          className="object-cover rounded-lg"
          alt="About services"
        />
      </div>

    </div>
  );
};
