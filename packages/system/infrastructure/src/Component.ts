import { IEventLogger, EventLoggerExFacade } from '@devkit/diagnostics';
import { ComponentInternals } from './ComponentInternals';

export class Component {
    constructor(label: string, eventLogger?: IEventLogger) {
        this._internals = new ComponentInternals(label, EventLoggerExFacade.wrap(eventLogger));
    }

    protected logTrace(message: string, ...parameters: any[]): void {
        this._internals.logTrace(message, parameters);
    }
    protected logWarning(message: string, ...parameters: any[]): void {
        this._internals.logTrace(message, parameters);
    }
    protected logError(message: string, ...parameters: any[]): void {
        this._internals.logTrace(message, parameters);
    }
    protected logEvent(message: string, ...parameters: any[]): void {
        this._internals.logEvent(message, parameters);
    }

    private _internals: ComponentInternals;
}