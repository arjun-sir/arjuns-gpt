import { prisma } from "@/lib/prisma";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React, { useReducer } from "react";
import ChatInterface from "./chatInterface";

export default async function ChatPage() {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	const userChats = await prisma.chats.findMany({
		where: {
			userID: data.session?.user.id,
		},
		orderBy: {
			userID: "desc",
		},
	});

	return (
		<div>
			<ChatInterface userChats={userChats} />
		</div>
	);
}
