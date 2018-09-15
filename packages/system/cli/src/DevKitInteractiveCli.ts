import { IEventLogger, IEventLoggerFactory, EventCategory } from "@devkit/diagnostics";
import { inject, injectable, named } from "inversify";
import { SERVICES } from "./Services";
import { ManagedComponent } from '@devkit/infrastructure';
import * as commander from 'commander';
import { DevKitCliCommandInit } from "./commands/DevKitCliCommandInit";
import { IDevKitCli } from "./IDevKitCli";
import { IDevKitCliFactory } from "./IDevKitCliFactory";
import { DevKitCliCommandRegistry } from "./DevKitCommandRegistry";

export class DevKitInteractiveCli extends ManagedComponent implements IDevKitCli {
    constructor(
        @inject(SERVICES.DEV_KIT_CLI_COMMAND_REGISTRY)
        commandRegistry: DevKitCliCommandRegistry, 
        @inject(SERVICES.EVENT_LOGGER)
        logger?: IEventLogger
    ) {
        super('DevKitInteractiveCli', logger);

        throw Error('Not implemented');

        // commander.command('init')
        //     .description('Initialize devkit')
        //     .action((args) => {
        //         super.logTrace('Preparing command \'init\'...');

        //         commandInit.execute(args);
        //     });
    }

    execute(args: any[]): void {
        commander.parse(args);
    }
}