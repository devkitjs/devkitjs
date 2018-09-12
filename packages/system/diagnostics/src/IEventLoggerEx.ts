import { IEventLogger } from "./IEventLogger";

export interface IEventLoggerEx extends IEventLogger {
    logTrace(tag: string, message: string, ...parameters: any[]): void;
    logWarning(tag: string, message: string, ...parameters: any[]): void;
    logError(tag: string, message: string, ...parameters: any[]): void;
    logTrace(message: string, ...parameters: any[]): void;
    logWarning(message: string, ...parameters: any[]): void;
    logError(message: string, ...parameters: any[]): void;
}

export interface IEventLoggerFactoryEx {
    constructEventLoggerEx();
}