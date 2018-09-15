import { IDevKitCli } from "./IDevKitCli";
import { inject, injectable, named, tagged } from "inversify";
import { SERVICES } from "./Services";
import { IEventLogger } from "@devkit/diagnostics";
import { ManagedComponent } from "@devkit/infrastructure";

@injectable()
export class DevKitCliBuilder extends ManagedComponent {
    constructor(
        @inject(SERVICES.DEV_KIT_IMMEDIATE_CLI_FACTORY) 
        @tagged('mode', 'immediate') 
        immediateCliFactory: () => IDevKitCli,

        @inject(SERVICES.DEV_KIT_INTERACTIVE_CLI_FACTORY) 
        @tagged('mode', 'interactive') 
        interactiveCliFactory: () => IDevKitCli,

        @inject(SERVICES.EVENT_LOGGER) logger?: IEventLogger
    ) {
        super('DevKitCliBuilder', logger);

        this._immediateCliFactory = immediateCliFactory;
        this._interactiveCliFactory = interactiveCliFactory;
    }

    buildCliFromArgs(args: any[]): IDevKitCli {
        super.logTrace(`Building DevKitCli from args, args.length = ${args.length}...`);

        return args.length > 2 ? this._immediateCliFactory() : this._interactiveCliFactory();
    }

    private _immediateCliFactory: () => IDevKitCli;
    private _interactiveCliFactory: () => IDevKitCli;
}