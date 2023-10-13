import { PleaseLogin } from "@/components/please-login";
import { getAuthClient, onLogout } from "@faustwp/experimental-app-router";
import CreatePost from "./CreatePost";
export default async function Page() {
  const client = await getAuthClient();

  if (!client) {
    return <PleaseLogin />;
  }

  return (
    <main>
      <h2>Hello World</h2>
      <CreatePost />
    </main>
  );
}
