import { IComponentEventLoggerEx } from "./IComponentEventLoggerEx";
import { IEventLoggerEx, EventCategory } from "@devkit/diagnostics";

export class ComponentEventLoggerExFacade implements IComponentEventLoggerEx {
    constructor(componentLabel: string, innerLogger: IEventLoggerEx) {
        this._componentLabel = componentLabel;
        this._innerLogger = innerLogger;
    }
    logTrace(message: string, ...parameters: any[]): void {
        this._innerLogger.logTrace(this._componentLabel, message, parameters);
    }    
    logWarning(message: string, ...parameters: any[]): void {
        this._innerLogger.logWarning(this._componentLabel, message, parameters);
    }
    logError(message: string, ...parameters: any[]): void {
        this._innerLogger.logError(this._componentLabel, message, parameters);
    }
    logEvent(message: string, ...parameters: any[]) {
        this._innerLogger.logEvent(this._componentLabel, EventCategory.TRACE, message, parameters);
    }

    private _componentLabel: string;
    private _innerLogger: IEventLoggerEx;
}