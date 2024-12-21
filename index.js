// Hey This Bot elped By Za3em ||
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Dev By N')
});

app.listen(3000, () => {
  console.log(chalk.blue.bold('Desha Devlopment'));
});

// ⚚・─━━━❲❲ Za3em Uptime ❳❳━━━─・⚚ \\
app.post("/uptime_devtools", (req, res) => {
  console.log("N Uptime")
    res.send({
      msg: "done uptime",
      access: "by_devtools",
    })
  })

// ⚚・─━━━❲❲ Za3em Intents ❳❳━━━─・⚚ \\
  const { Intents, Client, Collection, MessageEmbed, WebhookClient, MessageButton, MessageActionRow, MessageSelectMenu , MessageAttachment,  TextInputComponent , Modal} = require('discord.js')
 // const {createTranscript} = require('discord-html-transcripts');
  const ms = require("ms")
  const axios = require('axios');
  const fs = require(`node:fs`)
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_PRESENCES
    ],
    partials: ["REACTION", "MESSAGE", "CHANNEL"]
  }).setMaxListeners(0)
  const { REST } = require("@discordjs/rest")
  const { Routes } = require("discord-api-types/v9")
  const config = require(`./config.json`)
  const db = require(`pro.db`)
  const chalk = require('chalk');
  const prefix = "-"
  client.config = config
  const line = "https://media.discordapp.net/attachments/1281946346059857971/1281965759572217866/lv_0_20240907161402.gif?ex=6713b0a6&is=67125f26&hm=ca90ab451b1dd0f0230c37380006216679507a97e946432869b6ea7b914fc951&"

// ⚚・─━━━❲❲ Anti Crashes ❳❳━━━─・⚚ \\

  const Discord = require("discord.js")
  module.exports = client

   process.on("unhandledRejection", error => {
    return console.log(error)
  }); 
   process.on("unhandledRejection", error => {
    return 
  }); 
   process.on("unhandledRejection", error => {
    return 
  }); 

// ⚚・─━━━❲❲ Za3em Anti Crashs ❳❳━━━─・⚚ \\

  process.on('unhandledRejection', (reason, p) => {
      console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase());
      console.log(reason.stack ? String(reason.stack) : String(reason));
      console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase());
    });
    process.on("uncaughtException", (err, origin) => {
      console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase());
      console.log(err.stack ? err.stack : err)
      console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase());
    })
    process.on('uncaughtExceptionMonitor', (err, origin) => {
      console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase());
    });
    process.on('beforeExit', (code) => {
      console.log('\n\n\n\n\n[🚩 Anti-Crash] before Exit'.toUpperCase());
    //  console.log(code.yellow.dim);
      console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase());
    });
    process.on('exit', (code) => {
      console.log('\n\n\n\n\n[🚩 Anti-Crash] exit'.toUpperCase());
      //console.log(code.yellow.dim);
      console.log('=== exit ===\n\n\n\n\n'.toUpperCase());
    });
    process.on('multipleResolves', (type, promise, reason) => {
      console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase());
      console.log(type, promise, reason);
      console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase());
    });

// ⚚・─━━━❲❲ Za3em Ready ❳❳━━━─・⚚ \\
client.on('ready', async () => {
  console.log(chalk.blue.bold(`================`));
  console.log(chalk.red.bold(`Bot Name : ${client.user.username}`));
  console.log(chalk.red.bold(`Bot Tag : ${client.user.tag}`));
  console.log(chalk.red.bold(`Bot Id : ${client.user.id}`));
  console.log(chalk.red.bold(`Servers Count : ${client.guilds.cache.size}`));
  console.log(chalk.red.bold(`Users Count : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`));
  console.log(chalk.blue.bold(`================`));

  var statuses = [`Desha 𝖴𝗉 𝖥𝗈𝗋 𝖤𝗏𝖾𝗋`, `𝖣𝖾𝗏 : Desha`];
  var timers = 2;
  var timeing = Math.floor(timers * 1000);
  
  setInterval(function() {
    var lengthesof = statuses.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://www.twitch.tv/userend_?sr=a' });
  }, timeing);
})
// ⚚・─━━━❲❲ Za3em Vars ❳❳━━━─・⚚ \\

  const welcome = "1286785359572766832"
  const bank = "1255986683011272816"
  const link = "https://discord.gg/qDg9wCEpPP"
  const feedback = "1282337419064250526"
  const ordercategory = "1290273188168597555"
  const applycategory =  "1295098361447452767"
  const supportcategory = "1295098362625785979"
  const taxchannel = "1282337419064250523"
  const transfers = "1282337419064250522"
  const supportrole = "1296852382369452072"  
  const teamrole = "1282347999439229029"  
  let team = "129139805549285996"
  let color = "#ff0000"
  let order = "1291398056549285996"
  let applyteam =  "1287739071497633874"
  let support = "1296852382369452072"
  let owners = ["1255986683011272816"]
  let owner = owners;
  var blacklistWords = ['كس امك', '@here', '@everyone']
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// ⚚・─━━━❲❲ welcome ❳❳━━━─・⚚ \\
client.on('guildMemberAdd', async (member) => {

  let welcomefukenembed = new MessageEmbed()
    .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
    .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(`**
> 𝐇𝐞𝐲 ${member.user.username} <a:cs:1288204894255185950>

> 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __${member.guild.name}__ <a:cs:1288208795960479869>

> 𝐌𝐞𝐦𝐛𝐞𝐫 𝐈𝐝  \`${member.id}\` <a:Giveawayyyvp:1288215371073196207>

> 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 <#${order}> <a:cs:1288204919912005663>

> 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 <#${applyteam}> <a:cs:1288204919912005663>

> 𝐄𝐧𝐣𝐨𝐲 <3 <a:cs:1288204894255185950>

> 𝐘𝐨𝐮 𝐀𝐫𝐞 𝐌𝐞𝐦𝐛𝐞𝐫 𝐍𝐮𝐦𝐛𝐞𝐫 \`${member.guild.memberCount}\` <a:cs:1288204919912005663>
**`) 
    .setImage(line)
    .setColor(color);

  member.guild.channels.cache.get(welcome).send({ content: `<@${member.user.id}>`, embeds: [welcomefukenembed] });

  member.send(`**
> 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 ${member.guild.name}

> \`#\` <a:Tada_Purple:1288198865501294642> مرحبا بك ، نورت اكبر و اضمن خادم فالشرق العربي اركان تيم 



> \`#\`تعريف بسيط : اركان تيم سيرفر عربي يوفر جميع الخدمات ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، . ويوفر جميع المبيعات - التصاميم - البوتات - والمزيد في مكان واحد 


# نتمي لك السعاده معنا
**`);
});
// ⚚・─━━━❲❲ Encryption ❳❳━━━─・⚚ \\

  client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix + "spin")) {
    if (!owners.includes(message.author.id)) return;
    const fakePrizes = [
      "100k",
      "150k",
      "500k",
      "750k",
      "مليون كريدت",
      "2 مليون",
      "نيترو كلاسك جيفت",
    ];
    const prizes = [
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      "100k",
      //
      "150k",
      "150k",
      "150k",
      "150k",
      "150k",
      "150k",
      "150k",
      //
      "500k",
      "500k",
      "500k",
      "500k",
      "500k",
      "500k",
      //
      "15k",
      "15k",
      "15k",
      "15k",
      "15k",
      //
      "مليون كريدت",
      "مليون كريدت",
      "مليون كريدت",
      "مليون كريدت",
      //
      "2 مليون",
      "2 مليون",
      //
      "نيترو كلاسك جيفت",
      //
      /*"100k",*/
    ];
    const msg = await message.channel.send("**جاري لف العجلة...**");
    const randowTime = parseInt(Math.random() * (20000 - 15000) + 15000);
    const interval = setInterval(() => {
      const fakePrizesRandow = fakePrizes[Math.floor(Math.random() * fakePrizes.length)];
      msg.edit(`**العجلة تلف على : ${fakePrizesRandow}**`);
    }, 1000);
    await wait(randowTime);
    clearInterval(interval);
    const prizesRandow = prizes[Math.floor(Math.random() * prizes.length)];
    msg.edit(`**العجلة توقفت على : ${prizesRandow}**`);
  }
});

    client.on('messageCreate', message => {
      if (message.author.bot || message.member.permissions.has('ADMINISTRATOR')) return;

      const content = message.content.split(' ');

      if (!content[0]) return;

      content.forEach(arg => {
        if (!message) return;

        const found = blacklistWords.filter(b => b === arg).map(m => m)[0];

        if (found) {
          message.author.send('> \`-\` **تم مسح رسالتك التي تحتوي على شتم**');
          message.delete();
          return;
        }
      });
    });

// ⚚・─━━━❲❲ +help ❳❳━━━─・⚚ \\

  client.on('messageCreate', message => {
  if (message.content === prefix + 'help') {
    const button1 = new MessageButton()
        .setLabel('𝐃𝐞𝐯𝐥𝐨𝐩𝐞𝐫')
        .setURL('https://discord.com/users/1255986683011272816')
        .setEmoji('<a:cs:1288204919912005663>')
        .setStyle('LINK');
    const button3 = new MessageButton()
        .setLabel('𝐒𝐮𝐩𝐩𝐨𝐫𝐭')
        .setURL('https://discord.gg/qDg9wCEpPP')
        .setEmoji('<a:cs:1288204919912005663>>')
       .setStyle('LINK'); 

    const row1 = new MessageActionRow().addComponents(button1, button3);
    const embed = new MessageEmbed()
      .setTitle('**Help Menu:**')
      .setColor(color)
      .setImage(line)
      .setThumbnail(message.guild.iconURL())
      .setDescription(`
> 𝐈𝐦 N | 𝐒𝐲𝐬𝐭𝐞𝐦 <a:emoji_7:1296917756230369290> 

> 𝐈 𝐖𝐨𝐫𝐤 𝐅𝐨𝐫 N . <a:emoji_7:1296917756230369290> 

> 𝐌𝐲 𝐃𝐞𝐯𝐥𝐨𝐩𝐞𝐫 𝐈𝐬  N . <a:emoji_7:1296917756230369290>`);

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('commands')
        .setPlaceholder('⚘・𝐂𝐡𝐨𝐨𝐬𝐞 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
        .addOptions([
          {
            label: 'Owner',
            value: 'Owners',
            description: 'To Display Owner Commands',
            emoji: '<a:emoji_5:1296917664043896845>',
          },
          {
            label: 'General',
            value: 'Public',
            description: 'To Display General Commands',
            emoji: '<a:emoji_7:1296917756230369290>',
          },
          {
            label: 'Moderator',
            value: 'Admins',
            description: 'To Display Moderator Commands',
            emoji: '<a:emoji_7:1296917756230369290>',
          },
          {
            label: 'Team',
            value: 'Store',
            description: 'To Display Team Commands',
            emoji: '<a:emoji_7:1296917756230369290>',
          },
        ]),
    );

    message.channel.send({ embeds: [embed], components: [row, row1] });

  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isSelectMenu()) return;

  const category = interaction.values[0];

  try {
    if (category === 'Owners') {
      const first = new MessageEmbed()
        .setTitle('**Owner Commands:**')
        .setColor(color)
        .setImage(line)
        .setThumbnail(interaction.guild.iconURL())
        .setDescription(`
**> ${prefix}setactivity
To Change Activity Bot
> ${prefix}setprefix
To Change Prefix Bot
> ${prefix}setavatar
To Change Avatar Bot
> ${prefix}delete-tickets
To Delete Normal Tickets
> ${prefix}delete-closed
To Delete Closed Tickets
> ${prefix}tbc
To Send Broadcast For Team**`);

      interaction.update({ embeds: [first], components: interaction.message.components });
    } else if (category === 'Public') {
      const publicCmds = new MessageEmbed()
        .setTitle('**General Commands:**')
        .setColor(color)
        .setImage(line)
        .setThumbnail(interaction.guild.iconURL())
        .setDescription(`
**> ${prefix}uptime
To Show Uptime Bot
> ${prefix}link
To Show Link Server
> ${prefix}avatar-server
To Show Avatar Server
> ${prefix}server
To Show Information Server
> ${prefix}dev
To Find Out Who Made The Bot**`);

      interaction.update({ embeds: [publicCmds], components: interaction.message.components });
    } else if (category === 'Admins') {
      const adminCmds = new MessageEmbed()
        .setTitle('**Admin Commands:**')
        .setColor(color)
        .setImage(line)
        .setThumbnail(interaction.guild.iconURL())
        .setDescription(`
**> ${prefix}embed
To Make Embed Message
> ${prefix}say
To Make Say Message
> ${prefix}unbanall
To UnBan All Member
> ${prefix}name
To SetName A Member
> ${prefix}lock
To Lock Channel
> ${prefix}unlock
To UnLock Channel
> ${prefix}show
To Show Channel
> ${prefix}hide
To Hide Channel
> ${prefix}ban
To Ban Member
> ${prefix}unban
To UnBan Member
> ${prefix}g-role
To Give Role To Member
> ${prefix}r-role
To Remove Role To Member**`);

      interaction.update({ embeds: [adminCmds], components: interaction.message.components });
    } else if (category === 'Store') {
      const storeCmds = new MessageEmbed()
        .setTitle('**Team Commands:**')
        .setColor(color)
        .setImage(line)
        .setThumbnail(interaction.guild.iconURL())
        .setDescription(`
**> ${prefix}send
To Send Msg DM To Member
> ${prefix}come
To Come DM To Member
> ${prefix}tax
To Show Tax A Number
> ${prefix}font
To Change Word For 𝐖𝐨𝐫𝐝
> ${prefix}tag
To Change Seller Name
> مقبول
To Accept Someone For Team
> مرفوض
To Reject Someone For Team
> ${prefix}دليل
To Get The Pro Bot Website Where You Can Find The Guide
> ${prefix}bot
To Obtain A Form If You Are Requesting A Bot
> re
To Change Ticket Name
> fb
To Send Feedback Message
> ${prefix}ws
To Send Wait Seller Message
> ${prefix}design
To Obtain A Form If You Are Requesting A Design
> ${prefix}rep
To Obtain A Form If You Want To Inform Someone**`);

      interaction.update({ embeds: [storeCmds], components: interaction.message.components });
    }
  } catch (error) {
    console.error('Error handling interaction:', error);
    await interaction.reply({ content: 'There was an error while processing the interaction.', ephemeral: true });
  }
});

