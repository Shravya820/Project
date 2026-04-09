# Problem Statement
AI Movie Assistant Chatbot uses React, Vite, LangChain, and MCP to deliver interactive, personalized movie recommendations through a conversational interface.
# Business Problem
Users struggle to choose movies from huge OTT platforms.
Too many options → decision fatigue.
Reviews are long and time-consuming to read.
No quick system that suggests movies based on mood or interest.
Need for a fast, smart, AI-based movie recommendation system.
# Possible Solution
Build an AI-powered movie recommendation chatbot.
User inputs mood / genre / language.
System understands input and suggests movies instantly.
Automate recommendation flow using AI + workflow tools (like n8n).
# Implemented Solution
Developed a chatbot-style web application.
User enters mood like “happy, sad, action, romantic”.
Input is sent to n8n webhook.
n8n processes request and connects to AI (Ollama).
AI generates movie recommendations.
Response is returned and shown in chat UI.
# Tech Stack Used
Frontend: HTML, CSS, JavaScript / React.
Automation Workflow: n8n.
AI Engine: Ollama .
API Communication: REST API (Fetch).
Version Control: GitHub.
# architecture diagram
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/15a8ac92-a1f3-4f27-9659-15b0207faf19" />

# How to Run in Local
Clone GitHub repository.
Install dependencies (npm install).
Start frontend (npm start).
Setup and run n8n workflow.
Activate webhook URL.
Connect frontend API to webhook.
Open browser and test chatbot.
#  References & Resources
n8n official documentation.
OpenAI / Ollama documentation.
YouTube tutorials on AI chatbot development.
GitHub sample projects for reference.
Stack Overflow for debugging support.
# Screenshots
Full stack excution
<img width="1878" height="786" alt="Screenshot 2026-04-09 203749" src="https://github.com/user-attachments/assets/60ef5472-1cbe-497d-94b8-a77ff7fb8551" />
<img width="1877" height="786" alt="Screenshot 2026-04-09 203935" src="https://github.com/user-attachments/assets/8cd4c360-d798-4d6d-8de8-318c20162ebb" />
<img width="1877" height="791" alt="Screenshot 2026-04-09 204039" src="https://github.com/user-attachments/assets/84ef2c06-63ed-44a3-ae60-365129ce3977" />
n8n workflow excution
<img width="1358" height="592" alt="Screenshot 2026-04-10 012700" src="https://github.com/user-attachments/assets/b608b2a8-4098-4dba-a3c1-94cea296f6e6" />


# Problems Faced & Solutions
Problem 1: Webhook not triggering
Solution: Corrected webhook URL and activated workflow 

Problem 2: Frontend not connecting to n8n
Solution: Fixed API endpoint and enabled proper request format

 Problem 3: AI giving irrelevant responses
 Solution: Improved prompt structure and input formatting

 Problem 4: Confusion between test and production URL
 Solution: Used correct production webhook

 Problem 5: Integration delay
 Solution: Used mock AI first, then replaced with real integration

