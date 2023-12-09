import React, { useEffect, useState } from "react";

type messPropsType = {
	chatID: string;
};

export default function MessageInterface(props: messPropsType) {
	console.log("message ran");
	const [messgs, setMessgs] = useState<any[]>([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/getMessages?chatID=" + props.chatID)
			.then((response) => response.json())
			.then((data) => {
				setMessgs(data[0].data.reverse());
				console.log(messgs);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div>
			<div
				id="chat"
				className="bg-gray-100 w-[75vw] h-[90vh] overflow-y-scroll"
			>
				<div className="w-[70%] ml-[10%] mt-8 space-y-4 mb-[50vh]">
					{messgs.map(
						(element: { query: string; response: string }) => {
							return (
								<div>
									<div>
										<h3 className="font-bold">You</h3>
										<p>{element.query}</p>
									</div>
									<div>
										<h3 className="font-bold">
											Arjun's GPT
										</h3>
										<p>{element.response}</p>
									</div>
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="h-[10vh] bg-gray-100">
				<form action="/api/openai" method="POST">
					<div className="">
						<input
							className="border border-black w-[65vw] mx-[5vw] mb-8 rounded-md py-4 px-2 absolute bottom-0 pr-[5vw]"
							type="text"
							name="prompt"
							id=""
							placeholder="Ask a question..."
						/>
						<input
							type="hidden"
							name="chatID"
							value={props.chatID}
						/>
						<button
							className="z-20 mx-[5vw] mb-8 rounded-md py-4 px-2 absolute bottom-0 right-0"
							type="submit"
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