// ⚚・─━━━❲❲ +dev ❳❳━━━─・⚚ \\

  client.on('messageCreate', message => {
    if (message.content === prefix + 'dev') {
      const embed = {
        title: `𝐀𝐫𝐜𝐚𝐧𝐞  𝐃𝐞𝐯𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐓𝐡𝐞 𝐁𝐨𝐭`,
        thumbnail: {
          url: 'https://cdn.discordapp.com/attachments/1281604234202320949/1281657856306970757/a_48f817f0cd6866c2bdc65f91dc9d8ba6.gif?ex=66dc8464&is=66db32e4&hm=838695ce21d55e6f36602c39c32f0ce15b7c18ae9073742983357dc1b855d6fc&',
          height: 100,
          width: 100,
          proxy_url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png'},
        description: `**~ 𝐈𝐟 𝐘𝐨𝐮 𝐖𝐚𝐧𝐭 𝐒𝐮𝐜𝐡 𝐚 𝐁𝐨𝐭, 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 { 𝐀𝐫𝐜𝐚𝐧𝐞 .,𝐚𝐜ó𝐰 }

  ・~ 𝐀𝐫𝐜𝐚𝐧𝐞 : 𝐓𝐡𝐢𝐬 𝐁𝐨𝐭 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐞𝐫𝐬 𝐂𝐚𝐧 𝐃𝐨 𝐄𝐱𝐚𝐜𝐭𝐥𝐲 𝐓𝐡𝐞 𝐒𝐚𝐦𝐞 𝐅𝐨𝐫 𝐘𝐨𝐮 <:950216992143581215:1274527084890558516>
  ・~ 𝐀𝐫𝐜𝐚𝐧𝐞  𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 : 𝐓𝐡𝐢𝐬 𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐬 𝐓𝐡𝐞 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐒𝐞𝐫𝐯𝐞𝐫 𝐅𝐨𝐫 𝐀𝐫𝐜𝐚𝐧𝐞  𝐁𝐨𝐭𝐬, 𝐖𝐡𝐢𝐜𝐡 𝐓𝐡𝐞 𝐎𝐰𝐧𝐞𝐫 𝐒𝐡𝐢𝐩 𝐒𝐞𝐫𝐯𝐞𝐫. 𝐈𝐟 𝐘𝐨𝐮 𝐖𝐚𝐧𝐭 𝐈𝐭, 𝐆𝐨 𝐓𝐡𝐞𝐫𝐞 <a:cs:1274572372149534771>**`,
        thumbnail: {
          url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png'
        },
        color: (color),
      };

      const button = new MessageButton()
        .setLabel('𝐃𝐞𝐯𝐥𝐨𝐩𝐞𝐫')
        .setURL('https://discord.com/users/1255986683011272816')
        .setEmoji('<a:cs:1274572392315748465>')
        .setStyle('LINK');
      const button2 = new MessageButton()
        .setLabel('𝐒𝐮𝐩𝐩𝐨𝐫𝐭')
        .setURL('https://discord.gg/qDg9wCEpPP')
        .setEmoji('<a:cs:1274572392315748465>')
       .setStyle('LINK'); 

      const row = new MessageActionRow().addComponents(button, button2);

      message.channel.send({ embeds: [embed], components: [row]  });
      message.delete()
    }
  });

// ⚚・─━━━❲❲ Bot Sound ❳❳━━━─・⚚ \\

const { joinVoiceChannel, VoiceConnectionStatus } = require('@discordjs/voice');

client.once('ready', () => {

  const voiceChannelId = '1287739214229671946'; // استبدل بـ ID القناة الصوتية الخاصة بك

  client.channels.fetch(voiceChannelId)
    .then((channel) => {
      if (channel.type !== 'GUILD_VOICE') {
        console.error('The channel is not a voice channel.');
        return;
      }

      const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
      });

      connection.on(VoiceConnectionStatus.Ready, () => {
        console.log('Bot connected to the voice channel!');
      });

      connection.on(VoiceConnectionStatus.Disconnected, (oldState, newState) => {
        console.log('Bot disconnected from the voice channel.');
      });

      connection.on(VoiceConnectionStatus.Destroyed, () => {
        console.log('Bot connection to the voice channel was destroyed.');
      });

    })
    .catch((error) => {
      console.error('Error fetching the channel or joining the voice channel:', error);
    });
});



// ⚚・─━━━❲❲ مقبول ❳❳━━━─・⚚ \\

  client.on('messageCreate', async(message) => {
    if(message.author.bot) return;

    if(message.content === "مقبول") {
   message.delete()

  message.channel.send(`> **لقد تم قبولك في منصه اركان تيم  <a:A_3_sp:1288203808257867776> **

> **يرجي لعدم اخذ تحذيرات مراجعه كل ماهو جديد في <#1287739232923947099> , <#1287739149075480616> ,** <a:A_3_sp:1288203808257867776> 

> **ونحن سعداء لوجودك معنا** <a:A_3_sp:1288203808257867776>
---
> **You Have Been Accepted In 𝐀𝐫𝐜𝐚𝐧𝐞 Platform** <a:A_3_sp:1288203808257867776>

> **Please To Didn't Take Warn Review Everything New In <#1287739232923947099> , <#1287739149075480616>**  <a:A_3_sp:1288203808257867776>

> **We Are Glad To Have You With Us** <a:A_3_sp:1288203808257867776> `)
    }

// ⚚・─━━━❲❲ +map ❳❳━━━─・⚚ \\

    if(message.content === "+map") {
     message.delete()
  message.channel.send(`**__ | 𝐇𝐢 𝐂𝐥𝐢𝐞𝐧𝐭 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 ${message.guild.name} 

<a:cs:1288204919912005663> | 𝐓𝐨 𝐎𝐫𝐝𝐞𝐫 | لطلب منتج : <#${order}>  

<a:cs:1288204919912005663> | 𝐓𝐨 𝐀𝐩𝐩𝐥𝐲 | للتقديم علي التيم : ⁠<#${applyteam}> 

<a:cs:1288204919912005663> | 𝐓𝐨 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 | لو عندك اي مشكله : <#${support}>  

<a:cs:1288204919912005663> | 𝐓𝐨 𝐅𝐞𝐞𝐝 𝐁𝐚𝐜𝐤 | للتقييمات :<#${feedback}> __

<a:cs:1288204919912005663> | 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __${message.guild.name}__ 

<a:cs:1288204919912005663> | 𝐥𝐢𝐧𝐤 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 

<a:cs:1288204919912005663> | ${link} 

<a:cs:1288204919912005663> | 𝐄𝐧𝐣𝐨𝐲 𝐁𝐫𝐨 **`)
      }

// ⚚・─━━━❲❲ دليل ❳❳━━━─・⚚ \\

      if(message.content === "+دليل") {
        message.reply(`> ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات :**   

> **About https://probot.io/transactions **`)
      }

// ⚚・─━━━❲❲ مرفوض ❳❳━━━─・⚚ \\

    if(message.content === "مرفوض") {
      message.reply(`> **نأسف لعدم قبولك في منصة اركان تيم** <a:1M_48:1288209368059215953> 

> **قم بالتقديم مرة أخرى عندما يكون معك كل شيء** <a:1M_48:1288209368059215953> 
---
> **We regret that you have not been accepted into the 𝐀𝐫𝐜𝐚𝐧𝐞 platform** <a:1M_48:1288209368059215953>

> **Apply again when you have everything** <a:1M_48:1288209368059215953>`)
    }

// ⚚・─━━━❲❲ +bot ❳❳━━━─・⚚ \\

    if(message.content === prefix+"bot") {
            if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
      message.reply(`**<:Bot:1274557251906175049> | Hello Please Fill The List To Help The Developer ・ اهلا بك برجائ ملئ القائمه لمساعده المبرمج

 > <:Bot:1288204617993420831> | Please Put The Name Of The Bot ・ برجاء كتابه اسم البوت

 > <:Bot:1288204617993420831> | Please Put Photo Of Bot ・ برجاء ارسال صوره البوت

 > <:Bot:1288204617993420831> | Whats The Bot Type(system , etc..) ・ ما هو نوع البوت (سيستم , الخ..)


 > \`-\` <:classic:1288223607536750696> | برجاء الصبر حتي ينتهي المبرمج من البوت الخاص بك**`)
    }

// ⚚・─━━━❲❲ +design ❳❳━━━─・⚚ \\

    if(message.content === prefix+"design") {    
    if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
      message.reply(`**\`-\` <:Design:1288204703905091644> | Hello Please Fill The List To Help The Designer ・ برجاء ملء الاستماره لمساعده المصمم

  > <:Design:1288204703905091644> | Whats The Name Of Your Server And The Summary ・ ما هو اسم سيرفرك و اختصاره

  > <:Design:1288204703905091644> | Whats The Color Of Your Design ・ ما هو لون التصميم الذي تريده

  > <:Design:1288204703905091644> | Whats The Type Of Design(Classic , Gaming , Store , etc..) ・ ما هو نوع التصميم (كلاسيك , جيمنج , اخادم , الخ..)

  > <:Design:1288204703905091644> | Do You Have An Example Of Your Design(Optional) ・ هل لديك مثال علي التصميم الذي تريده (اختياري)

  > <:Design:1288204703905091644> | How Many Hours You Want The Design Finished In It ・ كم عدد الساعات التي تريد ان يتم انهاء التصميم فيها

 > \`#\` <:Design:1288204703905091644> | ThankYou , شكرا لكم**`)
    }

// ⚚・─━━━❲❲ +ws ❳❳━━━─・⚚ \\

    if(message.content === prefix+"ws") {
    if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
      message.delete()
      message.channel.send(`> **<a:Nsr:1288204793491357878> | معك __${message.member.displayName}__ من طاقم العمل  **

> **<a:Nsr:1288204793491357878> | برجاء انتظار البائع  **
> **<a:Nsr:1288204793491357878> | شكرا لتفهمكم برجاء عدم الازعاج بالمنشن <a:Nsr:1288204793491357878> **
> **<a:Nsr:1288204793491357878> | With You __${message.member.displayName}__ From Server Staff <a:Nsr:1288204793491357878> **
> **<a:Nsr:1288204793491357878> | Please Wait Saller  ** 
> **<a:Nsr:1288204793491357878> | Thank You For Your Understanding. Please don't Disturb With Mention  **`)
    }

// ⚚・─━━━❲❲ +rep ❳❳━━━─・⚚ \\

     if(message.content === prefix+"rep") {
       message.delete()
       message.channel.send({embeds: [
         new MessageEmbed()
         .setTitle(`${message.guild.name} Report`)
         .setDescription(`> ** \`\`-\`\` للتبليغ علي سيلر خاص باخادم ${message.guild.name} قم باملاء الاستماره حتي نستطيع تعويضك **

> ** صاحب البلاغ : **

> ** اسم السيلر فالديسكورد : **

> ** ايدي السيلر فالديسكورد : **

> ** القصه : **

> ** قم بارسال الدلائل مع دليل التحويل : **`)
         .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
         .setTimestamp()
         .setColor(color)
         .setThumbnail(message.guild.iconURL())
       ]})
     }


// ⚚・─━━━❲❲ لينك ❳❳━━━─・⚚ \\

      if(message.content.toLowerCase() === "link") {
      message.channel.send(`**<a:cs:1288199762281234482>> | Welcome In __${message.guild.name}__
<a:cs:1288199762281234482> | link The Server : ${link} <a:cs:1288199762281234482>
<a:cs:1288199762281234482> | Enjoy Bro <a:cs:1288199762281234482>**`)
    }

      if(message.content.toLowerCase() === "Link") {
      message.channel.send(`**<a:cs:1288199762281234482> | Welcome In __${message.guild.name}__
<a:cs:1288199762281234482> | link The Server : ${link} <a:cs:1288199762281234482>
<a:cs:1288199762281234482> | Enjoy Bro <a:cs:1288199762281234482>**`)
    }

      if(message.content === "لينك") {
      message.channel.send(`**<a:cs:1288199762281234482> | Welcome In __${message.guild.name}__
<a:cs:1288199762281234482> | link The Server : ${link} <a:cs:1288199762281234482>
<a:cs:1288199762281234482> | Enjoy Bro <a:cs:1288199762281234482>**`)
    }

// ⚚・─━━━❲❲ خط ❳❳━━━─・⚚ \\

  const commandsline = ["لاين", "line", "خط"];

  
  if (commandsline.includes(message.content.toLowerCase())) {
    message.delete();
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor(color) 
          .setImage(line) 
      ]
    });
  }

// ⚚・─━━━❲❲ fb ❳❳━━━─・⚚ \\

    if(message.content.toLowerCase() === "fb") {
    if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
      message.reply(`> **\`#\` Thx For Choosing arcane Team , We Hope You Like The Service , For More Orders :  <#${order}><a:ES_hearts1:1288205393427828812>  ** 

> **\`-\` Your Opinion Matters , Please Mention Name Of Person ${message.author} And Write Opinion About The Service** <a:ES_hearts1:1288205393427828812>

> **\`#\` شـكرا لاختُيارك اركان سيرفر , نتمني أن تكون خدمتنا نالت اعجـابك ، للمـزيد من الطلبات : <#${order}> ** <a:ES_hearts1:1288205393427828812> 

> **\`-\` رايـك مهم جدا لدينا ، يرجي ذكر ${message.author} ورأيـك في خدمته معك و في السيـرفر بالكامل  <a:ES_hearts1:1288205393427828812> **

> <a:cs:1288205554388303984> <#${feedback}>
> <a:cs:1288205554388303984> <#${feedback}>`)
  }
 // ⚚・─━━━❲❲ +bank ❳❳━━━─・⚚ \\
          if(message.content === prefix+"bank") {
       message.delete()
       message.channel.send({embeds: [
         new MessageEmbed()
         .setTitle(`${message.guild.name} 𝐁𝐚𝐧𝐤`)
         .setDescription(`**\`-\` <a:Nsr:1288204793491357878> ملاحظة : <a:736257973906571306:1288205734080806912>  تحويل فقط للبنك الخاص اركان تيم : <@${bank}> **`)
         .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
         .setTimestamp()
         .setColor(color)
         .setThumbnail(message.guild.iconURL())
       ]})
     }
      
  });

// ⚚・─━━━❲❲ +inrole ❳❳━━━─・⚚ \\

      client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "inrole")) {
            let args = message.content.split(" ").slice(1).join(" ");
            if(message.author.bot) return;
            let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
             if (!trole) {
                 return message.reply(`**:rolling_eyes: Please mention role id**`)
             } else {
                 const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
          message.reply({embeds: [
           new MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))

      .setThumbnail(message.author.avatarURL({dynamic:true}))
            .addFields([
          {
          name: `List of users in ${trole.name} role : (${trole.members.size})`,
          value: `**${roleMember}**`
      },
      ])  
      .setColor(color)
      .setImage(line)
      .setFooter(`Members in this role ${trole.members.size}`)]})
        }
        }
       }) 

// ⚚・─━━━❲❲ +setactivity ❳❳━━━─・⚚ \\

  client.on('messageCreate', message => {
      if(message.content.toLowerCase().startsWith(prefix + 'setactivity')) {
          if (!owner.includes(message.author.id)) return;
          const oy = message.content.split(" ").slice(1).join(" ");
          if(!oy) return message.reply("**Please Write New Activity**");

          // تسجيل النشاط في الكونسول
          console.log(`Changing bot activity to: ${oy}`);

          client.user.setPresence({ activities: [{ name: oy }], status: 'online' });
          return message.reply(`**Done, set bot presence to ${oy}**`);
      }
  });

// ⚚・─━━━❲❲ +setprefix ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {


      if (message.content.startsWith(prefix + "setprefix")) {
          if (!owner.includes(message.author.id)) {
              return message.channel.send(`***Only Owners Can Use This Command**`);
          }

          const args = message.content.slice(1).trim().split(/ +/);
          if (!args[1]) {
              return message.channel.send(`**Please provide a new prefix.**`);
          }

          // تغيير قيمة البريفيكس في قاعدة البيانات
          db.set("prefix", args[1]);

          // تحديث ملف config.json
          const config = require('./config.json');
          config.prefix = args[1];
          fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

          message.channel.send(`**Prefix successfully changed to: \`${args[1]}\`**`);

      }
  });

