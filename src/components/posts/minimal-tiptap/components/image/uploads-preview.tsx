import Image from "next/image";

export function UploadsPreview() {
  return (
    <div className="flex gap-4">
      <div className="w-2/3 aspect-[5/3] relative">
        <Image
          src="https://picsum.photos/id/237/800/500"
          alt="preview"
          layout="fill"
          className="border object-cover hover:object-contain bg-orange-100 rounded-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-1/3 scroll-m-0 overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <Image
            key={index}
            src="https://picsum.photos/id/237/100/100"
            alt="preview"
            width={100}
            height={100}
            className="rounded-sm w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
