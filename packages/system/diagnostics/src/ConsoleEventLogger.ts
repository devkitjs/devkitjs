import { IEventLogger, EventCategory, IEventLoggerFactory } from "./IEventLogger";
import { IEventLoggerExFactory } from "./IEventLoggerEx";
import { EventLoggerExFacade } from "./EventLoggerExFacade";
import { injectable } from 'inversify';

@injectable()
export class ConsoleEventLogger implements IEventLogger {
    logEvent(source: string, eventCategory: EventCategory, message: string, ...parameters: any[]): void {
        if (source) {
            console.log(`${eventCategory} ${source}: ${message}`);
        } else {
            console.log(message);
        }
    }
}

@injectable()
export class ConsoleEventLoggerFactory implements IEventLoggerFactory, IEventLoggerExFactory {
    constructEventLogger(): IEventLogger {
        return new ConsoleEventLogger();
    }
    constructEventLoggerEx() {
        return EventLoggerExFacade.wrap(this.constructEventLogger());
    }
}