// ⚚・─━━━❲❲ +setavatar ❳❳━━━─・⚚ \\

  client.on("messageCreate", message => {
      if (message.content.toLowerCase().startsWith (prefix+"setavatar")) {
          if (!owner.includes(message.author.id)) return;
          let avLink = message.content.substr(`${prefix}setavatar `.length);
          if (!avLink) return message.channel.send("**Incorrect Link, Please Put Avatar Link!**");

          // تسجيل تغيير الصورة في الكونسول
          console.log(`Changing bot avatar to: ${avLink}`);

          client.user.setAvatar(avLink).then(() => {
              message.delete()
              message.channel.send('**Bot Avatar Has Been Changed ✅**')
          }).catch(() => {
              message.channel.send('**Error, Try Again Later! 🚫: Incorrect Link Or Ratelimit**')
          });
      }
  });

// ⚚・─━━━❲❲ Auto feedback ❳❳━━━─・⚚ \\

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات
    if (message.channel.id !== feedback) return; // تحقق من أن الرسالة في القناة الصحيحة

    // تحقق من وجود العضو
    if (!message.member) {
        console.error("Member object not found.");
        return;
    }

    // معرف الدور الذي تريد إضافته
    const roleId = "1286663740602978315";
    const role = message.guild.roles.cache.get(roleId);

    if (!role) {
        console.error(`Role with ID ${roleId} not found.`);
        return;
    }

    // تحقق من أن العضو ليس لديه الدور بالفعل
    if (!message.member.roles.cache.has(roleId)) {
        // أضف الدور إلى العضو
        try {
            await message.member.roles.add(role);
            console.log(`Role ${roleId} added to ${message.member.user.tag}`);
        } catch (error) {
            console.error("Error adding the role:", error);
        }
    }

    // أرسل رسالة رد
    message.reply({
        embeds: [
            new MessageEmbed()
                .setColor(color) // تأكد من تحديد اللون
                .setDescription(`> **Thanks __${message.member.displayName}__ For Your Feedback**
> **And For Using ${message.guild.name}**
> **We Appreciate Your Words** <a:daimond:1281645887193350195>`)
                .setImage(line) // تأكد من تحديد الصورة
        ]
    });
});

// ⚚・─━━━❲❲ +send ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (!message.channel.guild) return;

      if (message.content.startsWith(prefix + 'send')) {
          if (!message.member.permissions.has("ADMINISTRATOR")) {
              return message.reply(`> **You Don't Have Permission \`\`ADMINSTRATOR\`\` To Use This Command**`);
          }

          let id = message.content.split(' ')[1];
          let user = message.mentions.members.first() || message.guild.members.cache.get(id);
          let argss = message.content.split(' ').slice(2).join(' ');

          if (!user) {
              return message.channel.send(`__**Please Mention User**__`);
          }

          if (!argss) {
              return message.channel.send(`__**Put Message**__`);
          }

          if (user.user.bot || user.id === message.author.id) {
              return message.channel.send(`**You cannot send a message to a bot or yourself**`);
          }

          let attach = message.attachments.first();
          if (attach) {
              user.send({ content: argss, files: [attach] }).then(m => {
                  message.channel.send(`**<a:ES_hearts1:1274557335754506270> | Done Send To ${user} **`);
              }).catch(err => {
                  return message.channel.send(`**Can't send a message to this user.**`);
              });
          } else {
              user.send(argss).then(m => {
                  message.channel.send(`**<a:ES_hearts1:1274557335754506270> | Done Send To ${user} **
`);
              }).catch(err => {
                  return message.channel.send(`**Can't send a message to this user.**`);
              });
          }
      }
  });


// ⚚・─━━━❲❲ +unballall ❳❳━━━─・⚚ \\

  client.on('messageCreate', async message => {
          if(message.content.startsWith(prefix + 'unbanall')) {
                  let b = await message.guild.bans.fetch()
                  if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("**You don’t have permission to use this command.**")
                  b.forEach(ban => message.guild.members.unban(ban.user))
                          message.reply(`**✅ ${b.size} members has been unbanned.🛬**`)
          }
  });

// ⚚・─━━━❲❲ +name ❳❳━━━─・⚚ \\

  client.on('messageCreate', async message => {
      if(message.content.toLowerCase().startsWith(prefix + 'name') || message.content.startsWith(prefix + 'اسم')){

        const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
        const name = message.content.split(" ").slice(2).join(" ")

        if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply('**لا تمتلك الصلاحيات اللازمة لاستخدام هذا الامر !**')
        if(!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('**لا امتلك الصلاحيات اللازمة للقيام هذا الامر !**')

        if(!member) return message.reply('**رجاء قم بمنشن العضو الذي تريد تغيير لقبه**')
        if(!name) return message.reply("**رجاء قم بكتابة اللقب اللذي تريد وضعه للعضو !**")

        member.setNickname(name).catch(() => {message.reply('**لا يمكنني تغيير اسم هذا العضو !**')})
      }
  })

// ⚚・─━━━❲❲ +unlock ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'unlock')) {
                  const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: "**You don’t have permission to use this command.**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't change the channel permissions. Please check my permissions.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          SEND_MESSAGES: true
                  }).then(() => {
                          message.reply({ content: `:unlock: **<#${message.channel.id}> has been unlocked.**`, ephemeral: true })
                  })
      }
  });

// ⚚・─━━━❲❲ +lock ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'lock')) {
                      const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: "**You don’t have permission to use this command.**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          SEND_MESSAGES: false
                  }).then(() => {
                          message.reply({ content: `:lock: **${message.channel.name} has been looked.** `, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })
                  })
          }
  });

// ⚚・─━━━❲❲ +show ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'show')) {
                  const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: "**You don’t have permission to use this command.**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          VIEW_CHANNEL: true
                  }).then(() => {
                          message.reply({ content: `:white_check_mark: **<#${message.channel.id}> Done show this room.**`, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })
                  })
          }
  });

// ⚚・─━━━❲❲ +hide ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'hide')) {

      const permission = message.member.permissions.has("MANAGE_CHANNELS");

      const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

           if (!permission)
     return message.reply({ content: "**You don’t have permission to use this command.**", ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)

       })

          if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                             console.log(`i couldn't reply to the message: ` + err.message)

      })

            let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          VIEW_CHANNEL: false
                  }).then(() => {
                          message.reply({ content: `:white_check_mark: **<#${message.channel.id}> Done hide this room.**`, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)

                          })
                  })
          }
  });

// ⚚・─━━━❲❲ +unban ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.startsWith(prefix + 'unban')) {
  if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`**You don’t have permission to use this command.**`);
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
      let args = message.content.split(' ')
      let id = args[1];
      if(!id)  return message.reply(`** 😕 Please mention member or id **`);
      if(isNaN(id)) {
         return message.reply(`** 😕 Please mention member or id **`);
      } else {
  message.guild.members.unban(id).then(mmm => {
          message.reply(`✅** ${mmm.tag} unbanned!**`)
        }).catch(err => message.reply(`**I can't find this member in bans list**`));
        }
      }
  }) 

// ⚚・─━━━❲❲ +avatar-server ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();

  if (command === "avatar-server") {
    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`Download Server Avatar`)
          .setURL((`${message.guild.iconURL({ dynamic: true, size: 4096 })}`))
      );
    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Server Avatar link](${message.guild.iconURL({ dynamic: true, size: 4096 })})`)
          .setImage(`${message.guild.iconURL({ dynamic: true, size: 4096 })}`)
      ], components: [button]
    })
  }

// ⚚・─━━━❲❲ +server ❳❳━━━─・⚚ \\

    if (command === "server") {
      await message.guild.members.fetch();
      const members = message.guild.members.cache;
      const channels = message.guild.channels.cache;
      const emojis = message.guild.emojis.cache.size;
      const firstFiveEmojis = message.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
      const boostCount = message.guild.premiumSubscriptionCount;
      const verificationLevel = message.guild.verificationLevel;
      const rolesCount = message.guild.roles.cache.size;

      await message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(color)
            .setImage(line)
            .setAuthor({ name: `${message.guild.name} Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .addFields(
              { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
              { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
              { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
              { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
              { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
              { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}**\nRoles: **${rolesCount}**`, inline: true },
              { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
            )
        ], ephemeral: true
      })
    }
  })

// ⚚・─━━━❲❲ +top server ❳❳━━━─・⚚ \\

     client.on('messageCreate', async (message) => {
        if(message.content == '+top-server') {

           const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10);

           const description = guilds.map((guild, index) => {
             return `\`#${index+1}\` | **${guild.name}** -> **\_\_${guild.memberCount}\_\_** members`
           }).join(`\n\n`)

           const embed = new MessageEmbed()
             .setTitle('Top Guilds')
             .setDescription(description)
             .setColor(color)

           message.channel.send({embeds: [embed]})
         }
    })

// ⚚・─━━━❲❲ +ban ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      let c = message.content.split(' ')
      if (c[0] == prefix + 'ban') {
          if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`**You don’t have permission to use this command.**`);
      if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;

      let argss = message.content.split(' ')
      let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
      if(!user) return message.reply(`** 😕 Please mention member or id **`);
   if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

      if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
      await user.ban().catch(err => {console.log(err)});
       await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
      }
  }) 

// ⚚・─━━━❲❲ +uptime ❳❳━━━─・⚚ \\

  client.on("messageCreate", async (message) => {
    if (message.content === prefix + "uptime") {
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let s = Math.floor(client.uptime / 1000) % 60;
      ip = `
> __I am Online For__ : \`${days} Days,  ${hours} Hours,  ${minutes} Minutes,  ${s} seconds,\``
      let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setImage(line)
        .setTitle(`Bot Uptime :`)
        .setDescription(`**${ip}**`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
      message.reply({ embeds: [embed] })
    }
  })
// ⚚・─━━━❲❲ G Role ❳❳━━━─・⚚ \\

client.on('messageCreate', message => {
    if (message.content.toLowerCase().startsWith(prefix + "g-role")) {
if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`> **You Don't Have Permission \`\`ADMINSTRATOR\`\` To Use This Command**`);

        const theRole = message.mentions.roles.first();
        const theUser = message.mentions.members.first();

        if (!theUser) {
            return message.reply("**Please mention a user!**");
        }
        if (!theRole) {
            return message.reply("**Please mention a role!**");
        }

        theUser.roles.add(theRole)
            .then(() => {
                message.reply("**Done! The role has been added.**");
            })
            .catch(err => {
                console.error(err); // سجل الخطأ للتشخيص
                message.reply("**Error...** " + err.message);
            });
} })

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand() && !interaction.isSelectMenu()) return;

    // التعامل مع الأوامر والتفاعلات الأخرى هنا
});

// ⚚・─━━━❲❲ R Role ❳❳━━━─・⚚ \\

  client.on("messageCreate", message => {
    if (message.content.toLowerCase().startsWith(prefix + "r-role")) {
if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`> **You Don't Have Permission \`\`ADMINSTRATOR\`\` To Use This Command**`);
      const theRole = message.mentions.roles.first();
      const theUser = message.mentions.members.first();

      if (!theUser) return message.reply('> **Please Mention A User !**')
      if (!theRole) return message.reply('> **Please Mention A Role !**')

      theUser.roles.remove(theRole)
        .then(() => {
          message.reply("**Done Added The Role to this removed**")
        })
        .catch((t) => {
          message.reply("**Error..**" + t.message)
        })
    }
  })

// ⚚・─━━━❲❲ Order Msg ❳❳━━━─・⚚ \\

    client.on('channelCreate', message => {
      if (message.parentId !== ordercategory) return;
      setTimeout(() => {
          message.send(`**السلام عليكم ورحمه الله وبركاته ..
معك طاقم اركان تيم في تذكره الطلب .!  <a:ES_hearts1:1288205393427828812>

يرجي توضيح طلبك بالكامل لكي يمكنني مساعدتك و تاكيد الطلب ، سوف امنشن لك فريق السلعه الخاص بطلبك ويرجي انتظار البائع ، في حاله عدم وجود المنتج في الوقت الحالي سيتم غلق التذكره وسيتم اتاحته في وقت لاحق وشكراً لتفهمك .**<a:ES_hearts1:1288205393427828812>`)
      }, 3000);
                 })

// ⚚・─━━━❲❲ Support Msg ❳❳━━━─・⚚ \\

client.on('channelCreate', channel => {
  // التحقق من أن القناة المنشأة ضمن الفئة المطلوبة
  if (channel.parentId !== supportcategory) return;

  setTimeout(() => {
    if (!channel || !channel.send) {
      console.error('القناة غير معرفة أو لا يمكن إرسال الرسالة');
      return;
    }
        const button1 = new MessageButton()
            .setCustomId('claim_channel')
            .setLabel('Claim')
            .setEmoji('<a:cs:1274572392315748465>')
            .setStyle('PRIMARY');

    const row1 = new MessageActionRow().addComponents(button1);
    const embed = new MessageEmbed()
      .setTitle('**Help Menu:**')
      .setColor(color)
      .setImage(line)
      .setThumbnail(channel.guild.iconURL())
      .setDescription(`**<:950216992143581215:1288207342709768192>  |  السلام عليكم ورحمة الله وبركاته <a:ES_hearts1:1274557335754506270>  
<:950216992143581215:1288207342709768192> | معك طاقم العمل لدي اركان في تذكرة __الدعم الفني __  <:950216992143581215:1288207342709768192> 
__<:950216992143581215:1288207342709768192>  |  كل ما عليك هو كتابة مشكلتك أو استفسارك وانتظار ألرد __ <a:Ra_58:1288207625695264920> **
**<:950216992143581215:1288207342709768192>  | من فضلك قم بي الضغط علي ال سيليكت منيو لتري اذا ماكانت مشكلتك موجوده ام لا**`);

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('commands')
        .setPlaceholder('⚘・𝐂𝐡𝐨𝐨𝐬𝐞 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
        .addOptions([
          {
            label: 'الابلاغ عن بائع',
            value: 'rep',
            emoji: '<a:cs:1288204919912005663>',
          },
          {
            label: 'التقديم على طاقم االعمل',
            value: 'apply',
            emoji: '<a:cs:1288204919912005663>',
          },
          {
            label: 'طلب منتح',
            value: 'orderr',
            emoji: '<a:cs:1288204919912005663>',
          },
          {
            label: 'لتقييمات',
            value: 'feedbackk',
            emoji: '<a:cs:1288204919912005663>',
          },
          {
            label: 'خريطة السيرفر',
            value: 'map',
            emoji: '<a:cs:1288204919912005663>',
          },
        ])
    );

    channel.send({ embeds: [embed], components: [row, row1] });
  }, 2000); // تأخير لمدة ثانيتين
});

