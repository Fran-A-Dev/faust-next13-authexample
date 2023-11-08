"use server";
import { onLogin } from "@faustwp/experimental-app-router";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const res = await onLogin(formData);

  console.log(res);

  if (res.error) {
    return res;
  }

  redirect("/my-account");
}
