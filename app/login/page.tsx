import { onLogin } from "@faustwp/experimental-app-router";
import { redirect } from "next/navigation";

export default async function Page() {
  async function loginAction(formData: FormData) {
    "use server";

    const res = await onLogin(formData);

    if (res.error) {
      /**
       * @TODO Next.js is still working on ways persisting error messages from
       * server actions to the client.
       *
       * "Displaying loading or error states currently requires using
       * Client Components. We are exploring options for server-side functions
       * to retrieve these values as we move forward in stability for Server Actions."
       *
       * @link https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#error-handling
       */
      console.error(res.error);
    } else {
      redirect("/my-account");
    }
  }

  return (
    <>
      <div>
        <h2 className="flex justify-center ">Login Here</h2>
      </div>
      <form action={loginAction}>
        <fieldset>
          <label htmlFor="usernameEmail">Username or Email</label>
          <input type="name" name="usernameEmail" />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </fieldset>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
}