client.on('interactionCreate', interaction => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.customId === 'commands') {
    let replyMessage;

    // اختيار الرد حسب القيمة التي تم تحديدها
    switch (interaction.values[0]) {
      case 'rep':
        replyMessage = `**للابلاغ عن شخص او بائع اكتب هاذا امر : +rep **`;
        break;
      case 'apply':
        replyMessage = `** لتقديم توجه الى : <#${applyteam}> `;
        break;
      case 'orderr':
        replyMessage = `لطلب منتج توجه الى : <#${order}`;
        break;
      case 'feedbackk':
        replyMessage = `** لتقييمات : <#${feedback}>**`;
        break;
      case 'map':
        replyMessage = `**__<a:cs:1274572392315748465> | 𝐓𝐨 𝐎𝐫𝐝𝐞𝐫 | لطلب منتج : <#${order}>  

<a:cs:1288204919912005663> | 𝐓𝐨 𝐀𝐩𝐩𝐥𝐲 | للتقديم علي التيم : ⁠<#${applyteam}> 

<a:cs:1288204919912005663> | 𝐓𝐨 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 | لو عندك اي مشكله : <#${support}>  

<a:cs:1288204919912005663> | 𝐓𝐨 𝐅𝐞𝐞𝐝 𝐁𝐚𝐜𝐤 | للتقييمات :<#${feedback}> __ **`;
        break;
      default:
        replyMessage = '❓ اختيار غير معروف.';
    }

    // الرد برسالة مخفية للمستخدم
    interaction.reply({
      content: replyMessage,
      ephemeral: true // تجعل الرسالة مرئية فقط للشخص الذي ضغط على الخيار
    });
  }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return; // تأكد من أن التفاعل هو من نوع زر

    const channel = interaction.channel; // القناة التي تم فيها التفاعل
    const member = interaction.member; // الشخص الذي ضغط على الزر

    if (interaction.customId === 'claim_channel') {
        try {
            // تحقق مما إذا كان العضو لديه الدور المطلوب
            if (!member.roles.cache.has(supportrole)) {
                return interaction.reply({ content: '**You do not have permission to use these buttons.**', ephemeral: true });
            }

            // إزالة جميع أذونات القناة
            await channel.permissionOverwrites.edit(channel.guild.id, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
            });

            // إضافة صلاحيات للشخص الذي ضغط على الزر
            await channel.permissionOverwrites.edit(member.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true
            });

            // تعديل دور
            await channel.permissionOverwrites.edit(excutiverole, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: false
            });

            // تغيير اسم القناة إلى اسم الشخص الذي ضغط على الزر
            const newName = member.displayName;
            await channel.setName(newName);

            // إرسال رسالة تأكيد
            await interaction.reply({ content: '** Done Claimed.**', ephemeral: true });
        } catch (error) {
            console.error('Error handling interaction:', error);
            await interaction.reply({ content: 'حدث خطأ أثناء معالجة التفاعل.', ephemeral: true });
        }
    }
});


// ⚚・─━━━❲❲ Apply Msg ❳❳━━━─・⚚ \\

client.on('channelCreate', async (channel) => {
  if (channel.parentId !== applycategory) return;
  setTimeout(() => {
    channel.send({
      content: `> **Click On The Button To Start Team Apply Submission**<a:736257973906571306:1288205734080806912>
> **برجاء الضغط علي البتن لبدء التقديم إلى طاقم العمل** <a:736257973906571306:1288205734080806912>

**ملحوظة <a:736257973906571306:1288205734080806912> : لو مضغطتش علي البتن و كملت مع البوت محدش هيرد عليك**`,
      components: [
        new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setLabel("عربي")
              .setStyle("PRIMARY")
              .setCustomId("arabic"),
            new MessageButton()
              .setLabel("مصرى")
              .setStyle("PRIMARY")
              .setCustomId("egyptian"),
            new MessageButton()
              .setLabel("English")
              .setStyle("PRIMARY")
              .setCustomId("english")
          )
      ]
    });
  }, 2000);

  client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "arabic") {
          const modal = new Modal()
      .setCustomId('myModal')
      .setTitle('Apply Team Submit');
    const rname = new TextInputComponent()
      .setCustomId('rname')
      .setLabel("ما هو اسمك وعمرك الحقيقي")
      .setStyle('SHORT');

          const age = new TextInputComponent()
      .setCustomId('age')
      .setLabel("ماهوا رقمك")
      .setStyle('SHORT');

          const svcount = new TextInputComponent()
      .setCustomId('svcount')
      .setLabel("ما عدد السيرفرات الي انتا شغال فيها")
      .setStyle('SHORT');

          const fbcount = new TextInputComponent()
      .setCustomId('fb')
      .setLabel("معاك 25 فيدباك نعم او لا")
      .setStyle('SHORT');

          const roles = new TextInputComponent()
      .setCustomId('roles')
      .setLabel("وش تبيع..")
      .setStyle('SHORT');

    const name = new MessageActionRow().addComponents(rname);
    const agge = new MessageActionRow().addComponents(age);
      const svvcount = new MessageActionRow().addComponents(svcount);
      const fbvcount = new MessageActionRow().addComponents(fbcount);
      const rovles = new MessageActionRow().addComponents(roles);
    // Add inputs to the modal
    modal.addComponents(name , agge,svvcount,fbvcount,rovles);
    // Show the modal to the user
    await interaction.showModal(modal);
    } })
       client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "egyptian") {
          const modal = new Modal()
      .setCustomId('myModal')
      .setTitle('Apply Team Submit');
    const rname = new TextInputComponent()
      .setCustomId('rname')
      .setLabel("حط اسمك وعمرك هنا")
      .setStyle('SHORT');

          const age = new TextInputComponent()
      .setCustomId('age')
      .setLabel("رقم الكاش")
      .setStyle('SHORT');

          const svcount = new TextInputComponent()
      .setCustomId('svcount')
      .setLabel("وش سيرفرات يلي شغال فيها")
      .setStyle('SHORT');

          const fbcount = new TextInputComponent()
      .setCustomId('fb')
      .setLabel("معاك 30 فيدباك نعم او لا")
      .setStyle('SHORT');

          const roles = new TextInputComponent()
      .setCustomId('roles')
      .setLabel("وش تبيع ..")
      .setStyle('SHORT');

    const name = new MessageActionRow().addComponents(rname);
    const agge = new MessageActionRow().addComponents(age);
      const svvcount = new MessageActionRow().addComponents(svcount);
      const fbvcount = new MessageActionRow().addComponents(fbcount);
      const rovles = new MessageActionRow().addComponents(roles);
    // Add inputs to the modal
    modal.addComponents(name , agge,svvcount,fbvcount,rovles);
    // Show the modal to the user
    await interaction.showModal(modal);
    } }) 
          client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "english") {
          const modal = new Modal()
      .setCustomId('myModal')
      .setTitle('Apply Team Submit');
    const rname = new TextInputComponent()
      .setCustomId('rname')
      .setLabel("This is your name and age")
      .setStyle('SHORT');

          const age = new TextInputComponent()
      .setCustomId('age')
      .setLabel("What is your number?")
      .setStyle('SHORT');

          const svcount = new TextInputComponent()
      .setCustomId('svcount')
      .setLabel("How many servers are you running?")
      .setStyle('SHORT');

          const fbcount = new TextInputComponent()
      .setCustomId('fb')
      .setLabel("Do you have 25 Feedbacks, yes or no?")
      .setStyle('SHORT');

          const roles = new TextInputComponent()
      .setCustomId('roles')
      .setLabel("What is for sale")
      .setStyle('SHORT');

    const name = new MessageActionRow().addComponents(rname);
    const agge = new MessageActionRow().addComponents(age);
      const svvcount = new MessageActionRow().addComponents(svcount);
      const fbvcount = new MessageActionRow().addComponents(fbcount);
      const rovles = new MessageActionRow().addComponents(roles);
    // Add inputs to the modal
    modal.addComponents(name , agge,svvcount,fbvcount,rovles);
    // Show the modal to the user
    await interaction.showModal(modal);
    } })

        client.on('interactionCreate', async(interaction) => {
  if 
(!interaction.isModalSubmit()) return;

  if (interaction.customId === 'myModal') {

    const name = interaction.fields.getTextInputValue('rname');
    const rname = interaction.fields.getTextInputValue('age');
    const rrname = interaction.fields.getTextInputValue('svcount');
    const rrrname = interaction.fields.getTextInputValue('fb');
    const rrrrname = interaction.fields.getTextInputValue('roles');
await interaction.reply({ content: `
> **The Apply Team Has Been Submited , Please Put Here The Feedbacks If You Dont Have You Will Pay 3m
> تم عمل التقديم , برجاء وضع الفيدباكات هنا و لو مش معاك فيدباك ف هتطر تدفع 5 مليون ضمان**

**لو مش هتعمل حاجه من الاتنين ف محدش هيرد عليك**`,embeds: [
      new MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setAuthor({ name: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setFooter({ text: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setTimestamp()
      .setDescription(`
\`\`\` New Apply Team Submition \`\`\`

**> Seller Name / Age : ${name} <a:cs:1288208795960479869>

> Seller Number: ${rname} <a:cs:1288208795960479869>

> Seller Servers Count He Work In : ${rrname} <a:cs:1288208795960479869>

> Does He Have Feedback : ${rrrname} <a:cs:1288208795960479869>

> Sell : ${rrrrname} 
** `)
  .setImage(line)
  .setColor(color)
    ] });
    interaction.channel.send(`> || @everyone ||`)

  }
}); })
   
// ⚚・─━━━❲❲ +calc ❳❳━━━─・⚚ \\

client.on('messageCreate', async message => {
  if (message.content.startsWith(prefix + 'calc') && !message.author.bot) {
    try {
      let args = message.content.slice(6).trim();
      let result = eval(args);

      const embed = new MessageEmbed()
        .setColor(color)
        .setTitle('نتيجة الحساب <a:Update:1274542231776137276>')
        .setDescription(`العملية: \`${args}\`\nالنتيجة: \`${result}\``)
        .setImage(line)
        .setFooter({ text: 'حساب تم بواسطة البوت ' });

      message.channel.send({ embeds: [embed] });

    } catch (error) {
      const errorEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle('خطأ في الحساب <a:736257973906571306:1288205734080806912>')
        .setDescription('هناك خطأ في الصيغة الرياضية. الرجاء التحقق من الصيغة والمحاولة مرة أخرى.<a:736257973906571306:1288205734080806912>')
        .setImage(line)
        .setFooter({ text: 'تنبيه من البوت' });

      message.channel.send({ embeds: [errorEmbed] });
    }
  }
});


// ⚚・─━━━❲❲ +embed ❳❳━━━─・⚚ \\
client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'embed')) {
        if (!message.member.permissions.has("MANAGE_GUILD")) {
            return message.reply(`** :rolling_eyes: You don't have permissions **`);
        }

        // حذف الرسالة الأصلية
        message.delete();

        // إزالة الأمر +embed من الرسالة
        let args = message.content.slice(prefix.length + 'embed'.length).trim();

        // إنشاء الـ embed
        let embed = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor(color)
            .setTimestamp();

        // التحقق من وجود رابط صورة في الرسالة
        let imageUrl = args.match(/\bhttps?:\/\/\S+\.(?:png|jpg|jpeg|gif)\b/i);
        if (imageUrl) {
            // إزالة أي معلومات إضافية في الرابط
            let cleanImageUrl = imageUrl[0].split('?')[0];
            embed.setImage(cleanImageUrl);
            // إزالة رابط الصورة من النص
            args = args.replace(imageUrl[0], '').trim();
        }

        // التحقق من وجود صورة مرفقة
        if (message.attachments.size > 0) {
            let attachment = message.attachments.first();
            // التحقق من نوع الملف إذا كان صورة
            if (attachment.contentType && attachment.contentType.startsWith("image/")) {
                embed.setImage(attachment.url);
            }
        }

        // إضافة النص إذا كان موجودًا بعد التحقق من الصورة
        if (args) {
            embed.setDescription(args);
        }

        // زر رمادي معطل
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('disabled_button')
                    .setLabel('Luffy')
                    .setEmoji('<:Za3em:1282829720005644389>')
                    .setStyle('SECONDARY') // لون رمادي
                    .setDisabled(true) // الزر معطل
            );

        // إرسال الـ embed مع الزر
        message.channel.send({ embeds: [embed], components: [row] });
    }
});

// ⚚・─━━━❲❲ +say ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix) || message.content.length <= prefix.length) return;

    const args = message.content.slice(prefix.length).trim();
    const command = args.split(/ +/)[0].toLowerCase();

    if (command === 'say') {
      const text = args.slice(command.length).trim();
      message.delete();
      message.channel.send(text);
    }
  });

// ⚚・─━━━❲❲ Transfer line ❳❳━━━─・⚚ \\

    client.on('message', message => {
      if (message.content.includes('has transferred')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })

    client.on('message', message => {
      if (message.content.includes('قام بتحويل')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })

// ⚚・─━━━❲❲ Auto tax ❳❳━━━─・⚚ \\

    client.on('message', message => {
      if (message.content.includes('**<a:cs:1288208795960479869> | Your Tax Is**')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })
    client.on("messageCreate", async(message) => {
        let args = message.content
          .split(" ")
          .slice(0)
          .join(" "); if (message.author.bot) return;
          if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
      else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
      else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
      else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
      else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
    else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
        if (!message.guild) return; 
  if (message.channel.id != taxchannel) return;  
        let args2 = parseInt(args)
        let tax = Math.floor(args2 * (20) / (19) + (1))
        let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
        let tax3 = Math.floor(tax2 * (20) / (19) + (1))
        let tax4 = Math.floor(tax2 + tax3 + args2)
        if (!args2) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
        if (isNaN(args2)) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
        if (args2 < 1) return message.reply(`
  > ** Error It Must Be Larger Than 1 ⚠⚠ **`);

        let row = new MessageActionRow()
      .addComponents(
                new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("<:950216992143581215:1288207342709768192>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("<a:1M_48:1288209368059215953>")
        .setStyle('DANGER')
    );

        let m = await message.reply({ content: `
__**${tax}**__` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
__**${tax4}**__`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
__**${tax}**__`, components: [row] })

                  i.deferUpdate()
          } else {
            return;
          }
       }) }); 


// ⚚・─━━━❲❲ +tax ❳❳━━━─・⚚ \\

    client.on("messageCreate", async message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return;
     const args = message.content.slice(prefix.length).trim().split(/ +/);
     const command = args.shift().toLowerCase();
     if(command === "tax") {
      let args1 = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    if (message.author.bot) return;
      if (args1.endsWith("m")) args1 =  args1.replace(/m/gi, "") * 1000000;
    else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
    else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
    else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
    else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
    else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args1)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
    > ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
      .addComponents(
                new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("<:950216992143581215:1274527084890558516>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("<a:1M_48:1274557388761858121>")
        .setStyle('DANGER')
    );
        let m = await message.reply({ content: `
__**${tax}**__` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
__**${tax4}**__`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
__**${tax}**__`, components: [row] })

                  i.deferUpdate()
          } else {
            return;
          }
       });

     }

// ⚚・─━━━❲❲ +come ❳❳━━━─・⚚ \\

   if(command === "come") {
           if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
    const user = message.mentions.members.first()
    if (!user) return message.reply(`**<a:736257973906571306:1274572444564328498> | I Can't Find This User!**`)
      if (user.id == message.author.id) return message.reply(`**<a:736257973906571306:1274572444564328498> | You Can't Send To Yourself!**`)
      if (user.user.bot) return message.reply(`**<a:736257973906571306:1274572444564328498> | You Can't Send To Bot!**`)
            let inv = await message.channel.createInvite(message.channel)
      user.send(`> **<a:736257973906571306:1274572444564328498> | Sorry For Disturbance You Have Requested**

> **<a:A_3_sp:1288203808257867776> | CHANNEL : ${message.channel} <a:A_3_sp:1288203808257867776>**

> **<a:A_3_sp:1288203808257867776> | You Request By : ${message.guild.members.cache.get(message.author.id).displayName || message.author.tag} <a:A_3_sp:1288203808257867776>**

> **<a:A_3_sp:1274557346194001920> | link Server Link : { ${link} } <a:A_3_sp:1288203808257867776>**`)
   .then(() => {
     message.reply({
      embeds : [
        new MessageEmbed()
        .setDescription(`**<a:cs:1288208795960479869> | Sending message to ${user}...**`)
        .setColor(color)
      ]
    }).then((t) => {
      setTimeout(() => t.edit({
        embeds : [
          new MessageEmbed()
        .setDescription(`**<a:A_3_sp:1288203808257867776> | Done Sending Message To ${user}**`)
        .setColor(color)
          ]
      }),1800)
  })   
  }).catch((y) => {
                 message.reply({
      embeds : [
        new MessageEmbed()
        .setDescription(`> **<a:cs:1274572401627238473> | Please Wait ...**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
      ]
    }).then((t) => {
      setTimeout(() => t.edit({
        embeds : [
          new MessageEmbed()
        .setDescription(`<a:1M_48:1288209368059215953> | **Error == __${y.message}__**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
        ]
      }),1800)
                 })
  })
   }
  })

 // ⚚・─━━━❲❲ تشفير ❳❳━━━─・⚚ \\

