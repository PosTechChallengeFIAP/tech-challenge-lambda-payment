import { Context, SQSEvent } from "aws-lambda";

export class PaymentLambda {
    static async handler(event: SQSEvent, context: Context) {
        const record = event.Records[0];
        const body = JSON.parse(record.body);
        console.log('PaymentLambda.handler', event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'PaymentLambda.handler executed successfully!',
                input: body,
            }),
        };
    }
}