import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
	console.log(request);

	const requestUrl = new URL(request.url);
	var prompt = requestUrl.searchParams.get("prompt");
	const chatID = requestUrl.searchParams.get("chatID");
	if (prompt !== undefined) {
		prompt = decodeURI(prompt!);
		console.log(prompt);
		console.log(chatID);
		const completion = await openai.completions.create({
			model: "text-davinci-003",
			prompt: `${prompt}`,
		});

		console.log(completion);

		if (chatID !== null && prompt !== null) {
			await prisma.messages.create({
				data: {
					chatID: chatID,
					query: prompt,
					response: completion.choices[0]?.text!,
				},
			});
		}

		return NextResponse.json([
			{
				text: "success",
			},
			{
				status: 200,
			},
		]);
	} else {
		return NextResponse.json([
			{
				text: "No prompt provided.",
			},
			{
				status: 500,
			},
		]);
	}
}