client.on('messageCreate', async message => {
  if (message.content.startsWith("تشفير") && !message.author.bot) {
    let args = message.content.split(" ").slice(1);
    

    if (args.length > 0) {

      let encryptedWords = args.map(word => {
        let middleIndex = Math.floor(word.length / 2);
        return `${word.slice(0, middleIndex)}///${word.slice(middleIndex)}`;
      });
      
      let encryptedMessage = encryptedWords.join(" ");
      
      try {

        await message.author.send(encryptedMessage);

        message.channel.send(`**تم إرسال الرسالة المشفرة إلى خاصك: ${encryptedMessage} ** <a:A_3_sp:1274557346194001920>`);
      } catch (error) {
 
        message.channel.send('** <a:1M_48:1288209368059215953> لم أتمكن من إرسال الرسالة إلى خاصك. **');
        console.error('** <a:1M_48:1288209368059215953> خطأ في إرسال الرسالة الخاصة: **', error);
      }
    } else {
      message.channel.send('** الرجاء إدخال كلمات لتشفيرها <a:736257973906571306:1288205734080806912> **.');
    }
  }
});


// ⚚・─━━━❲❲ re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "re") {
          if(!message.channel.name.startsWith("ticket-")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });
// ⚚・─━━━❲❲ re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "re") {
          if(!message.channel.name.startsWith("need")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });
// ⚚・─━━━❲❲ re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "re") {
          if(!message.channel.name.startsWith("sell")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });
// ⚚・─━━━❲❲ re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "re") {
          if(!message.channel.name.startsWith("by")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });
// ⚚・─━━━❲❲ Re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "Re") {
          if(!message.channel.name.startsWith("ticket-")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });
// ⚚・─━━━❲❲ Re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "Re") {
          if(!message.channel.name.startsWith("need")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });
// ⚚・─━━━❲❲ Re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "Re") {
          if(!message.channel.name.startsWith("sell")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });
// ⚚・─━━━❲❲ Re ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.toLowerCase() === "Re") {
          if(!message.channel.name.startsWith("by")) return;
          if (message.member.roles.cache.has(team)) {
              const embed = new MessageEmbed()
                  .setColor(color) 
                  .setImage(line)
                  .setAuthor(message.author.username, message.author.avatarURL()) 
                  .setDescription(`**Ticket Clammed By : ${message.author.toString()}.**`);

              message.channel.setName(`by- ${message.member.displayName || message.author.username}`);
              // إرسال الرسالة في القناة
              message.channel.send({ embeds: [embed] });

              // حذف رسالة الشخص الذي قام بتشغيل الأمر
              message.delete().catch(console.error);
          }
      }
  });

// ⚚・─━━━❲❲ +font ❳❳━━━─・⚚ \\

   client.on("messageCreate", message => {
    if (message.content.startsWith( prefix + 'font')) {
      let words = message.content.split(" ").slice(1).join(" ");
      let words2 = words.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎")
      if (!words) return message.channel.send('> ** Please Write a Word :x: !**')
      message.reply(`${words2}`)
    }
  });

// ⚚・─━━━❲❲ خمول ❳❳━━━─・⚚ \\

  client.on("message", message => {
    if (message.content == ( prefix + "io" ) || message.content === "خمول") {

  message.channel.send(`> \`#\` **<a:736257973906571306:1288205734080806912>  | __يرجي العلم أنه في حاله الخمول في التذكره لمده عشر دقايق سوف يتم غلق التذكره تلقائيا من طاقم اركان ! <a:736257973906571306:1288205734080806912>__**

> \`-\` **__<a:736257973906571306:1288205734080806912>  | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐧𝐨𝐭𝐞 𝐭𝐡𝐚𝐭 𝐢𝐧 𝐜𝐚𝐬𝐞 𝐨𝐟 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐭𝐲 𝐢𝐧 𝐭𝐡𝐞 𝐭𝐢𝐜𝐤𝐞𝐭 𝐟𝐨𝐫 𝟏𝟎 𝐌𝐢𝐧𝐮𝐭𝐞𝐬, 𝐭𝐡𝐞 𝐭𝐢𝐜𝐤𝐞𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐜𝐥𝐨𝐬𝐞𝐝 𝐛𝐲 𝐭𝐡𝐞 𝐭𝐞𝐚𝐦 𝐀𝐫𝐜𝐚𝐧𝐞  𝐬𝐮𝐩𝐩𝐨𝐫𝐭 ! <a:736257973906571306:1288205734080806912>__**`)
      message.delete()

    }
  })

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'tag') {
        let mentionedUser = message.mentions.members.first();
        let name = args.slice(1).join(' ');

        if (!mentionedUser) {
            return await message.channel.send('**You must mention a user to tag.**');
        }

  if (!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply(`> **You Don't Have Permission \`\`NICKNAME\`\` To Use This Command**`);

        let font = name
            .replaceAll("a", "𝐚").replaceAll("A", "𝐀")
            .replaceAll("b", "𝐛").replaceAll("B", "𝐁")
            .replaceAll("c", "𝐜").replaceAll("C", "𝐂")
            .replaceAll("d", "𝐝").replaceAll("D", "𝐃")
            .replaceAll("e", "𝐞").replaceAll("E", "𝐄")
            .replaceAll("f", "𝐟").replaceAll("F", "𝐅")
            .replaceAll("g", "𝐠").replaceAll("G", "𝐆")
            .replaceAll("h", "𝐡").replaceAll("H", "𝐇")
            .replaceAll("i", "𝐢").replaceAll("I", "𝐈")
            .replaceAll("j", "𝐣").replaceAll("J", "𝐉")
            .replaceAll("k", "𝐤").replaceAll("K", "𝐊")
            .replaceAll("l", "𝐥").replaceAll("L", "𝐋")
            .replaceAll("m", "𝐦").replaceAll("M", "𝐌")
            .replaceAll("n", "𝐧").replaceAll("N", "𝐍")
            .replaceAll("o", "𝐨").replaceAll("O", "𝐎")
            .replaceAll("p", "𝐩").replaceAll("P", "𝐏")
            .replaceAll("q", "𝐪").replaceAll("Q", "𝐐")
            .replaceAll("r", "𝐫").replaceAll("R", "𝐑")
            .replaceAll("s", "𝐬").replaceAll("S", "𝐒")
            .replaceAll("t", "𝐭").replaceAll("T", "𝐓")
            .replaceAll("u", "𝐮").replaceAll("U", "𝐔")
            .replaceAll("v", "𝐯").replaceAll("V", "𝐕")
            .replaceAll("w", "𝐰").replaceAll("W", "𝐖")
            .replaceAll("x", "𝐱").replaceAll("X", "𝐗")
            .replaceAll("y", "𝐲").replaceAll("Y", "𝐘")
            .replaceAll("z", "𝐳").replaceAll("Z", "𝐙")
            .replaceAll("1", "𝟏").replaceAll("2", "𝟐")
            .replaceAll("3", "𝟑").replaceAll("4", "𝟒")
            .replaceAll("5", "𝟓").replaceAll("6", "𝟔")
            .replaceAll("7", "𝟕").replaceAll("8", "𝟖")
            .replaceAll("9", "𝟗").replaceAll("0", "𝟎");

        let newNickname = `𝐀𝐫𝐜𝐚𝐧𝐞  丶  ${font}`;

        try {
            await mentionedUser.setNickname(newNickname);
            await message.channel.send(`__**Done! Server tag has been added to ${mentionedUser}.**__`);
        } catch (err) {
            console.error(err);
            await message.channel.send(`**I don’t have permission to change the nickname or an error occurred.**`);
        }
    }
});

// ⚚・─━━━❲❲ +tbc ❳❳━━━─・⚚ \\
    client.on('message', async message => {
      if (message.content.startsWith(prefix + 'tbc')) {
        if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Can Use**`);

        const args = message.content
          .split(" ")
          .slice(1)
          .join(" ");
        const role = message.mentions.roles.first();

        if (!role) {
          return message.reply('**Please Mention a Role.**');
        }
        if (!args) {
          return message.reply('**Please Enter Your Message.**');
        }

        let sentCount = 0;

        let members = message.guild.members.cache.filter(member => !member.user.bot && member.roles.cache.has(role.id));

        members.forEach((member, index) => {
          setTimeout(() => {
            member.send({ content: args })
              .then(() => {
                console.log(`Sent to ${member.user.username}`);
                message.channel.send(`**Msg Sent to. <@${member.user.id}> <a:A_3_sp:1274557346194001920>**`);
              })
              .catch(err => {
                console.error(`**Couldn't send to ${member.user.tag} ❌**`);
                message.channel.send(`**Couldn't send the msg to. <@${member.user.id}> <a:1M_48:1274557388761858121>**`);
              })
              .finally(() => {
                sentCount++;
                if (index === members.size - 1) {
                  // Send a final message after sending to all members
                  message.channel.send(`**Done sending your message to ${sentCount} members. <a:A_3_sp:1274557346194001920>**`);
                }
              });
          }, index * 5000); // Send to each member with a delay of 5 seconds
        });
      }
    });

// ⚚・─━━━❲❲ +clear ❳❳━━━─・⚚ \\

  client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + 'clear')
  ) {
      const args = message.content.split(' ')
      let amount = Number(args[1]) || 100

      const permission = message.member.permissions.has("MANAGE_MESSAGES");
      const me = message.guild.me.permissions.has("MANAGE_MESSAGES");
      if(!permission) return message.reply(":x: **You don't have permission to use this command**")
      if(!me) return message.reply("**:rolling_eyes: - I couldn't clear this channel. Please check my permissions.**")

      args[1] = args[1] ? parseInt(args[1]) : 100;        
      if(isNaN(args[1])) return message.reply({ content: `🙄 **Please provide valid number**` }).catch((err) => {
        console.log(err.message)
      });

      if (amount > 100) return message.reply(":rolling_eyes: **You can't delete more than __100__ messages**`").cache((err) => {
        console.log(err.message)
      });

      if (amount < 1) return message.reply(':rolling_eyes: **You need to delete at least __1__ messages**').catch((err) => {
        console.log(err.message)
      });

      message.delete().catch((err) => {
        console.log(err.message)
      });

      let messages = await message.channel.messages.fetch({ limit: amount  });
      messages = messages.filter(m => Date.now() - (new Date(m.createdTimestamp)).getTime() <= (14 * 24 * 60 * 60000));

      message.channel.bulkDelete(messages).then(() => {
        message.channel.send({content :`\`\`\`js
  ${messages.size} messages have been deleted.\`\`\``}).then((msg) => {
          setTimeout(() => {
            msg.delete().catch((err) => {
              console.log(err.message)
            })
          }, 5000);
        }).catch((err) => {
           console.log(err.message)
           })
              }).catch(err => console.log(err.message));
            } 
          })

// ⚚・─━━━❲❲ +tr ❳❳━━━─・⚚ \\

  client.on('messageCreate', message => {
    if (message.content.startsWith( prefix + 'tr')) {
      return message.reply(`**برجاء التحويل في قناه التحويلات لضمان حقك من هنا :**
<:Probot:1288212968701558794> <#${transfers}> <:Probot:1288212968701558794>`)
    }
  });

// ⚚・─━━━❲❲ Delete Sell Tickets ❳❳━━━─・⚚ \\

  client.on('messageCreate' , async(message) => {
    if(message.author.bot) return;
    let auto = ["1295098416602415104"]
    if(auto.includes(message.channel.id)) {
      message.channel.send({embeds:[
        new MessageEmbed()
        .setColor(color)
        .setImage(line)
      ]})
    }
  })
