import { auth } from "@/auth";
import { AnnouncementPost } from "@/components/posts/AnnouncementPost";
import FeedPost from "@/components/posts/FeedPost";


export default async function HomePage() {
  const session = await auth();

  return (
    <div>
      <div className="flex flex-1 flex-col py-4 pt-0">
        <AnnouncementPost
          email={session?.user?.email ?? "anonymous@anon"}
          name={session?.user?.name}
        />
        <FeedPost
          email={session?.user?.email ?? "anonymous@anon"}
          name={session?.user?.name}
          avatar={session?.user?.image}
        />
        <FeedPost
          email={session?.user?.email ?? "anonymous@anon"}
          name={session?.user?.name}
          avatar={session?.user?.image}
        />
      </div>
    </div>
  );
}
