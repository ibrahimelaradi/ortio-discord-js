import "./environment";
import { Ortio } from "@ortio/core";
import client from "./client";

const ortio = new Ortio({
  client,
  commandsPath: "./commands", // Path to commands
  defaultPrefix: "!", // Default prefix to parse commands
  filterRegex: /^\w+Command\.js$/ // Regex to filter files in the commandsPath
});

ortio.automaticallyComposeCommands().then(() => {
  client.login(process.env.API_TOKEN).then(() => {
    console.log("Bot is ready..");
  });
});