// ⚚・─━━━❲❲ Delete Need Tickets ❳❳━━━─・⚚ \\
client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix + 'delete-need')) {
        if (!owners.includes(message.author.id)) {
            return message.reply('<a:736257973906571306:1288205734080806912> **لا يمكنك استخدام هذا الأمر.**');
        }

        const args = message.content.split(' ');
        const categoryId = args[1];  

        if (!categoryId) {
            return message.reply('<a:736257973906571306:1288205734080806912> **يرجى إدخال ID الكاتيجوري.**');
        }

        const category = message.guild.channels.cache.get(categoryId);

        if (!category || category.type !== 'GUILD_CATEGORY') {
            return message.reply('<a:736257973906571306:1288205734080806912> **لم يتم العثور على الكاتيجوري أو أنه ليس من نوع الكاتيجوري.**');
        }

        const channels = category.children;

        for (const [channelId, channel] of channels) {
            if (channel.name.startsWith('need-')) {
                try {
                    // إرسال $transcript في نفس الغرفة التي سيتم حذفها
                    await channel.send(`$transcript`);
                    await new Promise(resolve => setTimeout(resolve, 2000)); // انتظار لمدة ثانيتين قبل الحذف
                    await channel.delete();
                    console.log(`تم حذف الغرفة: ${channel.name}`);
                } catch (error) {
                    console.error(`خطأ أثناء حذف الغرفة: ${channel.name}`, error);
                }
            }
        }

        message.reply('<:1052332827741528064:1288213406309945344> **تم حذف جميع الغرف التي تبدأ بـ closed- في الكاتيجوري.**');
    }
});
// ⚚・─━━━❲❲ Delete By Tickets ❳❳━━━─・⚚ \\
client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix + 'delete-by')) {
        if (!owners.includes(message.author.id)) {
            return message.reply('<a:736257973906571306:1288205734080806912>> **لا يمكنك استخدام هذا الأمر.**');
        }

        const args = message.content.split(' ');
        const categoryId = args[1];  

        if (!categoryId) {
            return message.reply('<a:736257973906571306:1288205734080806912> **يرجى إدخال ID الكاتيجوري.**');
        }

        const category = message.guild.channels.cache.get(categoryId);

        if (!category || category.type !== 'GUILD_CATEGORY') {
            return message.reply('<a:736257973906571306:1288205734080806912> **لم يتم العثور على الكاتيجوري أو أنه ليس من نوع الكاتيجوري.**');
        }

        const channels = category.children;

        for (const [channelId, channel] of channels) {
            if (channel.name.startsWith('by-')) {
                try {
                    // إرسال $transcript في نفس الغرفة التي سيتم حذفها
                    await channel.send(`$transcript`);
                    await new Promise(resolve => setTimeout(resolve, 2000)); // انتظار لمدة ثانيتين قبل الحذف
                    await channel.delete();
                    console.log(`تم حذف الغرفة: ${channel.name}`);
                } catch (error) {
                    console.error(`خطأ أثناء حذف الغرفة: ${channel.name}`, error);
                }
            }
        }

        message.reply('<:1052332827741528064:1288213406309945344 **تم حذف جميع الغرف التي تبدأ بـ closed- في الكاتيجوري.**');
    }
});
// ⚚・─━━━❲❲ Delete Sell Tickets ❳❳━━━─・⚚ \\
client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix + 'delete-sell')) {
        if (!owners.includes(message.author.id)) {
            return message.reply('<a:736257973906571306:1288205734080806912> **لا يمكنك استخدام هذا الأمر.**');
        }

        const args = message.content.split(' ');
        const categoryId = args[1];  

        if (!categoryId) {
            return message.reply('<a:736257973906571306:1288205734080806912> **يرجى إدخال ID الكاتيجوري.**');
        }

        const category = message.guild.channels.cache.get(categoryId);

        if (!category || category.type !== 'GUILD_CATEGORY') {
            return message.reply('<a:736257973906571306:1288205734080806912> **لم يتم العثور على الكاتيجوري أو أنه ليس من نوع الكاتيجوري.**');
        }

        const channels = category.children;

        for (const [channelId, channel] of channels) {
            if (channel.name.startsWith('sell-')) {
                try {
                    // إرسال $transcript في نفس الغرفة التي سيتم حذفها
                    await channel.send(`$transcript`);
                    await new Promise(resolve => setTimeout(resolve, 2000)); // انتظار لمدة ثانيتين قبل الحذف
                    await channel.delete();
                    console.log(`تم حذف الغرفة: ${channel.name}`);
                } catch (error) {
                    console.error(`خطأ أثناء حذف الغرفة: ${channel.name}`, error);
                }
            }
        }

        message.reply('<a:736257973906571306:1288205734080806912> **تم حذف جميع الغرف التي تبدأ بـ closed- في الكاتيجوري.**');
    }
});
// ⚚・─━━━❲❲ Delete Open Tickets ❳❳━━━─・⚚ \\
client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix + 'delete-ticket')) {
        if (!owners.includes(message.author.id)) {
            return message.reply('<a:736257973906571306:1288205734080806912> **لا يمكنك استخدام هذا الأمر.**');
        }

        const args = message.content.split(' ');
        const categoryId = args[1];  

        if (!categoryId) {
            return message.reply('<a:736257973906571306:1288205734080806912> **يرجى إدخال ID الكاتيجوري.**');
        }

        const category = message.guild.channels.cache.get(categoryId);

        if (!category || category.type !== 'GUILD_CATEGORY') {
            return message.reply('<a:736257973906571306:1288205734080806912> **لم يتم العثور على الكاتيجوري أو أنه ليس من نوع الكاتيجوري.**');
        }

        const channels = category.children;

        for (const [channelId, channel] of channels) {
            if (channel.name.startsWith('ticket-')) {
                try {
                    // إرسال $transcript في نفس الغرفة التي سيتم حذفها
                    await channel.send(`$transcript`);
                    await new Promise(resolve => setTimeout(resolve, 2000)); // انتظار لمدة ثانيتين قبل الحذف
                    await channel.delete();
                    console.log(`تم حذف الغرفة: ${channel.name}`);
                } catch (error) {
                    console.error(`خطأ أثناء حذف الغرفة: ${channel.name}`, error);
                }
            }
        }

        message.reply('<:1052332827741528064:1288213406309945344> **تم حذف جميع الغرف التي تبدأ بـ closed- في الكاتيجوري.**');
    }
});
// ⚚・─━━━❲❲ Delete Closed Tickets ❳❳━━━─・⚚ \\

client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix + 'delete-closed')) {
        if (!owners.includes(message.author.id)) {
            return message.reply('<a:736257973906571306:1288205734080806912> **لا يمكنك استخدام هذا الأمر.**');
        }

        const args = message.content.split(' ');
        const categoryId = args[1];  

        if (!categoryId) {
            return message.reply('<a:736257973906571306:1288205734080806912> **يرجى إدخال ID الكاتيجوري.**');
        }

        const category = message.guild.channels.cache.get(categoryId);

        if (!category || category.type !== 'GUILD_CATEGORY') {
            return message.reply('<a:736257973906571306:1288205734080806912> **لم يتم العثور على الكاتيجوري أو أنه ليس من نوع الكاتيجوري.**');
        }

        const channels = category.children;

        for (const [channelId, channel] of channels) {
            if (channel.name.startsWith('closed-')) {
                try {
                    // إرسال $transcript في نفس الغرفة التي سيتم حذفها
                    await channel.send(`$transcript`);
                    await new Promise(resolve => setTimeout(resolve, 2000)); // انتظار لمدة ثانيتين قبل الحذف
                    await channel.delete();
                    console.log(`تم حذف الغرفة: ${channel.name}`);
                } catch (error) {
                    console.error(`خطأ أثناء حذف الغرفة: ${channel.name}`, error);
                }
            }
        }

        message.reply('<:1052332827741528064:1288213406309945344> **تم حذف جميع الغرف التي تبدأ بـ closed- في الكاتيجوري.**');
    }
});
// ⚚・─━━━❲❲ Numbers ❳❳━━━─・⚚ \\
const applyrole = '1287859458302677053';
const numbersFile = './numbers.json';

let userNumbers = {};

function loadNumbers() {
    if (fs.existsSync(numbersFile)) {
        const data = fs.readFileSync(numbersFile);
        userNumbers = JSON.parse(data);
        console.log('Numbers loaded:', userNumbers);
    } else {
        console.log('No numbers file found. Creating a new one.');
        userNumbers = {}; // Initialize as empty object if file doesn't exist
    }
}

function saveNumbers() {
    try {
        fs.writeFileSync(numbersFile, JSON.stringify(userNumbers, null, 2));
        console.log('Numbers saved:', userNumbers);
    } catch (error) {
        console.error('Error saving numbers:', error);
    }
}

function isValidNumber(number) {
    return number.startsWith('+') && !isNaN(number.slice(1));
}

loadNumbers();

client.on('messageCreate', async (message) => {
    if (!message.guild || !message.member) return;

    if (message.content.startsWith('+add-num')) {
        if (!message.member.roles.cache.has(applyrole)) {
            return message.reply("<a:736257973906571306:1288205734080806912> **This Command Is For Admins Only**");
        }
        
        const args = message.content.split(' ');
        const mention = message.mentions.users.first();

        if (!mention) {
            return message.reply('<a:736257973906571306:1288205734080806912> **Please mention the user you want to add the number for.**');
        }

        const numbers = args.slice(2).join(' ').split(' - ');

        if (numbers.length < 1) {
            return message.reply('<a:736257973906571306:1288205734080806912> **Please provide at least one number.**');
        }

        const validNumbers = numbers.filter(isValidNumber);
        const invalidNumbers = numbers.filter(num => !isValidNumber(num));

        if (invalidNumbers.length > 0) {
            return message.reply(`<a:Red_True:1287754535489507361> **Please provide valid numbers. Invalid numbers: ${invalidNumbers.join(', ')}**`);
        }

        const existingNumbers = userNumbers[mention.id] || [];
        const duplicateNumbers = validNumbers.filter(num => existingNumbers.includes(num));

        if (duplicateNumbers.length > 0) {
            return message.reply(`<a:736257973906571306:1288205734080806912> **Some of the numbers you provided already exist: ${duplicateNumbers.join(', ')}**`);
        }

        const updatedNumbers = [...existingNumbers, ...validNumbers];
        userNumbers[mention.id] = updatedNumbers;
        saveNumbers();

        const embed = new MessageEmbed()
            .setTitle('<a:Red_True:1287754535489507361> Numbers Added Successfully')
            .setDescription(`The numbers ${validNumbers.join(', ')} have been added to ${mention.username}.`)
            .setColor(color);
        
        return message.reply({ embeds: [embed] });
    }

    if (message.content.startsWith('+check-number')) {
        if (!message.member.roles.cache.has(applyrole)) {
            return message.reply("<a:736257973906571306:1288205734080806912> **This Command Is For Admins Only**");
        }

        const mention = message.mentions.users.first() || message.author;

        const numbers = userNumbers[mention.id];
        if (!numbers || numbers.length === 0) {
            return message.reply(`<a:736257973906571306:1288205734080806912> **${mention.username} has no saved numbers.**`);
        }

        const embed = new MessageEmbed()
            .setTitle(`Numbers for ${mention.username}`)
            .setDescription(numbers.join(', '))
            .setColor(color);
        
        return message.reply({ embeds: [embed] });
    }

    if (message.content.startsWith('+remove-num')) {
        if (!message.member.roles.cache.has(applyrole)) {
            return message.reply("<a:736257973906571306:1288205734080806912> **This Command Is For Admins Only**");
        }
        
        const args = message.content.split(' ');
        const mention = message.mentions.users.first();

        if (!mention) {
            return message.reply('<a:736257973906571306:1288205734080806912> **Please mention the user you want to remove the number for.**');
        }

        const numberToRemove = args[2];
        if (!isValidNumber(numberToRemove)) {
            return message.reply('<a:736257973906571306:1288205734080806912> **Please enter a number with the country number.**');
        }

        const existingNumbers = userNumbers[mention.id];
        if (!existingNumbers || !existingNumbers.includes(numberToRemove)) {
            return message.reply('<a:736257973906571306:1288205734080806912> **This number does not exist.**');
        }

        const updatedNumbers = existingNumbers.filter(num => num !== numberToRemove);
        userNumbers[mention.id] = updatedNumbers;
        saveNumbers();

        return message.reply(`<a:Red_True:1287754535489507361>**The number ${numberToRemove} has been removed from ${mention.username}.**`);
    }

    if (message.content.startsWith('+numbers')) {
        if (!message.member.roles.cache.has(applyrole)) {
            return message.reply("<a:736257973906571306:1288205734080806912> **This Command Is For Admins Only**");
        }

        const usersWithNumbers = Object.keys(userNumbers)
            .map(userId => {
                const user = message.guild.members.cache.get(userId);
                const numbers = userNumbers[userId];
                return user ? `${user} - \`${numbers.join(', ')}\` ` : null;
            })
            .filter(Boolean);

        if (usersWithNumbers.length === 0) {
            return message.reply('<a:736257973906571306:1288205734080806912> **No numbers are saved.**');
        }

        let currentPage = 0;
        const itemsPerPage = 15;
        const totalPages = Math.ceil(usersWithNumbers.length / itemsPerPage);

        const generateEmbed = (page) => {
            const start = page * itemsPerPage;
            const end = start + itemsPerPage;
            const usersOnPage = usersWithNumbers.slice(start, end).join('\n') || 'No data';

            return new MessageEmbed()
                .setTitle('List of Users and Their Numbers')
                .setDescription(usersOnPage)
                .setFooter(`Page ${page + 1} of ${totalPages}`)
                .setColor(color);
        };

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('prev')
                    .setLabel('Previous')
                    .setStyle('PRIMARY')
                    .setDisabled(currentPage === 0),
                new MessageButton()
                    .setCustomId('next')
                    .setLabel('Next')
                    .setStyle('PRIMARY')
                    .setDisabled(currentPage === totalPages - 1),
            );

        const embedMessage = await message.reply({ embeds: [generateEmbed(currentPage)], components: [row] });

        const filter = (i) => i.user.id === message.author.id;
        const collector = embedMessage.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('collect', (interaction) => {
            if (interaction.customId === 'prev' && currentPage > 0) {
                currentPage--;
            } else if (interaction.customId === 'next' && currentPage < totalPages - 1) {
                currentPage++;
            }

            interaction.update({ embeds: [generateEmbed(currentPage)], components: [row] });
        });

        collector.on('end', () => {
            embedMessage.edit({ components: [] });
        });
    }
});

// ⚚・─━━━❲❲ +button ❳❳━━━─・⚚ \\

client.on('messageCreate', async cristalateam => {
  if (cristalateam.content.startsWith(prefix + 'button') && cristalateam.member.permissions.has("ADMINISTRATOR")) {
    cristalateam.delete();
    
    const vodkaEmbed = new MessageEmbed()
    .setColor(color)
    .setTitle('Collect Your Roles')
    .setImage(line)
    .setDescription(`**تسطتيع اخذ رولات المنشن من هنا, لعدم الازعاج ب المنشانات الاخري**
# Offers Role, <a:offers:1288215260897218561>
# GiveAways Role, <a:Giveawayyyvp:1288215371073196207>
# News Role, <a:news:1288215439951794237>`);
    
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('role1')
          .setEmoji(`<a:offers:1288215260897218561>`)
          .setLabel('𝐎𝐟𝐟𝐞𝐫𝐬')
          .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('role2')
          .setEmoji(`<a:Giveawayyyvp:1288215371073196207>`)
          .setLabel('𝐆𝐢𝐯𝐞𝐀𝐰𝐚𝐲')
          .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('role3')
          .setEmoji(`<a:news:1288215439951794237>`)
          .setLabel('𝐍𝐞𝐰𝐬')
          .setStyle('PRIMARY')
      );

    cristalateam.channel.send({ embeds: [vodkaEmbed], components: [row] });
  }
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'role1') {
    const crole = interaction.guild.roles.cache.get('1287738972763852821');
    if (interaction.member.roles.cache.has(crole.id)) {
      await interaction.member.roles.remove(crole).catch(err => console.error(err));
      interaction.reply({ content: `Done Remove The Role Succefully ☑️`, ephemeral: true });
    } else {
      await interaction.member.roles.add(crole).catch(err => console.error(err));
      interaction.reply({ content: `Done Added The Role Succefully ☑️`, ephemeral: true });
    }
  } else if (interaction.customId === 'role2') {
    const ccrole = interaction.guild.roles.cache.get('1287738974374330378');
    if (interaction.member.roles.cache.has(ccrole.id)) {
      await interaction.member.roles.remove(ccrole).catch(err => console.error(err));
      interaction.reply({ content: `Done Remove The Role Succefully ☑️`, ephemeral: true });
    } else {
      await interaction.member.roles.add(ccrole).catch(err => console.error(err));
      interaction.reply({ content: `Done Added The Role Succefully ☑️`, ephemeral: true });
    }
  } else if (interaction.customId === 'role3') {
    const vodkarole = interaction.guild.roles.cache.get('1287738975628300389');
    if (interaction.member.roles.cache.has(vodkarole.id)) {
      await interaction.member.roles.remove(vodkarole).catch(err => console.error(err));
      interaction.reply({ content: `Done Remove The Role Succefully ☑️`, ephemeral: true });
    } else {
      await interaction.member.roles.add(vodkarole).catch(err => console.error(err));
      interaction.reply({ content: `Done Added The Role Succefully ☑️`, ephemeral: true });
    }
  }
});


// ⚚・─━━━❲❲ Stock ❳❳━━━─・⚚ \\

let banks = '1255986683011272816'//ايدي الي هيتحول 
const
  updateAdmins = () => {
  owner = db.get("admins")
  owners = '1255986683011272816'
  owner.unshift('1255986683011272816')//اي دي حقك
}
updateAdmins()
//let sv = '1009103814030274610' حط ايدي سيرفر يخرج منو بوت


const logToCh = ( channel , message , payload , account , verb) => {
  if (db.has(channel)) {
              ch = db.get(channel)
              client.channels.cache
                .get(ch)

                .send({
                  embeds: [new Discord.MessageEmbed()
                    .setAuthor(
                      message.author.username,
                      message.author.displayAvatarURL({ dynamic: true })
                    )
                    .setTimestamp()
                    .setDescription(`${message.author.tag} ${verb} ${account} :\n \`\`\`${payload.join("\n")}\`\`\``)
                
                    .setColor(color)
                  ]
                })}
}






