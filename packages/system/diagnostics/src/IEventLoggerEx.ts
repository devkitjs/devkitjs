import { IEventLogger } from "./IEventLogger";

export interface IEventLoggerEx extends IEventLogger {
    logTrace(source: string, message: string, ...parameters: any[]): void;
    logWarning(source: string, message: string, ...parameters: any[]): void;
    logError(source: string, message: string, ...parameters: any[]): void;
    logTrace(message: string, ...parameters: any[]): void;
    logWarning(message: string, ...parameters: any[]): void;
    logError(message: string, ...parameters: any[]): void;
}

export interface IEventLoggerExFactory {
    constructEventLoggerEx();
}