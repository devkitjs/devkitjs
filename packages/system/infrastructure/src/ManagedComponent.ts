import { IEventLoggerFactory, EventLoggerDummy } from '@devkit/diagnostics';
import { IComponentEventLoggerEx } from './IComponentEventLoggerEx';
import { ComponentEventLoggerExFacade } from './ComponentEventLoggerExFacade';
import { EventLoggerExFacade } from '@devkit/diagnostics';
import { IEventLogger } from '@devkit/diagnostics';
import { injectable, unmanaged } from 'inversify';
import { Component } from './Component';
import { ComponentInternals } from './ComponentInternals';

@injectable()
export class ManagedComponent {
    constructor(@unmanaged() label: string, @unmanaged() eventLogger?: IEventLogger) {
        this._internals = new ComponentInternals(label, eventLogger);
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