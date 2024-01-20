// Modified by Axo Coder

const client = require("../index");
const Discord = require(`discord.js`);
const chalk = require('chalk');
const simplydjs = require("simply-djs");

let statuses = [
  ".help | Zephyr",
]
let e = statuses.length

function status() {
  i = Math.floor(Math.random() * (e))
  client.user.setActivity(statuses[i],
    {
      type: "PLAYING",
    });
}

client.on("ready", async () => {
  simplydjs.connect(process.env.MONGO)

  setInterval(status, 3000)

  console.clear()
  console.log(chalk.bgBlack(chalk.greenBright(`═════════════════════════════════════════════`)));
  console.log(chalk.magenta(`
  Modified by Zephyr | Developed by Mashfi
  `))
  console.log(chalk.bgBlack(chalk.magentaBright(`═════════════════════════════════════════════`)));
  console.log(chalk.yellowBright("GeneXis eSports | Online And Fully Functional"))
  console.log(chalk.bgBlack(chalk.yellowBright(`═════════════════════════════════════════════`)))

  console.log(chalk.cyanBright(`GeneXis eSports | Node: ${process.version}
  GeneXis eSports | Discord.js: ${Discord.version}
  GeneXis eSports | Connected as: ${client.user.username}
  GeneXis eSports | ID: ${client.user.id}
  GeneXis eSports | Owner: ⍟ ・🜲 Zephyr`));
  console.log(chalk.bgBlack(chalk.cyanBright(`═════════════════════════════════════════════`)))
  console.log(chalk.red(`GeneXis eSports | Currently watching ${client.guilds.cache.size} Servers`));
  console.log(chalk.bgBlack(chalk.red(`═════════════════════════════════════════════`)));
})

// loading database
require('../handlers/Database')(client)

client.guilds.cache.forEach(async (guild) => {
  await client.updateembed(client, guild)
});
