import { MegaphoneIcon } from "lucide-react";
type FeedPostProps = {
  email?: string;
  name?: string | null;
};

export function AnnouncementPost({ name = "anonymous" }: FeedPostProps) {
  return (
    <div>
      <div className="flex items-start px-5 py-2 m-0 gap-2 rounded-lg">
        <div className="border p-2 mt-1 rounded-lg bg-yellow-50">
          <MegaphoneIcon className="h-5 w-5 text-yellow-600" />
        </div>
        <div className="flex flex-col items-start text-left leading-tight">
          <div>
            <p className="font-semibold text-lg">Big title for announcement</p>
            <div className="flex gap-2">
              <p className="text-xs font-light -mt-0.5 text-slate-500 uppercase hover:underline hover:cursor-pointer focus:cursor-pointer active:cursor-pointer">
                #te-batch
              </p>
              <p className="text-xs font-light -mt-0.5 text-slate-500 uppercase hover:underline hover:cursor-pointer focus:cursor-pointer active:cursor-pointer">
                #te-batch
              </p>
              <p className="text-xs font-light -mt-0.5 text-slate-500 uppercase hover:underline hover:cursor-pointer focus:cursor-pointer active:cursor-pointer">
                #te-batch
              </p>
            </div>
            {/* <p className="text-xs font-light -mt-0.5 text-slate-500">@tpo</p> */}
          </div>
          <p className="mt-1" style={{ fontSize: "15px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam
            deleniti laborum autem. Architecto inventore asperiores labore
            dignissimos quas provident quisquam cumque hic, laudantium, eum ea
            numquam eos debitis ex.
          </p>
          <div className="flex items-center justify-start gap-1 text-slate-400 text-xs mt-3">
            <span>{name}</span>
            <span>·</span>
            <span>Feb, 5</span>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
