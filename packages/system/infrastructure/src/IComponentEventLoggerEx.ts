import { IComponentEventLogger } from "./IComponentEventLogger";

export interface IComponentEventLoggerEx extends IComponentEventLogger {
    logTrace(message: string, ...parameters: any[]): void;
    logWarning(message: string, ...parameters: any[]): void;
    logError(message: string, ...parameters: any[]): void;
}

export interface IComponentEventLoggerExFactory {
    constructEventLoggerEx();
}