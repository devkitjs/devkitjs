import { IDevKitPlugin } from './IDevKitPlugin';
import { IDevKitToolset } from './IDevKitToolset';
import { IDevKit } from './IDevKit';

export type DevKitConfiguration = {
    [key: string]: any;
}

export type DevKitEnvironment = {
    [key: string]: any;
}

export enum DependencyMode {
    RUNTIME,
    DEVELOPMENT,
    PEER
}

// export class DevKitLoader {
//     executeCommand(command: string): void {
//         throw Error('Not implemented');
//     }
//     deployDependency(packages: string[], mode: DependencyMode): void {
//         throw Error('Not implemented');
//     }
//     requireToolsets(toolsets: string[]): Promise<{[key: string]: IDevKitToolset}> {
//         throw Error('Not implemented');
//     }
//     requirePlugins(plugins: string[]): Promise<{[key: string]: IDevKitPlugin}> {
//         throw Error('Not implemented');
//     }
//     //  Diagnostics
//     log(message: string): void {
//         throw Error('Not implemented');
//     }
//     error(message: string): void {
//         throw Error('Not implemented');
//     }
//     warn(message: string): void {
//         throw Error('Not implemented');
//     }
// }

export type PropertyQuery = {
    name: string;
    message: string;
}

export type PackageSelector = {
    name: string;
    version: string;
}

export type PackageSelectorOrName = PackageSelector | string;

export type ToolsetPropertyDictionary = {
    [key: string]: string;
}

export type ToolsetInstaller = (devkit: IDevKit, properties: ToolsetPropertyDictionary) => void;

export class DevKitLoaderCore {
    load(properties: PropertyQuery[], toolsets: PackageSelectorOrName[], plugins: PackageSelectorOrName[]): void {
        throw Error('Not implemented');
    }
    ready(toolsetInstaller: ToolsetInstaller): void {
        throw Error('Not implemented');
    }
}