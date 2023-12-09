import React from "react";

type messPropsType = {
	chatID: string;
};

export default function MessageInterface(props: messPropsType) {
	return (
		<div id="chat" className="bg-gray-100 w-[75vw] h-[100vh]">
			<div className="w-[70%] ml-[10%] mt-8 space-y-4">
				<div>
					<h3 className="font-bold">You</h3>
					<p>
						The code utilizes jQuery for simplicity, making it easy
						to manage the dynamic aspects of the navigation bar.
						Overall, this frontend fosters an intuitive and visually
						appealing navigation experience.
					</p>
				</div>
				<div>
					<h3 className="font-bold">Arjun's ChatGPT</h3>
					<p>
						The code utilizes jQuery for simplicity, making it easy
						to manage the dynamic aspects of the navigation bar.
						Overall, this frontend fosters an intuitive and visually
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
	);
}
