import { IDevKitCli } from "./IDevKitCli";

export interface IDevKitCliFactory {
    construct(args: any[]): IDevKitCli;
}