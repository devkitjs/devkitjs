import { IEventLogger, EventCategory } from './IEventLogger';
import { IEventLoggerEx } from "./IEventLoggerEx";

export class EventLoggerExFacade implements IEventLoggerEx {
    constructor(innerLogger: IEventLogger) {
        this._innerLogger = innerLogger;
    }
    logTrace(source: string, message: string): void; 
    logTrace(message: string): void; 
    logTrace(): void {
        if (arguments.length >= 2) {
            return this._logTraceWithTag.apply(this, arguments);
        } else {
            if (arguments.length >= 1) {
                return this._logTraceWithoutTag.apply(this, arguments);
            }
        }
    }  

    logWarning(source: string, message: string): void;
    logWarning(message: string): void;
    logWarning(): void {
        if (arguments.length >= 2) {
            return this._logWarningWithTag.apply(this, arguments);
        } else {
            if (arguments.length >= 1) {
                return this._logWarningWithoutTag.apply(this, arguments);
            }
        }
    }  

    logError(source: string, message: string): void;
    logError(message: string): void;
    logError(): void {
        if (arguments.length >= 2) {
            return this._logErrorWithTag.apply(this, arguments);
        } else {
            if (arguments.length >= 1) {
                return this._logErrorWithoutTag.apply(this, arguments);
            }
        }
    }  

    logEvent(source: string, eventCategory: EventCategory, message: string): void {
        this._innerLogger.logEvent(source, eventCategory, message);
    }

    public static wrap(logger: IEventLogger): EventLoggerExFacade {
        return new EventLoggerExFacade(logger); 
    }

    private _logTraceWithTag(source: string, message: string): void {
        this._innerLogger.logEvent(source, EventCategory.TRACE, message);
    }
    private _logTraceWithoutTag(message: string): void {
        this._innerLogger.logEvent(undefined, EventCategory.TRACE, message);
    }
    
    private _logWarningWithTag(source: string, message: string): void {
        this._innerLogger.logEvent(source, EventCategory.WARNING, message);
    }
    private _logWarningWithoutTag(message: string): void {
        this._innerLogger.logEvent(undefined, EventCategory.WARNING, message);
    }

    private _logErrorWithTag(source: string, message: string): void {
        this._innerLogger.logEvent(source, EventCategory.ERROR, message);
    }
    private _logErrorWithoutTag(message: string): void {
        this._innerLogger.logEvent(undefined, EventCategory.ERROR, message);
    }

    private _innerLogger: IEventLogger;
}