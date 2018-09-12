import { IEventLogger, EventCategory } from './IEventLogger';
import { IEventLoggerEx } from "./IEventLoggerEx";

export class EventLoggerExFacade implements IEventLoggerEx {
    constructor(innerLogger: IEventLogger) {
        this._innerLogger = innerLogger;
    }
    logTrace(tag: string, message: string): void; 
    logTrace(message: string): void; 
    logTrace(): void {
        if (arguments.length === 2) {
            return this._logTraceWithTag.apply(this, arguments);
        } else {
            if (arguments.length === 1) {
                return this._logTraceWithoutTag.apply(this, arguments);
            }
        }
    }  

    logWarning(tag: string, message: string): void;
    logWarning(message: string): void;
    logWarning(): void {
        if (arguments.length === 2) {
            return this._logWarningWithTag.apply(this, arguments);
        } else {
            if (arguments.length === 1) {
                return this._logWarningWithoutTag.apply(this, arguments);
            }
        }
    }  

    logError(tag: string, message: string): void;
    logError(message: string): void;
    logError(): void {
        if (arguments.length === 2) {
            return this._logErrorWithTag.apply(this, arguments);
        } else {
            if (arguments.length === 1) {
                return this._logErrorWithoutTag.apply(this, arguments);
            }
        }
    }  

    logEvent(eventCategory: EventCategory, tag: string, message: string): void {
        this._innerLogger.logEvent(eventCategory, tag, message);
    }

    private _logTraceWithTag(tag: string, message: string): void {
        this._innerLogger.logEvent(EventCategory.TRACE, tag, message);
    }
    private _logTraceWithoutTag(message: string): void {
        this._innerLogger.logEvent(EventCategory.TRACE, undefined, message);
    }
    
    private _logWarningWithTag(tag: string, message: string): void {
        this._innerLogger.logEvent(EventCategory.WARNING, tag, message);
    }
    private _logWarningWithoutTag(message: string): void {
        this._innerLogger.logEvent(EventCategory.WARNING, undefined, message);
    }

    private _logErrorWithTag(tag: string, message: string): void {
        this._innerLogger.logEvent(EventCategory.ERROR, tag, message);
    }
    private _logErrorWithoutTag(message: string): void {
        this._innerLogger.logEvent(EventCategory.ERROR, undefined, message);
    }

    private _innerLogger: IEventLogger;
}