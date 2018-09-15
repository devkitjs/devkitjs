export interface IComponentEventLogger {
    logEvent(message: string, ...parameters: any[]);
}

export interface IComponentEventLoggerFactory {
    constructComponentEventLogger(label: string);
}