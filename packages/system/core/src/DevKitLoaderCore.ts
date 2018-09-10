import { IDevKit } from './IDevKit';
import { PropertyQuery, DevKitLoaderCallback } from './IDevKitLoader';

export class DevKitLoaderCore {
    load(properties: PropertyQuery[], toolsets: string[], plugins: string[]): void {
        throw Error('Not implemented');
    }
    ready(callback: DevKitLoaderCallback): void {
        throw Error('Not implemented');
    }
}