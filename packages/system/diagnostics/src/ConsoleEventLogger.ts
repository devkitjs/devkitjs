import { IEventLogger, EventCategory, IEventLoggerFactory } from "./IEventLogger";
import { IEventLoggerFactoryEx } from "./IEventLoggerEx";
import { EventLoggerExFacade } from "./EventLoggerExFacade";

class ConsoleEventLogger implements IEventLogger {
    logEvent(eventCategory: EventCategory, tag: string, message: string, ...parameters: any[]): void {
        console.log(message);
    }
}

export class ConsoleEventLoggerFactory implements IEventLoggerFactory, IEventLoggerFactoryEx {
    constructEventLogger(): IEventLogger {
        return new ConsoleEventLogger();
    }
    constructEventLoggerEx() {
        return EventLoggerExFacade.wrap(this.constructEventLogger());
    }
}