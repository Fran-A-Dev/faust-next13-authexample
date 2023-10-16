import { getClient } from "@faustwp/experimental-app-router";
import Link from "next/link";
import "@/faust.config.js";

export default async function RootLayout({ children }) {
  const client = await getClient();

  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <h3>
              <Link href="/my-account/create-post">Draft Post</Link>
            </h3>
            <h3>
              <Link href="/my-account">My Account</Link>
            </h3>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