client.on("message", async message => {
  let prefixx = "s";
  const args = message.content
    .slice(prefixx.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  if (message.content.startsWith(prefix + "etprefix")) {
    if (!owner.includes(message.author.id)) return;
    if (!args[0])
      return message.channel.send(
        db.get("prefix") || `> **The Server Prefix is : \`${prefix}\``
      );
    db.set("prefix", args[0]);
    message.channel.send(
      `> **Done Setting the new Prefix To : \`${db.get("prefix")}\``
    );
  }
});

let cooldown = false;
client.on("message", async message => {
  try {
    if (db.get("blacklist").includes(message.author.id)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix) || message.author.bot) return; 

    if (command === "status") {
      if (!owner.includes(message.author.id)) return; 
      if (!args[0]) return message.channel.send({
        embeds: [
          new Discord.MessageEmbed() 
            .setAuthor(
              message.author.username,
              message.author.displayAvatarURL({ dynamic: true })
            )
            .addField(
              `> Error :`,
              `Usage : ${prefix}status \`TYPE\`\n\n \`\`\`TYPE = [ open : to open the shop \n close : to close the shop ]\`\`\``
            )
           
            .setColor(color)
            .setTimestamp()
            .setTitle("Status Command")
            .setColor(color)]
      }
      );
      if (args[0] === "open") {
        message.channel.send("> ** Store opened successfully <a:040:1282828248807374890>**");
        db.set("status", args[0]);
      }
      if (args[0] === "close") {
        db.delete("status");
        message.channel.send("> ** Store closed successfully <a:040:1282828248807374890>**");
      }
    }


    if (command.startsWith("setprice-")) {

      const account = command.split("-")[1]

      if (!owner.includes(message.author.id)) return message.channel.send("You don't have permission <a:736257973906571306:1274572444564328498>");
      if (message.channel.type === "dm") return;
      let tax = Math.floor(args[0] * (20 / 19) + 1);
      if (!tax)
        return message.channel.send({
          embeds: [
            new Discord.MessageEmbed() 
              .setAuthor(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .addField(
                `> Error :`,
                `Usage : ${prefix}setprice-${account} \`PRICE\`\n\n \`\`\`PRICE = [ Enter account price ]\`\`\``
              )
            
              .setColor(color)
              .setTimestamp()
              .setTitle(`Setprice ${account} Command`)]
        }
        ).setColor(color);

      let data = db.get("accounts")
      let thisAcc = data.find(el => el.name === account)

      if (!thisAcc) return message.channel.send("**There is no such account <a:736257973906571306:1274572444564328498>**")
      data[data.indexOf(thisAcc)].price = Number(args[0])
      data[data.indexOf(thisAcc)].tax = tax

      db.set("accounts", data)





      return message.channel.send(`> ** The price of ${account} accounts has been successfully determined <a:040:1288216161108103333>**`);
    }


    /*if (command.startsWith("add-")) {

      const account = command.split("-")[1]
      
      if (!owner.includes(message.author.id)) return; 
      if (!args[0])
        return message.channel.send({
          embeds: [
            new Discord.MessageEmbed() 
              .setAuthor(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .addField(
                `> Error :`,
                `Usage : ${prefix}add-${account} \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
              )
         
              .setColor(color)
              .setTimestamp()
              .setTitle(`Add ${account} Accounts Command`)]
        }
        );
      if (!message.content.includes(":"))
        return message.channel.send({
          embeds: [
            new Discord.MessageEmbed() 
              .setAuthor(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .addField(
                `> Error :`,
                `Usage : ${prefix}add-${account} \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
              )
          
              .setColor(color)
              .setTimestamp()
              .setTitle(`Add ${account} Accounts Command`)]
        }
        );
     
      let Data = db.get("accounts")
      let thisAcc = Data.find(el => el.name === account)

      if (!thisAcc) {
        let m = message.content.split(" ").slice(1).join(" ").split("\n")
        Data.push({ name: account, price: 0, tax: 0, emails: m })
        db.set("accounts", Data)
        message.delete()
        return message.channel.send(`> ** The ${account} account has been added successfully <a:040:1288216161108103333>**`);
      }
      else {
        let m = message.content.split(" ").slice(1).join(" ").split("\n")

        currentData = Data[Data.indexOf(thisAcc)].emails
        Data[Data.indexOf(thisAcc)].emails = [...currentData, ...m]
        db.set("accounts", Data)
        logToCh("add" , message , m ,account , "added" )
        message.delete()
        return message.channel.send(`> **The ${account} account has been added successfully <a:040:1288216161108103333>**`);
      }

    }*/
      
      const fs = require('fs');
const path = require('path');

if (command.startsWith("add-")) {
    const account = command.split("-")[1];
 
    if (!owner.includes(message.author.id)) return;

    const filePath = path.join(__dirname, 'acc.txt');
    if (!fs.existsSync(filePath)) {
        return message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                    .setAuthor(
                        message.author.username,
                        message.author.displayAvatarURL({ dynamic: true })
                    )
                    .addField(
                        `> Error :`,
                        `الملف **acc.txt** غير موجود!`
                    )
                    .setColor(color)
                    .setTimestamp()
                    .setTitle(`Add ${account} Accounts Command`)
            ]
        });
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor(
                            message.author.username,
                            message.author.displayAvatarURL({ dynamic: true })
                        )
                        .addField(
                            `> Error :`,
                            `حدث خطأ أثناء قراءة الملف.`
                        )
                        .setColor(color)
                        .setTimestamp()
                        .setTitle(`Add ${account} Accounts Command`)
                ]
            });
        }


        const accountsList = data.split('\n').filter(line => line.includes(':'));

        if (accountsList.length === 0) {
            return message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor(
                            message.author.username,
                            message.author.displayAvatarURL({ dynamic: true })
                        )
                        .addField(
                            `> Error :`,
                            `الملف لا يحتوي على حسابات صالحة بصيغة \`EMAIL:PASSWORD\`.`
                        )
                        .setColor(color)
                        .setTimestamp()
                        .setTitle(`Add ${account} Accounts Command`)
                ]
            });
        }

        let Data = db.get("accounts");
        let thisAcc = Data.find(el => el.name === account);

        if (!thisAcc) {
            Data.push({ name: account, price: 0, tax: 0, emails: accountsList });
            db.set("accounts", Data);
            message.delete();
            return message.channel.send(`> ** The ${account} account has been added successfully <a:040:1288216161108103333>**`);
        } else {
            let currentData = Data[Data.indexOf(thisAcc)].emails;
            Data[Data.indexOf(thisAcc)].emails = [...currentData, ...accountsList];
            db.set("accounts", Data);
            logToCh("add", message, accountsList, account, "added");
            message.delete();
            return message.channel.send(`> **The ${account} account has been added successfully <a:040:1288216161108103333>**`);
        }
    });
}

    
    
    
    

    if (command.startsWith("delete-")) {
      const account = command.split("-")[1]
      if (!owner.includes(message.author.id)) return;
      let data = db.get("accounts")

      let newData = data.filter(el => el.name !== account)

      db.set("accounts", newData);
      message.channel.send(`> ** ${account} category has been deleted successfully <a:040:1288216161108103333>**`);
    }

    
    
    
    

    /*if (command.startsWith("give-")) {
      if (!owner.includes(message.author.id)) return message.channel.send("**only admins can use give gommand**")
      let user =
        message.mentions.users.first() ||
        message.guild.members.cache.find(u => u.id === args[0]);

      const numOfAcc = args[1] || 1
      const account = command.split("-")[1]
      const data = db.get("accounts")
      let accInDb = data.find(el => el.name === account)
      if (!accInDb) { return message.channel.send("**This item does not exist <a:736257973906571306:1288205734080806912>**") }
      if (!user)
        return message.channel.send("> **Please select the user correctly **");
      if (accInDb.emails.length < numOfAcc) { return message.channel.send("**انتهت الكمية**") }

      const sentMail = accInDb.emails.splice(0, numOfAcc)
      logAcc = sentMail;
      data[data.indexOf(accInDb)].emails = accInDb.emails;
      db.set("accounts", data)
      user.send({
        embeds: [new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setTitle(`**Hi ${user.username} , ${client.user.username} gave you ${numOfAcc} ${account} account${numOfAcc > 1 ? "s" : ""}:**`)
          .setDescription(
            `
          **Your account${numOfAcc > 1 ? "s" : ""}:**
\`\`\`${sentMail.join("\n")}\`\`\`
`)
      
          .setColor(color)
        ]
      })
      message.channel.send(`<@${user.id}> **تحقق من الخاص <a:040:1288216161108103333>**`)

      if (db.has("ch")) {
        ch = db.get("ch")
        client.channels.cache
          .get(ch)
          .send({
            embeds: [new Discord.MessageEmbed().setTitle(`${message.author.tag} gave ${numOfAcc} ${account} account to ${user.username}`)
              .setDescription(`\`\`\`${logAcc.join("\n")}\`\`\``)
              .setAuthor(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()
             
              .setColor(color)

            ]
          });
      }

    }*/

if (command.startsWith("give-")) {
    if (!owner.includes(message.author.id)) return message.channel.send("**only admins can use give command**");

    let user = message.mentions.users.first() || message.guild.members.cache.find(u => u.id === args[0]);
    const numOfAcc = args[1] || 1;
    const account = command.split("-")[1];
    const data = db.get("accounts");
    let accInDb = data.find(el => el.name === account);

    if (!accInDb) {
        return message.channel.send("**This item does not exist <a:736257973906571306:1288205734080806912>**");
    }
    if (!user) {
        return message.channel.send("> **Please select the user correctly **");
    }
    if (accInDb.emails.length < numOfAcc) {
        return message.channel.send("**انتهت الكمية**");
    }

    // استخراج الحسابات المطلوبة
    const sentMail = accInDb.emails.splice(0, numOfAcc);
    logAcc = sentMail;
    data[data.indexOf(accInDb)].emails = accInDb.emails;
    db.set("accounts", data);

    // مسار الملف النصي حيث سيتم حفظ النيتروهات أو الحسابات
    const filePath = path.join(__dirname, `${account}_accounts_${user.username}.txt`);
    const fileContent = `Here are your ${numOfAcc} ${account} account${numOfAcc > 1 ? "s" : ""}:\n${sentMail.join("\n")}\n\n`;

    // كتابة الحسابات في الملف النصي
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error(err);
            return message.channel.send("**حدث خطأ أثناء حفظ الحسابات في الملف.**");
        }

        // إرسال الملف النصي للمستخدم في الخاص
        user.send({
            content: `**Hi ${user.username}, here are your ${numOfAcc} ${account} account${numOfAcc > 1 ? "s" : ""}:**`,
            files: [filePath]
        }).then(() => {
            message.channel.send(`<@${user.id}> **تحقق من الخاص <a:040:1288216161108103333>**`);
        }).catch(err => {
            console.error(err);
            message.channel.send("**حدث خطأ أثناء إرسال الملف للمستخدم.**");
        });
    });

    // إرسال رسالة إلى قناة اللوج (إن وجدت)
    if (db.has("ch")) {
        ch = db.get("ch");
        client.channels.cache
            .get(ch)
            .send({
                embeds: [new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} gave ${numOfAcc} ${account} account${numOfAcc > 1 ? "s" : ""} to ${user.username}`)
                    .setDescription(`\`\`\`${logAcc.join("\n")}\`\`\``)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor(color)
                ]
            });
    }
}

    /*if (command === "buy") {
      const buyId = db.get("buy")
      if (![message.channel.id, "all"].includes(buyId)) {
        message.reply("**This is not the right room to buy <a:736257973906571306:1288205734080806912>**");
        return;
      }
      if (cooldown === true) return message.reply("**Wait 1 minute before buy again** " + "<@" + message.author.id + ">");
      const account = args[0], numOfAcc = args[1] || 1
      
      const data = db.get("accounts")
      let accInDb = data.find(el => el.name === account)
      if (!accInDb) { return message.channel.send("**This item does not exist <a:736257973906571306:1288205734080806912>**") }
      let { price, tax, emails } = accInDb;
      let probotid = db.get("probot") || "282859044593598464";
      let role = db.get("role");
      if (message.channel.type === "dm") return;
      if (!db.has("status")) return message.channel.send("The store is closed.");

      if (emails.length < numOfAcc) { return message.channel.send("** <a:736257973906571306:1288205734080806912> انتهت الكمية**") }
      let logAcc;
      let buys = new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setThumbnail(message.guild.iconURL())
        .setImage(line)
        .setTimestamp()
        .addField(`> <a:dance:1287751022202064972> **Wow You Now Need Buy This Account ${account} :**`
          ,
          `
            
            > <a:cs:1288204919912005663> **Account Need :** \`${numOfAcc}\`
            > <a:cs:1288204919912005663> **All Tax With Number :** \`${tax * numOfAcc}\`  
            > <a:cs:1288204919912005663> **You only have 50 seconds to convert**
            > <a:cs:1288204919912005663> **Please make sure you are open** <a:736257973906571306:1288205734080806912>

            **To purchase, please copy and paste the command below => :**
          \`\`\`
#credit <@${banks}> ${numOfAcc * tax}
           \`\`\`
            
     
            
`   )

        
        .setColor(color);
      message.channel.send({ embeds: [buys] }).then(msg => {


        const filter = ({ content, author: { id } }) => {

          return content.startsWith(
            `**:moneybag: | ${message.author.username}, has transferred `
          ) &&
            content.includes(`${banks}`) &&
            id === probotid &&
            (Number(content.slice(content.lastIndexOf("`") - String(tax * numOfAcc).length, content.lastIndexOf("`"))) >= price * numOfAcc)
        }


        message.channel.awaitMessages({
          filter,
          max: 1,
          time: 50_000,
          errors: ['time']
        }).then(msg => {
          const sentMail = emails.splice(0, numOfAcc)
          logAcc = sentMail;
          data[data.indexOf(accInDb)].emails = emails;
          db.set("accounts", data)

          message.author.send({
            embeds: [new Discord.MessageEmbed()
              .setAuthor(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()
              .setDescription(`**Hi ${message.author.tag} , you have purchased ${numOfAcc} ${account} account${numOfAcc > 1 ? "s" : ""}:**
> **Total price : \`${tax * numOfAcc}\`**
          **Your account${numOfAcc > 1 ? "s" : ""}:**

         \`\`\` ${sentMail.join("\n")}\`\`\`
`)
              
              .setColor(color)
            ]
          })
        
        //message.reply("**Check your Dm's <a:040:1282828248807374890>**")
     message.reply 

  let embed = new Discord.MessageEmbed()
  .setTitle("<a:dance:1287751022202064972> بعتلك النيترو خاص يا معلم")
  .setColor(color)
  message.channel.send({embeds : [embed]})
  
          msg.delete()

        })

          .then(() => {
            cooldown = false
            if (db.has("ch")) {
              ch = db.get("ch")
              if (ch){
              client.channels.cache
                .get(ch)

          //mm
                
               // .send(`${message.author.tag} bought a ${account} account \n Account Informations : \`\`\`${logAcc.join("\n")}\`\`\``);
            }
            }
          })

          .catch(err => {
            cooldown = false
            console.log(err)
            msg.delete()
            message.reply("**Time is over  operation canceled <a:736257973906571306:1274572444564328498> **")
          })

          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    .then(() => {
            cooldown = false
            if (db.has("notif")) {
              notif = db.get("notif")
              if (notif){
              client.channels.cache
                .get(notif)

//4
                  //1     
              // .send(`${message.author.tag} bought a ${account} account \n Account Informations : \`\`\`${logAcc.join("\n")}\`\`\``);
            }
            }
          })

          .catch(err => {
            cooldown = false
            console.log(err)
            msg.delete()
            message.reply("**Time is over , operation canceled <a:736257973906571306:1288205734080806912> **")
          })

      

      })


      !cooldown && (cooldown = true)

    cooldown &&  setTimeout(() => {
        // Removes the user from the set after a minute
        cooldown = false


      }, 60000);
      return
    }*/

