import { IEventLogger, EventCategory, IEventLoggerFactory } from './IEventLogger';

class EventLoggerDummy implements IEventLogger {
    logEvent(eventCategory: EventCategory, tag: string, message: string, ...parameters: any[]): void {

    }
}

export class EventLoggerDummyFactory implements IEventLoggerFactory {
    constructEventLogger(): IEventLogger {
        return new EventLoggerDummy();
    }
}