import { ContainerModule, interfaces } from "inversify";
import { IDevKitCliCommand } from "../IDevKitCliCommand";
import { SERVICES } from "../Services";
import { DevKitCliCommandInit } from "../commands/DevKitCliCommandInit";

export default new ContainerModule(
(
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
) => {
    const bindCommand = <T>(id: string, constructor: any, name: string) => {
        bind<T>(id)
            .to(constructor)
            .whenTargetNamed(name);
    }

    bindCommand<IDevKitCliCommand>(SERVICES.DEV_KIT_CLI_COMMAND, DevKitCliCommandInit, 'init');
});