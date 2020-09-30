import { Command } from "@ortio/core";

const command = new Command("ping");

command
  .setInitialCommandHandler((message) => {
    console.log(message.content);
    message.reply("Pong!");
  })
  .addSubCommand("twice", (message) => {
    console.log(message.content);
    message.reply("Pong pong!");
  });

export default command;
