//Types
import type { Route } from "./+types/form";
import { redirect, useFetcher, data } from "react-router";

export async function action({
	request
}: Route.ActionArgs) {

	const formData = await request.formData();
  const name = String(formData.get("name"));
	console.log(name);

  const errors = {};

  if (name.length === 0) {
    errors.name = "Please enter a value";
  }

  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 });
  }


  // Redirect to dashboard if validation is successful
  return redirect("/form");
}

export default function Form({
	loaderData,
	actionData
}: Route.ComponentProps) {
		
	let fetcher = useFetcher();
	let errors = fetcher.data?.errors;

	return (
		 <fetcher.Form method="post">
      <p>
        <input type="name" name="name" />
        {errors?.name ? <em>{errors.name}</em> : null}
      </p>

      <button type="submit">Submit</button>
    </fetcher.Form>
	)
}
