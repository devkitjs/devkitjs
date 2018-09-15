export enum EventCategory {
    TRACE = 'TRACE',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

export interface IEventLogger {
    logEvent(source: string, eventCategory: EventCategory, message: string, ...parameters: any[]): void;
}

export interface IEventLoggerFactory {
    constructEventLogger(): IEventLogger;
}