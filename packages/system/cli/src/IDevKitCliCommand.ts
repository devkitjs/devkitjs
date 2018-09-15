export interface IDevKitCliCommand {
    readonly name: string;
    readonly description: string;
    execute(args: any[]);
}