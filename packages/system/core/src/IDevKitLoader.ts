export type PropertyQuery = {
    name: string;
    message: string;
}

export type PackageSpecifier = {
    name: string;
    version: string;
}

export type PackageSpecifierOrName = PackageSpecifier | string;

export type DevKitLoaderCallback = () => void;

export interface IDevKitLoader {
    deployToolset(packageSpecifier: string, callback?: DevKitLoaderCallback): IDevKitLoader;
    deployToolsets(...packageSpecifiers: string[]): IDevKitLoader;
    requirePlugin(packageSpecifier: string, callback?: DevKitLoaderCallback): IDevKitLoader;
    requirePlugins(...packageSpecifiers: string[]): IDevKitLoader;
    queryProperty(name: string, message: string): IDevKitLoader;
    queryProperties(...properties: PropertyQuery[]): IDevKitLoader;
    
    load(properties: PropertyQuery[], toolsets: string[], plugins: string[], callback?: DevKitLoaderCallback): IDevKitLoader;
    ready(callback: DevKitLoaderCallback): void;
}