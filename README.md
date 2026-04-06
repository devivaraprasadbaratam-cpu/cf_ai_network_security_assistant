# AI Network Security Assistant 🔐

## Overview
This project is an AI-powered tool that analyzes network logs and detects suspicious activity. It uses Cloudflare Workers AI (Llama 3) to provide explanations and security recommendations.

## Features
- Detect suspicious activity
- Explain possible threats
- Suggest mitigation steps

## Tech Stack
- Cloudflare Workers
- Workers AI (Llama 3)
- HTML, CSS, JavaScript

## How to Run
1. Deploy backend:
   wrangler deploy

2. Open frontend:
   frontend/index.html

3. Enter log and click Analyze

## Example Input
Multiple failed login attempts from IP 192.168.1.1

## Output
- Threat detected
- Explanation
- Suggested fixes