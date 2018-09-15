import { IEventLogger, IEventLoggerFactory, EventCategory } from "@devkit/diagnostics";
import { inject, injectable, named } from "inversify";
import { SERVICES } from "./Services";
import { ManagedComponent } from '@devkit/infrastructure';
import * as commander from 'commander';
import { DevKitCliCommandInit } from "./commands/DevKitCliCommandInit";
import { IDevKitCliCommand } from "./IDevKitCliCommand";
import { DevKitCliCommandRegistry } from "./DevKitCommandRegistry";
import { IDevKitCli } from "./IDevKitCli";
import { IDevKitCliFactory } from "./IDevKitCliFactory";
import { DevKitInteractiveCli } from "./DevKitInteractiveCli";

@injectable()
export class DevKitImmediateCli extends ManagedComponent implements IDevKitCli {
    constructor(
        @inject(SERVICES.DEV_KIT_CLI_COMMAND_MAP_FACTORY)
        commandMapFactory: () => { [name: string]: IDevKitCliCommand },
        @inject(SERVICES.EVENT_LOGGER)
        logger?: IEventLogger
    ) {
        super('DevKitImmediateCli', logger);

        this._commandMap = commandMapFactory();


        Object.keys(this._commandMap).map(commandName => {
            commander.command(commandName)
                .description('Initialize devkit')
                .action((args) => {
                    super.logTrace(`Preparing command '${commandName}'...`);

                    this._commandMap[commandName].execute(args);
                });
        });
    }

    execute(args: any[]): void {
        commander.parse(args);
    }

    private readonly _commandMap: { [name: string]: IDevKitCliCommand };
}