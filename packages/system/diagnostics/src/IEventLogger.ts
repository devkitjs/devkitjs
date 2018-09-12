export enum EventCategory {
    TRACE = 0,
    WARNING = 1,
    ERROR = 2
}

export interface IEventLogger {
    logEvent(eventCategory: EventCategory, tag: string, message: string): void;
}

export interface IEventLoggerFactory {
    constructEventLogger(): IEventLogger;
}