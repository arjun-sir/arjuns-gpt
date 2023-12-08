import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function LogoutPage() {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	if (!data.session) {
		console.log(data.session);
		return redirect("/login");
	}

	return (
		<div>
			<form method="post">
				<label htmlFor="logout">logout</label>
				<button id="logout" formAction="/auth/logout">
					Logout
				</button>
			</form>
		</div>
	);
}
