import { IDevKitCliCommand } from "./IDevKitCliCommand";
import { injectable } from "inversify";

type CommandInfo = {

}

@injectable()
export class DevKitCliCommandRegistry {
    constructor() {
        this._commands = {};
    }
    registerCommand(name: string): void {
        if (this._commands[name]) {
            throw Error('Command already exists');
        } else {
            this._commands[name] = {};
        }
    }
    listCommands(): string[] {
        return Object.keys(this._commands);
    }
    createCommand(name: string): IDevKitCliCommand {
        throw Error('Not implemented');
    }

    private _commands: { [key: string]: CommandInfo };
}