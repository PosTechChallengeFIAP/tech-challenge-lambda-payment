import { Logger } from "../../utils/logger";
import { UseCase } from "../usecase";
import { TPaymentUseCaseRequest, TPaymentUseCaseResponse } from "./types";

export interface IPaymentUseCase extends UseCase<TPaymentUseCaseRequest, TPaymentUseCaseResponse> {}

export class PaymentUseCase implements IPaymentUseCase {
    public async execute(request: TPaymentUseCaseRequest): Promise<TPaymentUseCaseResponse> {
        Logger.info('PaymentUseCase.execute', 'start', request);
    }
}