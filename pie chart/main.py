from openai import OpenAI

# Initialize the OpenAI client with your API key
client = OpenAI(api_key="sk-proj-ibhTrmVMcOYL8ThC4Ib3T3BlbkFJZ4bwAIc23jqw2HFfEp4q")

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Analyze the following expenditure data and provide personalized suggestions for making more sustainable and cost-effective financial choices. Focus on how these financial decisions can positively impact the environment and be budget-friendly. Consider areas such as transportation, food, energy consumption, clothing, waste reduction, purchasing decisions, and banking/investments. Ensure that the advice is practical, actionable, and relevant to their current spending habits"},
        {"role": "user", "content": "Rent: $1,500, Electricity: $75, Water: $50, Internet: $60, Groceries: $300, Dining Out: $100, Gas: $40, Car Insurance: $80, Cell Phone: $50, Gym Membership: $60, Netflix: $15, Clothing: $75, Miscellaneous: $50"}
    ]
)

# Print the generated completion
print(completion.choices[0].message.content)