import { IEventLogger, EventCategory, IEventLoggerFactory } from "./IEventLogger";

class ConsoleEventLogger implements IEventLogger {
    logEvent(eventCategory: EventCategory, tag: string, message: string, ...parameters: any[]): void {
        console.log(message);
    }
}

export class ConsoleEventLoggerFactory implements IEventLoggerFactory {
    constructEventLogger(): IEventLogger {
        return new ConsoleEventLogger();
    }
}