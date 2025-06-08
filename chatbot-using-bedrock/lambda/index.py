import os
import json
import boto3

def make_response(status_code, body):
    return {
        'statusCode': status_code,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(body)
    }

def lambda_handler(event, context):
    # Get the input prompt from the event
    try:
        if 'body' in event:
            body = json.loads(event['body'])
        else:
            body = event
        prompt = body.get('input')
        if not prompt:
            return make_response(400, {'error': 'Missing input prompt'})
    except Exception as e:
        return make_response(400, {'error': f'Invalid request: {str(e)}'})

    # Get Bedrock model ID from environment
    model_id = os.environ.get('BEDROCK_MODEL_ID')
    if not model_id:
        return make_response(500, {'error': 'BEDROCK_MODEL_ID environment variable not set'})

    # Create Bedrock Runtime client
    bedrock = boto3.client('bedrock-runtime')

    try:
        response = bedrock.invoke_model(
            modelId=model_id,
            body=json.dumps({"inputText": prompt}),
            contentType="application/json",
            accept="application/json"
        )
        result_body = response['body'].read().decode('utf-8')
        result_json = json.loads(result_body)
        return make_response(200, {'result': result_json})
    except Exception as e:
        return make_response(500, {'error': f'Error invoking Bedrock model: {str(e)}'})