if (command === "buy") {
    const buyId = db.get("buy");
    if (![message.channel.id, "all"].includes(buyId)) {
        message.reply("**This is not the right room to buy <a:736257973906571306:1288205734080806912>**");
        return;
    }
    if (cooldown === true) return message.reply("**Wait 1 minute before buy again** " + "<@" + message.author.id + ">");
    
    const account = args[0], numOfAcc = args[1] || 1;
    const data = db.get("accounts");
    let accInDb = data.find(el => el.name === account);
    if (!accInDb) { 
        return message.channel.send("**This item does not exist <a:736257973906571306:1288205734080806912>**");
    }
    
    let { price, tax, emails } = accInDb;
    let probotid = db.get("probot") || "282859044593598464";
    let role = db.get("role");
    if (message.channel.type === "dm") return;
    if (!db.has("status")) return message.channel.send("The store is closed.");

    if (emails.length < numOfAcc) { 
        return message.channel.send("** <a:736257973906571306:1288205734080806912> انتهت الكمية**");
    }

    let logAcc;
    let buys = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL())
        .setImage(line)
        .setTimestamp()
        .addField(`> <a:dance:1287751022202064972> **Wow You Now Need Buy This Account ${account} :**`,
        `
        > <a:cs:1288204919912005663> **Account Need :** \`${numOfAcc}\`
        > <a:cs:1288204919912005663> **All Tax With Number :** \`${tax * numOfAcc}\`
        > <a:cs:1288204919912005663> **You only have 50 seconds to convert**
        > <a:cs:1288204919912005663> **Please make sure you are open** <a:736257973906571306:1288205734080806912>

        **To purchase, please copy and paste the command below => :**
        \`\`\`
        #credit <@${banks}> ${numOfAcc * tax}
        \`\`\`
        `)
        .setColor(color);

    message.channel.send({ embeds: [buys] }).then(msg => {

        const filter = ({ content, author: { id } }) => {
            return content.startsWith(`**:moneybag: | ${message.author.username}, has transferred `) &&
                   content.includes(`${banks}`) &&
                   id === probotid &&
                   (Number(content.slice(content.lastIndexOf("`") - String(tax * numOfAcc).length, content.lastIndexOf("`"))) >= price * numOfAcc);
        };

        message.channel.awaitMessages({
            filter,
            max: 1,
            time: 50_000,
            errors: ['time']
        }).then(msg => {
            const sentMail = emails.splice(0, numOfAcc);
            logAcc = sentMail;
            data[data.indexOf(accInDb)].emails = emails;
            db.set("accounts", data);

            // مسار الملف النصي حيث سيتم حفظ الحسابات
            const filePath = path.join(__dirname, `${account}_accounts_${message.author.username}.txt`);
            const fileContent = `Here are your ${numOfAcc} ${account} account${numOfAcc > 1 ? "s" : ""}:\n${sentMail.join("\n")}\n\n`;

            // كتابة الحسابات في الملف النصي
            fs.writeFile(filePath, fileContent, (err) => {
                if (err) {
                    console.error(err);
                    return message.channel.send("**حدث خطأ أثناء حفظ الحسابات في الملف.**");
                }

                // إرسال الملف النصي للمستخدم في الخاص
                message.author.send({
                    content: `**Hi ${message.author.tag}, here are your ${numOfAcc} ${account} account${numOfAcc > 1 ? "s" : ""}:**`,
                    files: [filePath]
                }).then(() => {
                    //message.reply(`<@${message.author.id}> **Check your DMs <a:040:1282828248807374890>**`);
                }).catch(err => {
                    console.error(err);
                    message.reply("**حدث خطأ أثناء إرسال الملف للمستخدم.**");
                });

                // إرسال رسالة للقناة بأن النيترو تم إرساله
                let embed = new Discord.MessageEmbed()
                    .setTitle("<a:dance:1287751022202064972> بعتلك النيترو خاص يا معلم")
                    .setColor(color);
                message.channel.send({ embeds: [embed] });

                msg.delete();
            });

        }).catch(err => {
            cooldown = false;
            console.log(err);
            msg.delete();
            message.reply("**Time is over, operation canceled <a:736257973906571306:1288205734080806912>**");
        });
    });

    !cooldown && (cooldown = true);

    cooldown && setTimeout(() => {
        cooldown = false;
    }, 60000);

    return;
}
      
    if (command === "setlog") { //setlog
      if (message.channel.type === "dm") return;
      if (!owner.includes(message.author.id))
        return;
      let ch =
        message.guild.channels.cache.find(ch =>
          ch.name.toLocaleLowerCase().includes(args[0])
        ) || message.guild.channels.cache.find(ch => ch.id === args[0]);
      if (!ch) return message.channel.send("> **Please select the room correctly **");
      db.set("ch", ch.id);
      message.channel.send("> ** The log room has been selected successfully <a:040:1288216161108103333>**");
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
     if (command === "setnotif") {
      if (message.channel.type === "dm") return;
      if (!owner.includes(message.author.id))
        return;
      let notif =
        message.guild.channels.cache.find(notif =>
          notif.name.toLocaleLowerCase().includes(args[0])
        ) || message.guild.channels.cache.find(notif => notif.id === args[0]);
      if (!notif) return message.channel.send("> **Please select the room correctly **");
      db.set("notif", notif.id);
      message.channel.send("> ** The notification room has been selected successfully <a:040:1288216161108103333>**");
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (command === "reslog") {
      if (message.channel.type === "dm") return;
      if (!owner.includes(message.author.id))
        return;
      let ch =
        message.guild.channels.cache.find(ch =>
          ch.name.toLocaleLowerCase().includes(args[0])
        ) || message.guild.channels.cache.find(ch => ch.id === args[0]);
      if (!ch) return message.channel.send("> **Please select the room correctly **");
      db.set("add", ch.id);
      message.channel.send("> ** The add log room has been selected successfully <a:040:1288216161108103333>**");
    }
    if (command === "user-add") {
      if (message.channel.type === "dm") return;
      if (owner[0] != message.author.id) return;
      let user =
        message.mentions.users.first() ||
        message.guild.members.cache.find(u => u.id === args[0]);

      if (!user)
        return message.channel.send("> **Please select the user correctly **");
      db.push("admins", user.id);
      updateAdmins()
      message.channel.send(`> **${user.tag} Added as an admin <a:040:1288216161108103333>**`);
    }
    if (command === "user-remove") {
      if (message.channel.type === "dm") return;
      if (owner[0] != message.author.id) return;
      let user =
        message.mentions.users.first() ||
        message.guild.members.cache.find(u => u.id === args[0]);

      if (!user)
        return message.channel.send("> **Please select the user correctly **");
      const filtered = db.get("admins").filter(ad => ad != user.id)
      db.set("admins", filtered);
      updateAdmins()
      message.channel.send(
        `> ** ${user.tag} has been removed from the admin list <a:040:1288216161108103333>**`
      );
    }
    if (command === "setprobot") {
      if (!owner.includes(message.author.id)) return;
      if (message.channel.type === "dm") return;
      if (!args[0])
        return message.channel.send("> **Please select the ID Probot correctly **");
      db.set("probot", args[0]);
      message.channel.send("> **<a:040:1288216161108103333> Probot has been successfully identified!**");
    }
    if (command === "setcustomerrole") {
      let custommer =
        message.guild.roles.cache.find(r =>
          r.name.toLocaleLowerCase().includes(args[0])
        ) || message.guild.roles.cache.find(r => r.id === args[0]);
      if (!custommer)
        return message.channel.send("> **Please select the customer roll correctly **");
      db.set("role", custommer.id);
      message.channel.send("> ** Customer roll selected successfully <a:040:1288216161108103333>**");
    }
  if (command === "stock") {
      if (message.channel.type === "dm") return;

      const accounts = db.get("accounts")


      let embed = new Discord.MessageEmbed()

                    .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setThumbnail(message.guild.iconURL())
        .setImage(line)
        .setTimestamp()
        .setColor(color);
        for (let { name, price, tax, emails } of accounts) {
       

        embed.addField(
          `<:emoji_3:1296914262131740713> **Product :** ${name || "N/A"}`,
          `
            <a:emoji_4:1296916461167706172> **Price :** \{\`${price}\`\}
            <:emoji_3:1296914262131740713> **Stock :** \{\`${emails.length}\`}\
            <:emoji_3:1296914262131740713> **To Buy:** \{\`${prefix}buy ${name}\`\}
            `
        )
      }




      message.channel.send({ embeds: [embed] }
      );
    }


    if (command === "setbuy") {
      if (message.channel.type === "dm") return;
      if (!owner.includes(message.author.id))
        return;
      let ch =
        message.guild.channels.cache.find(ch =>
          ch.name.toLocaleLowerCase().includes(args[0])
        ) ?.id || message.guild.channels.cache.find(ch => ch.id === args[0]) ?.id;
      args[0] === "all" && (ch = "all")
      if (!ch) return message.channel.send("> **Please select the room correctly **");
      db.set("buy", ch);
      message.channel.send("> ** The buy room has been selected successfully <a:040:1288216161108103333>**");

    }
    if (command.startsWith("remove-")) {
      const acc = command.split("-")[1]
      
      if (!owner.includes(message.author.id))
        return;
      if (message.channel.type === "dm") return;
      if (!args[0])
        return message.channel.send({
          embeds: [
            new Discord.MessageEmbed() 
              .setAuthor(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .addField(
                `> Error :`,
                `Usage : ${prefix}remove-${acc} \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
              )
            
              .setColor(color)
              .setTimestamp()
              .setTitle(`Remove ${acc} Account Command`)]
        }
        ); 
      const data = db.get("accounts"); 
      const account = data.find(el => el.name === acc)
      if (!account)
        return message.channel.send(`> **:x: There are no accounts in the stock! **`); 
      if (args[0] === "all") {
        data[data.indexOf(account)].emails.length = 0
        db.set("accounts", data)

        return message.channel.send(`> **All ${acc} accounts has been removed successfully <a:040:1288216161108103333>**`);

      }
      else if (!message.content.includes(":"))
        return message.channel.send({
          embeds: [
            new Discord.MessageEmbed()
              .setColor(color)
              .setDescription(`> usage : ${prefix}remove${acc} [adress:email]`)]
        }
        ); 
      const filtered = account.emails.filter(accs => accs !== args[0]);
      data[data.indexOf(account)].emails = filtered 
      db.set("accounts", data)
      message.channel.send(`> **account \`${args[0]}\`  has been removed successfully <a:040:1288216161108103333>**`);
    } 
    
    if (command.startsWith("display-")) {
      const account = command.split("-")[1]
    
      if (message.channel.type === "dm") return; 
      
      if (!owner.includes(message.author.id)) return; 
      const accounts = db.get("accounts") ?.find(el => el ?.name === account) ?.emails;
      const text =
        accounts && accounts[0]
          ? accounts.join("\n")
          : ` There are no ${account} accounts in your stock <a:736257973906571306:1288205734080806912>`; 
      message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setAuthor(
              message.author.username,
              message.author.displayAvatarURL({ dynamic: true })
            )
            .setTitle(`All ${account} accounts :`)
            .setDescription(`\`\`\`${text}\`\`\``)
            .setTimestamp().setColor(color)
        ]
      }
      );
    }
    if (command.startsWith("setcolor")) {
      if (!owner.includes(message.author.id)) return message.channel.send("**you are not an admin**")
      color = args[0].toUpperCase();
      message.channel.send(`**all embeds color was set to ${args[0].toUpperCase()}**`)
    }

    if (command === "restart") {
      if (!owner.includes(message.author.id)) return; 
      message.channel
        .send(`Restart is in progress...`)
        .then(() => client.destroy())
        .then(() => {
          message.channel.send("> ** The bot has been successfully restarted <a:040:1288216161108103333>**");
        });
    }
  }
  catch (err) {
    console.log(err.message)
  }
});






client.on("message", async message => {
  try {
    if (db.get("blacklist").includes(message.author.id)) return;
    let prefix = await db.get("prefix");
    if (message.content.startsWith(prefix + "setname")) {
      let args = message.content.split(" ");
      let botnameee = args.slice(1).join(" ");
      if (!owner.includes(message.author.id))
        return message.channel.send(`** <a:736257973906571306:1288205734080806912> Only Owners Can Use this Command **`);
      if (!botnameee)
        return message.channel.send(
          `** <a:736257973906571306:1288205734080806912> Please Provide me a name for the bot !**`
        );
      client.user.setUsername(`${botnameee}`);
      message.channel.send(`Changing The bot's Name ...`).then(me => {
        me.edit(` Done !`);
      });
    }
    if (message.content.startsWith(prefix + "setavatar")) {
      let args = message.content.split(" ");
      let botnameee = args.slice(1).join(" ");
      if (!owner.includes(message.author.id))
        return message.channel.send(`** <a:736257973906571306:1288205734080806912> Only Owners Can Use this Command **`);
      if (!botnameee)
        return message.channel.send(
          `** <a:736257973906571306:1288205734080806912> Please Provide me an avatar for the bot !**`
        );
      client.user.setAvatar(`${botnameee}`);
      message.channel.send(`Changing The bot's Avatar ...`).then(me => {
        me.edit(` Done !`);
      });
    }
  }
  catch (err) {
    console.log(err.message)

  }
});





client.on("message", async message => {
  try {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();
    let user =
      message.mentions.members.first() ||
      client.users.cache.find(u => u.id === args[0]);
    let blacklist = db.get("blacklist")
    if (message.channel.type === "dm") return;
    if (!db.get("admins").includes(message.author.id)) return;
    if (command === "blacklist") {

      if (!user)
        return message.channel.send("> **Please select the user correctly**");
      if (blacklist.includes(user.id))
        return message.channel.send("> **:x: The user is already in the list!**");
      db.push("blacklist", user.id)
      message.channel.send("> **The user has been added to the blacklist<a:040:1288216161108103333>**");
    }
    if (command === "unblacklist") {

      if (!user)
        return message.channel.send("> **Please select the user correctly**");
      if (!blacklist.includes(user.id))
        return message.channel.send("> **:x: The member is not in the list!**");
      const filtered = db.get("blacklist").filter(u => u != user.id)
      db.set("blacklist", filtered);
      message.channel.send("> **The user has been removed from the blacklist <a:040:1288216161108103333>**");
    }
    if (command === "resetblacklist") {

      db.set("blacklist", []);
      message.channel.send(
        "> ** All members have been removed from the blacklist <a:040:1288216161108103333>**"
      );
    }
  }
  catch (err) {
    console.log(err)
  }
});
client.login("MTI5NjIxMDQzMTMzNzE2ODk2OA.GSgql-.5bl-1SEW9LUwOFR0vxTVD26HUS34LPSNbIpTTk")