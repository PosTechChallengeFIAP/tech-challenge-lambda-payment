import { Context, SQSEvent } from "aws-lambda";
import { Router } from "./controllers/router";
import { PaymentController } from "./controllers/payment.controller";
import { Logger } from "./utils/logger";

enum EPaymentRoutes {
    PAYMENT = 'payment.lambda',
}

export class PaymentLambda {
    static async handler(event: SQSEvent, _: Context) {
        Logger.info('PaymentLambda.handler', 'start', event);
        
        const record = event.Records[0];
        const body = JSON.parse(record.body);
        const { type, data } = body;

        const paymentController = new PaymentController();

        const router = new Router();
        router.use(EPaymentRoutes.PAYMENT,paymentController.execute);

        const response = await router.execute(type, data);
        Logger.info('PaymentLambda.handler', 'end', response);

        return response;
    }
}