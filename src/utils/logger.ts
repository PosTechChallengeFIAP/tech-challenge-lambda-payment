import winston from 'winston';
import WinstonCloudWatch from 'winston-cloudwatch';

// Configuração do logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(), // Formata os logs como JSON
    transports: [
        new WinstonCloudWatch({
            logGroupName: process.env.LOG_GROUP_NAME,
            logStreamName: process.env.LOG_STREAM_NAME,
            awsRegion: process.env.AWS_REGION,
        }),
    ],
});

export class Logger {
    static info(title: string, message?: string, data?: any) {
        logger.info({ title, message, data });
    }

    static error(title: string, message?: string, data?: any) {
        logger.error({ title, message, data });
    }
}