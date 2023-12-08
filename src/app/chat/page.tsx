import { PrismaClient, Prisma } from "@prisma/client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";

const prisma = new PrismaClient();

export default async function ChatPage() {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	const userChats = await prisma.chats.findMany({
		where: {
			userID: data.session?.user.id,
		},
	});

	// let test = messList!.children;
	// console.log(messList!.children);
	// const chat = document.getElementById("chat");
	// const newChat = document.getElementById("newChat");
	// for (let i = 0; i < test.length; i++) {
	// 	const element = test[i];
	// 	if (i === 0) {
	// 		element?.addEventListener("click", () => {
	// 			newChat!.classList.remove("hidden");
	// 			chat!.classList.add("hidden");
	// 		});
	// 	} else {
	// 		element?.addEventListener("click", () => {
	// 			newChat!.classList.add("hidden");
	// 			chat!.classList.remove("hidden");
	// 		});
	// 	}
	// }

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
						{userChats.map((element) => {
							return (
								<div
									key={element.id}
									id="message-preview"
									className=" text-white w-inherit h-[50px] flex justify-start items-center hover:bg-gray-600 z-10 rounded-lg overflow-hidden"
								>
									{" "}
									<p
										style={{ whiteSpace: "nowrap" }}
										className="overflow-hidden mx-4"
									>
										element
									</p>{" "}
								</div>
							);
						})}
					</div>
				</div>
				<div
					id="chat"
					className="bg-gray-100 w-[75vw] h-[100vh] hidden"
				>
					<div className="w-[70%] ml-[10%] mt-8 space-y-4">
						<div>
							<h3 className="font-bold">You</h3>
							<p>
								The code utilizes jQuery for simplicity, making
								it easy to manage the dynamic aspects of the
								navigation bar. Overall, this frontend fosters
								an intuitive and visually appealing navigation
								experience.
							</p>
						</div>
						<div>
							<h3 className="font-bold">Arjun's ChatGPT</h3>
							<p>
								The code utilizes jQuery for simplicity, making
								it easy to manage the dynamic aspects of the
								navigation bar. Overall, this frontend fosters
								an intuitive and visually appealing navigation
								experience.
							</p>
						</div>
					</div>
				</div>
				<div id="newChat" className="bg-gray-100 w-[75vw] h-[100vh]">
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
			</div>
		</div>
	);
}
