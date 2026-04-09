# Problem Statement
AI Movie Assistant Chatbot uses React, Vite, LangChain, and MCP to deliver interactive, personalized movie recommendations through a conversational interface.
# Business Problem
Users struggle to choose movies from huge OTT platforms
Too many options → decision fatigue
Reviews are long and time-consuming to read
No quick system that suggests movies based on mood or interest
Need for a fast, smart, AI-based movie recommendation system
# Possible Solution
Build an AI-powered movie recommendation chatbot
User inputs mood / genre / language
System understands input and suggests movies instantly
Automate recommendation flow using AI + workflow tools (like n8n)
# Implemented Solution
Developed a chatbot-style web application
User enters mood like “happy, sad, action, romantic”
Input is sent to n8n webhook
n8n processes request and connects to AI (Ollama)
AI generates movie recommendations
Response is returned and shown in chat UI
# Tech Stack Used
Frontend: HTML, CSS, JavaScript / React
Automation Workflow: n8n
AI Engine: Ollama / OpenAI / Mock AI
API Communication: REST API (Fetch)
Version Control: GitHub
# architecture diagram
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/15a8ac92-a1f3-4f27-9659-15b0207faf19" />

