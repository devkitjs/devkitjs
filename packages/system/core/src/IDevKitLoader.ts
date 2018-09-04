import { IDevKit } from "./IDevKit";
import { PackageSelectorOrName, ToolsetInstaller, PropertyQuery } from "./DevKitLoaderCore";

export interface IDevKitLoader {
    requireToolset(selectorString: string): IDevKitLoader;
    requireToolset(name: string, version: string): IDevKitLoader;
    requireToolsets(...toolsetSelectorsOrNames: PackageSelectorOrName[]): IDevKitLoader;
    requirePlugin(selectorString: string): IDevKitLoader;
    requirePlugin(name: string, version: string): IDevKitLoader;
    requirePlugins(...pluginSelectorsOrNames: PackageSelectorOrName[]): IDevKitLoader;
    queryProperty(name: string, message: string): IDevKitLoader;
    queryProperties(properties: PropertyQuery[]): IDevKitLoader;
    
    load(properties: PropertyQuery[], toolsets: PackageSelectorOrName[], plugins: PackageSelectorOrName[]): IDevKitLoader;
    ready(toolsetInstaller: ToolsetInstaller): void;
}