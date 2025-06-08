# AWS Lambda: Bedrock Model Invocation

This Lambda function is written in Python and is designed to receive incoming requests, invoke an AWS Bedrock model, and return the model's response. Frontend for this is available in `/app` folder

## Features

- Receives HTTP requests
- Forwards the request payload to an AWS Bedrock model
- Returns the model's response to the client

## Prerequisites

- AWS account with access to Bedrock models
- IAM role for Lambda with permissions to invoke Bedrock models
- Python 3.12+ runtime for Lambda

## Setup

1. **Clone the repository** and navigate to the Lambda directory:
    ```bash
    git clone <repo-url>
    cd chatbot-using-bedrock/lambda
    ```

2. **Install dependencies** (if any, e.g., `boto3`):
    ```bash
    pip install -r requirements.txt -t .
    ```

3. **Configure environment variables** (if required):
    - `BEDROCK_MODEL_ID`: The ID of the Bedrock model to invoke
    - Any AWS credentials or region settings (if not using Lambda's default role)

## Example Event

```json
{
  "input": "Your prompt or data here"
}
```

## Response

```json
{
  "result": "Model's response here"
}
```

## Deployment

It is deployed using [Serverless framework](https://serverless.com)

## License

MIT
