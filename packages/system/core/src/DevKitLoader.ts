import { IDevKitLoader } from "./IDevKitLoader";
import { PackageSelectorOrName, PropertyQuery, ToolsetInstaller, DevKitLoaderCore, PackageSelector } from "./DevKitLoaderCore";

export class DevKitLoader implements IDevKitLoader {
    constructor(loaderCore: DevKitLoaderCore) {
        this._loaderCore = loaderCore;
        this._properties = [];
        this._toolsets = [];
        this._plugins = [];
    }

    requireToolset(selectorString: string): IDevKitLoader;    
    requireToolset(name: string, version: string): IDevKitLoader;
    requireToolset(selectorStringOrName: string, version?: string): IDevKitLoader {
        throw new Error("Method not implemented.");
    }
    requireToolsets(...toolsetSelectorsOrNames: PackageSelectorOrName[]): IDevKitLoader {
        throw new Error("Method not implemented.");
    }
    requirePlugin(selectorString: string): IDevKitLoader;
    requirePlugin(name: string, version: string): IDevKitLoader;
    requirePlugin(selectorStringOrName: string, version?: string): IDevKitLoader{
        throw new Error("Method not implemented.");
    }
    requirePlugins(...pluginSelectorsOrNames: PackageSelectorOrName[]): IDevKitLoader {
        throw new Error("Method not implemented.");
    }
    queryProperty(name: string, message: string): IDevKitLoader {
        throw new Error("Method not implemented.");
    }
    queryProperties(properties: PropertyQuery[]): IDevKitLoader {
        throw new Error("Method not implemented.");
    }
    load(properties: PropertyQuery[], toolsets: PackageSelectorOrName[], plugins: PackageSelectorOrName[]): IDevKitLoader {
        this._loaderCore.load(properties, toolsets, plugins);

        return this;
    }
    ready(toolsetInstaller: ToolsetInstaller): void {
        this._loaderCore.ready(toolsetInstaller);
    }

    private _tryParseSelectorString(selectorStringOrName: string): PackageSelector {
        const regexp = /(?<scope>@\w+\/)(?<name>\w+@)(?<version>[\w\d]+)/;

        const matches = selectorStringOrName.match(regexp);

        return {
            name: 
        };
    }

    private _loaderCore: DevKitLoaderCore;
    private _properties: PropertyQuery[];
    private _toolsets: PackageSelector[];
    private _plugins: PackageSelector[];
}