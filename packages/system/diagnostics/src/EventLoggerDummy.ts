import { IEventLogger, EventCategory, IEventLoggerFactory } from './IEventLogger';

export class EventLoggerDummy implements IEventLogger {
    logEvent(source: string, eventCategory: EventCategory, message: string, ...parameters: any[]): void {

    }

    static Singleton: EventLoggerDummy = new EventLoggerDummy();
}

export class EventLoggerDummyFactory implements IEventLoggerFactory {
    constructEventLogger(): IEventLogger {
        return EventLoggerDummy.Singleton;
    }

    static Singleton: EventLoggerDummyFactory = new EventLoggerDummyFactory();
}