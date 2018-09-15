import { Container } from 'inversify';
import 'reflect-metadata';
import { SERVICES } from './Services';
import UniversalServices from './services/universal';
import { IDevKitCli } from './IDevKitCli';
import { IDevKitCliCommand } from './IDevKitCliCommand';

const container = new Container();

container.load(UniversalServices);

container
    .getTagged<IDevKitCli>(SERVICES.DEV_KIT_CLI, 'mode', process.argv.length >= 2 ? 'immediate' : 'interactive')
    .execute(process.argv);