import { IDevKitCliCommand } from "../IDevKitCliCommand";
import { ManagedComponent } from '@devkit/infrastructure';
import { injectable, unmanaged, inject } from "inversify";
import { IEventLogger } from "@devkit/diagnostics";
import { SERVICES } from "../Services";

@injectable()
export class DevKitCliCommandInit extends ManagedComponent implements IDevKitCliCommand {
    constructor(@inject(SERVICES.EVENT_LOGGER) eventLogger?: IEventLogger) {
        super('DevKitCliCommandInit', eventLogger);
    }

    readonly name: string = 'init';
    readonly description: string = 'Initialize devkit';

    execute(args: any[]) {
        super.logTrace('Executing command \'init\'...');

        throw new Error('Method not implemented.');
    }
}