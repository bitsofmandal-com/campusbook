import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();
  const userProfileData = await fetch(
    `${process.env.ZITADEL_ISSUER}/oidc/v1/userinfo`,
    {
      headers: {
        authorization: `Bearer ${session?.accessToken}`,
        "content-type": "application/json",
      },
      method: "GET",
    }
  )

  return <div>{JSON.stringify(userProfileData)}</div>;
}
