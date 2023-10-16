import { PleaseLogin } from "@/components/please-login";
import { gql } from "@apollo/client";
import { getAuthClient, onLogout } from "@faustwp/experimental-app-router";

export default async function Page() {
  const client = await getAuthClient();

  if (!client) {
    return <PleaseLogin />;
  }

  const { data } = await client.query({
    query: gql`
      query GetViewerDraftAndPublishedPosts {
        viewer {
          name
          draftPosts: posts(where: { status: DRAFT }) {
            nodes {
              id
              title
            }
          }
          publishedPosts: posts(where: { status: PUBLISH }) {
            nodes {
              id
              title
            }
          }
        }
      }
    `,
  });

  return (
    <>
      <h2>Welcome {data.viewer.name}</h2>

      <h3>My Posts</h3>
      <ul>
        {data.viewer.publishedPosts.nodes.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h3>My Drafts</h3>
      <ul>
        {data.viewer.draftPosts.nodes.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <form action={onLogout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
