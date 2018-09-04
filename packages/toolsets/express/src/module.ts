import { DevKitLoader, DevKitEnvironment, DevKitConfiguration } from "../../../system/core/src/DevKitLoaderCore";

export default (devkitloader: DevKitLoader, config: DevKitConfiguration, env: DevKitEnvironment) => {
    devkitloader.requireToolsets(['node'])
        .then(() => {

        });
}