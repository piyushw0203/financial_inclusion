import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Analyze the following expenditure data and provide personalized suggestions for making more sustainable and cost-effective financial choices. Focus on how these financial decisions can positively impact the environment and be budget-friendly. Consider areas such as transportation, food, energy consumption, clothing, waste reduction, purchasing decisions, and banking/investments. Ensure that the advice is practical, actionable, and relevant to their current spending habits" }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}
main();