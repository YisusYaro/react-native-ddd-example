import { Command } from "../../shared/application/command";
import { CommandBus } from "../../shared/infrastructure/command-bus/command-bus";
import { App } from "../../shared/infrastructure/dependency-injection/app";
import { TYPES as SHARED_TYPES } from "../../shared/infrastructure/dependency-injection/types";
import { CreateResourceCommand } from "../application/commands/create-resource.command";

const executeCommand = async (command: Command) => {
  const commandBus = App.getInstance()
    .getContainer()
    .get<CommandBus>(SHARED_TYPES.CommandBus);

  await commandBus.execute(command);
};

export const createResource = async (form: any) => {
  const command = new CreateResourceCommand(form);
  await executeCommand(command);
};
