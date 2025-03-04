import { APIGatewayEvent, Context } from "aws-lambda";

export class PaymentLambda {
    static async handler(event: APIGatewayEvent, context: Context) {
        console.log('PaymentLambda.handler', event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'PaymentLambda.handler executed successfully!',
                input: event,
            }),
        };
    }
}