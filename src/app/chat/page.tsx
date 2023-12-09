"use client";
import { prisma } from "@/lib/prisma";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import MessageInterface from "./messageInterface";

export default function ChatInterface() {
	const [chats, setChats] = useState<any[]>([]);
	const [isLoading, setLoading] = useState(true);
	const [selected, setSelected] = useState("");
	var i = 0;

	async function createNewChat(): Promise<void> {
		const response = await fetch("/api/createChat", {
			method: "POST",
			body: JSON.stringify({}),
		});
		if (response.status === 200) {
			setLoading(true);
			setSelected("");
		}
	}

	useEffect(() => {
		fetch("/api/getChats")
			.then((response) => response.json())
			.then((data) => {
				setChats(data[0].data.reverse());
				if (chats[0] !== undefined) {
					setSelected(chats[0].id);
				}
				setLoading(false);
			});
	}, [isLoading]);

	if (isLoading) return <p>Loading...</p>;
	// if (!chats) return <p>No chats</p>;

	return (
		<div>
			<div className="flex">
				<div
					id="sidebar"
					className="bg-gray-700 w-[25vw] h-[100vh] rounded-lg overflow-y-scroll"
				>
					<div id="messList" className="mt-4 mx-4 space-y-4">
						<div
							id="message-preview"
							className=" text-white w-inherit h-[50px] flex justify-start items-center bg-gray-600 z-10 rounded-lg overflow-hidden"
							onClick={createNewChat}
						>
							{/* <i className="fa-solid fa-square-plus"></i>  */}
							<p
								style={{ whiteSpace: "nowrap" }}
								className="overflow-hidden mx-4"
							>
								<i className="fa-regular fa-pen-to-square"></i>{" "}
								New Chat
							</p>
						</div>

						{chats.map((element: { id: string }) => {
							i++;
							return (
								<div
									key={element.id}
									onClick={() => setSelected(element.id)}
									id="message-preview"
									className={
										` text-white w-inherit h-[50px] flex justify-start items-center hover:bg-gray-600 z-10 rounded-lg overflow-hidden ` +
										(selected === element.id
											? "bg-gray-600"
											: "")
									}
								>
									<p
										style={{ whiteSpace: "nowrap" }}
										className="overflow-hidden mx-4"
									>
										Chat no. {chats.length - i + 1}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				{selected !== "" ? (
					<MessageInterface chatID={selected} />
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
