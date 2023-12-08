"use client";
import { prisma } from "@/lib/prisma";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";

type ChatInterfaceProps = {
	userChats: any;
};

export default function ChatInterface(props: ChatInterfaceProps) {
	const [selected, setSelected] = useState(false);
	const [chat, setChat] = useState("");
	var i = 0;

	async function createNewChat(): Promise<void> {
		console.log("new chat");
		const response = await fetch("/api/createChat", {
			method: "POST",
			body: JSON.stringify({}),
		});
		if (response.status === 200) {
			console.log("hello");
			setChat("");
			setSelected(true);
		}
	}

	useEffect(() => {
		// if (selected) {
		// 	setChat(props.userChats[0].id);
		// }
		console.log(chat);
	}, [chat]);

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
						{props.userChats.map((element: { id: string }) => {
							i++;
							return (
								<div
									key={element.id}
									onClick={() => setChat(element.id)}
									id="message-preview"
									className=" text-white w-inherit h-[50px] flex justify-start items-center hover:bg-gray-600 z-10 rounded-lg overflow-hidden"
								>
									<p
										style={{ whiteSpace: "nowrap" }}
										className="overflow-hidden mx-4"
									>
										Chat no. {i}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				{chat !== "" ? (
					<div id="chat" className="bg-gray-100 w-[75vw] h-[100vh]">
						<div className="w-[70%] ml-[10%] mt-8 space-y-4">
							<div>
								<h3 className="font-bold">You</h3>
								<p>
									The code utilizes jQuery for simplicity,
									making it easy to manage the dynamic aspects
									of the navigation bar. Overall, this
									frontend fosters an intuitive and visually
									appealing navigation experience.
								</p>
							</div>
							<div>
								<h3 className="font-bold">Arjun's ChatGPT</h3>
								<p>
									The code utilizes jQuery for simplicity,
									making it easy to manage the dynamic aspects
									of the navigation bar. Overall, this
									frontend fosters an intuitive and visually
									appealing navigation experience.
								</p>
							</div>
						</div>
						<div>
							<form action="">
								<div className="fixed bottom-0">
									<input
										className="border border-black w-[65vw] mx-[5vw] mb-8 rounded-md py-4 px-2"
										type="text"
										name=""
										id=""
										placeholder="Ask a question..."
									/>
								</div>
								<div className="fixed bottom-0 right-0 z-20">
									<button
										className="z-20 mx-[5vw] mb-8 rounded-md py-4 px-2"
										type="submit"
										name=""
										id=""
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				) : (
					<div
						id="newChat"
						className="bg-gray-100 w-[75vw] h-[100vh]"
					>
						<div className="w-[70%] mt-8 space-y-4">
							<form action="">
								<div className="fixed bottom-0">
									<input
										className="border border-black w-[65vw] mx-[5vw] mb-8 rounded-md py-4 px-2"
										type="text"
										name=""
										id=""
										placeholder="Ask a question..."
									/>
								</div>
								<div className="fixed bottom-0 right-0 z-20">
									<button
										className="z-20 mx-[5vw] mb-8 rounded-md py-4 px-2"
										type="submit"
										name=""
										id=""
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
