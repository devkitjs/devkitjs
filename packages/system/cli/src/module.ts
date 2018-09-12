import * as commander from 'commander';

import { ConsoleEventLoggerFactory, IEventLoggerEx, IEventLoggerFactoryEx } from '@devkit/diagnostics'; 

const eventLoggerFactory: IEventLoggerFactoryEx = new ConsoleEventLoggerFactory();

const logger: IEventLoggerEx = eventLoggerFactory.constructEventLoggerEx();

logger.logTrace('sdfsdfsdf');

commander.version('1.0.0');