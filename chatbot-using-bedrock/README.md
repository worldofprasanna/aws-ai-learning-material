# Chatbot using AWS Bedrock

A full-stack chat application that leverages AWS Bedrock for powerful AI responses. The frontend is built with ReactJS, while the backend is a Python AWS Lambda function that interacts with Bedrock. This project is designed to demonstrate AWS Bedrock's capabilities, as explained in the accompanying [YouTube video](#).

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Conversational chat interface (ReactJS)
- Serverless backend (AWS Lambda, Python)
- Real-time interaction with AWS Bedrock models
- Easily extensible and deployable (Vercel, Serverless Framework)

## Architecture

```
[User] ⇄ [React Frontend] ⇄ [API Gateway] ⇄ [AWS Lambda (Python)] ⇄ [AWS Bedrock]
```

- **Frontend:** ReactJS app (see `/app`)
- **Backend:** Python Lambda function (see `/lambda`)
- **Model:** AWS Bedrock (model ID configurable via environment variable)

## Prerequisites

- ReactJS (for frontend)
- Python 3.12+ (for Lambda)
- AWS account with Bedrock access
- IAM role for Lambda with Bedrock permissions
- AWS CLI configured (for deployment)

## Project Structure

```
chatbot-using-bedrock/
├── app/         # React frontend (create or add your app here)
├── lambda/      # Python AWS Lambda backend
│   ├── index.py
│   ├── requirements.txt
│   └── serverless.yml
└── README.md    # Project documentation
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

MIT