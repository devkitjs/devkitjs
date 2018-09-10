import { IDevKitLoader, DevKitLoaderCallback, PropertyQuery } from "./IDevKitLoader";
import { DevKitLoaderCore } from "./DevKitLoaderCore";

export class DevKitLoader implements IDevKitLoader {
    constructor(loaderCore: DevKitLoaderCore) {
        this._loaderCore = loaderCore;
        this._properties = [];
        this._toolsets = [];
        this._plugins = [];
    }
    
    deployToolset(packageSpecifier: string, callback?: DevKitLoaderCallback): IDevKitLoader {
        throw Error('Not implemented');
    }
    deployToolsets(...packageSpecifiers: string[]): IDevKitLoader {
        throw Error('Not implemented');
    }
    requirePlugin(packageSpecifier: string, callback?: DevKitLoaderCallback): IDevKitLoader {
        throw Error('Not implemented');
    }
    requirePlugins(...packageSpecifiers: string[]): IDevKitLoader {
        throw Error('Not implemented');
    }
    queryProperty(name: string, message: string): IDevKitLoader {
        throw Error('Not implemented');
    }
    queryProperties(...properties: PropertyQuery[]): IDevKitLoader {
        throw Error('Not implemented');
    }
    
    load(properties: PropertyQuery[], toolsets: string[], plugins: string[], callback?: DevKitLoaderCallback): IDevKitLoader {
        throw Error('Not implemented');
    }
    ready(callback: DevKitLoaderCallback): void {
        throw Error('Not implemented');
    }

    private _loaderCore: DevKitLoaderCore;
    private _properties: PropertyQuery[];
    private _toolsets: string[];
    private _plugins: string[];
}