import { ContainerModule, interfaces as inversifyInterfaces, interfaces } from "inversify";
import { ConsoleEventLogger, IEventLogger } from "@devkit/diagnostics";
import { SERVICES } from "../Services";
import { IDevKitCliCommand } from "../IDevKitCliCommand";
import { DevKitCliCommandInit } from "../commands/DevKitCliCommandInit";
import { DevKitCliCommandRegistry } from "../DevKitCommandRegistry";
import { DevKitCliBuilder } from "../DevKitCliBuilder";
import { DevKitImmediateCli } from "../DevKitImmediateCli";
import { DevKitInteractiveCli } from "../DevKitInteractiveCli";
import { IDevKitCli } from './../IDevKitCli';

export default new ContainerModule(
(
    bind: inversifyInterfaces.Bind,
    unbind: inversifyInterfaces.Unbind,
    isBound: inversifyInterfaces.IsBound,
    rebind: inversifyInterfaces.Rebind
) => {
    bind<IEventLogger>(SERVICES.EVENT_LOGGER)
        .to(ConsoleEventLogger)
        .inSingletonScope();    

    bind<IDevKitCliCommand>(SERVICES.DEV_KIT_CLI_COMMAND)
        .to(DevKitCliCommandInit)
        .inTransientScope();

    bind<DevKitCliCommandRegistry>(SERVICES.DEV_KIT_CLI_COMMAND_REGISTRY)
        .to(DevKitCliCommandRegistry);

    bind<IDevKitCli>(SERVICES.DEV_KIT_CLI)
        .to(DevKitImmediateCli)
        .whenTargetTagged('mode', 'immediate');

    bind<IDevKitCli>(SERVICES.DEV_KIT_CLI)
        .to(DevKitInteractiveCli)
        .whenTargetTagged('mode', 'interactive');

    bind<interfaces.Factory<{ [key: string]: IDevKitCliCommand }>>(SERVICES.DEV_KIT_CLI_COMMAND_MAP_FACTORY)
        .toFactory(context => () => context.container.getAll<IDevKitCliCommand>(SERVICES.DEV_KIT_CLI_COMMAND).reduce<{ [name: string]: IDevKitCliCommand }>((previousValue, currentValue, currentIndex, array) => { previousValue[currentValue.name] = currentValue; return previousValue; }, {}))
});