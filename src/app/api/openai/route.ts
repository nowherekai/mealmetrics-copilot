import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

async function generateInfo(recipe: string) {
    console.log(`generateInfo: ${recipe}`);
    try {
        const openai = new OpenAI();
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: `I want you to act as a Nutrition Facts Generator. I will provide you with a recipe and your role is to generate nutrition facts for that recipe. You should use your knowledge of nutrition science, nutrition facts labels and other relevant information to generate nutritional information for the recipe. Add each nutrition fact to a new line. I want you to only reply with the nutrition fact. Do not provide any other information. My first request is: ${recipe}` }],
            temperature: 0.2,
            n: 1,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function GET(request: NextRequest) {
        return NextResponse.json("hello");
}

export async function POST(request: NextRequest) {
        const { recipe } = await request.json();
        const response = await generateInfo(recipe);
        return NextResponse.json({success: true, nutritionFacts: [response]});
}

