import { AnnouncementPost } from "@/components/posts/AnnouncementPost";
import FeedPost from "@/components/posts/FeedPost";
import { authClient } from "@/lib/auth-client";

export default async function HomePage() {
  const session = await authClient.getSession();

  return (
    <div>
      <div className="flex flex-1 flex-col py-4 pt-0">
        <AnnouncementPost
          email={session?.data?.user?.email ?? "anonymous@anon"}
          name={session?.data?.user?.name}
        />
        <FeedPost
          email={session?.data?.user?.email ?? "anonymous@anon"}
          name={session?.data?.user?.name}
          avatar={session?.data?.user?.image}
        />
        <FeedPost
          email={session?.data?.user?.email ?? "anonymous@anon"}
          name={session?.data?.user?.name}
          avatar={session?.data?.user?.image}
        />
      </div>
    </div>
  );
}
