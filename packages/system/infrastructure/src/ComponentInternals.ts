import { IEventLoggerFactory, EventLoggerDummy } from '@devkit/diagnostics';
import { IComponentEventLoggerEx } from './IComponentEventLoggerEx';
import { ComponentEventLoggerExFacade } from './ComponentEventLoggerExFacade';
import { EventLoggerExFacade } from '@devkit/diagnostics';
import { IEventLogger } from '@devkit/diagnostics';
import { injectable, unmanaged } from 'inversify';

export class ComponentInternals {
    constructor(label: string, eventLogger?: IEventLogger) {
        this._logger = new ComponentEventLoggerExFacade(label, EventLoggerExFacade.wrap(eventLogger || EventLoggerDummy.Singleton));
    }

    logTrace(message: string, ...parameters: any[]): void {
        this._logger.logTrace(message, parameters);
    }
    logWarning(message: string, ...parameters: any[]): void {
        this._logger.logTrace(message, parameters);
    }
    logError(message: string, ...parameters: any[]): void {
        this._logger.logTrace(message, parameters);
    }
    logEvent(message: string, ...parameters: any[]): void {
        this._logger.logEvent(message, parameters);
    }

    private _logger: IComponentEventLoggerEx;
}