import { authClient } from "@/lib/auth-client";

export default async function HomePage() {
  const session = await authClient.getSession();
  const userProfileData = await fetch(
    `${process.env.ZITADEL_ISSUER}/oidc/v1/userinfo`,
    {
      headers: {
        authorization: `Bearer ${session?.data?.session?.token}`,
        "content-type": "application/json",
      },
      method: "GET",
    }
  );

  return <div>{JSON.stringify(await userProfileData.json())}</div>;
}
