import { IComponentEventLogger, IComponentEventLoggerFactory } from './IComponentEventLogger';

export class ComponentEventLoggerFactory implements IComponentEventLoggerFactory {
    constructComponentEventLogger(label: string): IComponentEventLogger {
        throw Error("Not implemented");
    }
}