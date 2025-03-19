import { IPaymentUseCase, PaymentUseCase } from "../usecase/payment/payment.usecase";
import { Logger } from "../utils/logger";
import { IController } from "./controller";

type TPaymentControllerRequest = {
    orderId: string;
    paymentId: string;
    status: string;
}

export class PaymentController implements IController<TPaymentControllerRequest> {
    constructor(
        private readonly paymentUseCase: IPaymentUseCase = new PaymentUseCase(),
    ) {}

    public async execute(body: TPaymentControllerRequest) {
        Logger.info('PaymentController.payment', 'start', body);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'PaymentController.payment executed successfully!',
                input: body,
            }),
        };
    }
}