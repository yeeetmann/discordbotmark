const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
    ],
});

const config = {
    users: [
        {
            userId: "205393892072357888", // User 1 ID
            triggerChannelId: "772212744404336642", // Channel that triggers move
            destinationChannelId: "1382433532085010594", // Where to move them
            nicknames: [ "💙 For Evigt BIF",
  "💛 BIF i Hjertet",
  "🔥 BIF Magi",
  "🏆 BIF Mesterholdet",
  "🦁 BIF Heltene fra Vestegnen",
  "📯 BIF Brølet der vækker sjælen",
  "🌟 BIF – Stjernen i vest",
  "💥 BIF Power uden grænser",
  "🥇 BIF – De Gule Krigere",
  "🫶 BIF For Livet og Lidt Til",
  "🔵 BIF Blodet flyder stærkt",
  "👑 BIF – Kongerne af Fodbold",
  "🚀 BIF Raketten vi hepper på",
  "🧱 BIF – Bygget af Stål og Hjerte",
  "🎶 BIF Synger Vi For Evigt",
  "🧡 BIF Fællesskab i Sol og Regn",
  "🎯 BIF Rammer Altid Hjertet",
  "🟡 BIF Kærlighed er Ægte",
  "💣 BIF – Klar Til Kamp",
  "🌈 BIF Farver vores Verden",
  "⚽ BIF – Fodbold med Sjæl",
  "👊 BIF – Stærkere Sammen",
  "🔥 BIF Ild i Hjerterne",
  "🛡️ BIF – Vores Stolthed",
  "🎇 BIF Gløder i Natten",
  "🏟️ BIF Stadiondrømme Lever",
  "💬 BIF – Altid med på Læberne",
  "🦅 BIF Flyver Højt",
  "🏅 BIF – Guld og Glorie",
  "🌀 BIF – Fanstormen",
  "🥶 BIF – Iskolde Nerver",
  "🎖️ BIF – Ære og Passion",
  "🔊 BIF – Vi Råber Dit Navn",
  "🔔 BIF Kalder Hver Søndag",
  "💫 BIF – Drømme og Realitet",
  "⏳ BIF – Tidens Hold",
  "🎤 BIF – Stemmen i Mørket",
  "🥁 BIF – Slaget i Hjertet",
  "💯 BIF 100% Ren Kærlighed",
  "🧢 BIF – Stilen fra Vestegnen",
  "🏁 BIF – Altid Mod Fremtiden",
  "📣 BIF – Ingen Kan Stoppe Os",
  "🫡 BIF – Trofast Til Slut",
  "🧬 BIF – I Vores DNA",
  "🛤️ BIF – Rødder og Vinger",
  "🎖️ BIF – Stjerner På Jorden",
  "🏔️ BIF – Hvor Drømme Fødes",
  "💡 BIF – Lyset i Mørket",
  "🧊 BIF – Cool og Klar",
  "🔒 BIF – Låst i Hjertet"], // Custom nicknames for this user
        },
        {
            userId: "3398122739401097226", // User 2 ID
            triggerChannelId: "772212744404336642",
            destinationChannelId: "1382433532085010594",
            nicknames: [ "💙 For Evigt BIF",
  "💛 BIF i Hjertet",
  "🔥 BIF Magi",
  "🏆 BIF Mesterholdet",
  "🦁 BIF Heltene fra Vestegnen",
  "📯 BIF Brølet der vækker sjælen",
  "🌟 BIF – Stjernen i vest",
  "💥 BIF Power uden grænser",
  "🥇 BIF – De Gule Krigere",
  "🫶 BIF For Livet og Lidt Til",
  "🔵 BIF Blodet flyder stærkt",
  "👑 BIF – Kongerne af Fodbold",
  "🚀 BIF Raketten vi hepper på",
  "🧱 BIF – Bygget af Stål og Hjerte",
  "🎶 BIF Synger Vi For Evigt",
  "🧡 BIF Fællesskab i Sol og Regn",
  "🎯 BIF Rammer Altid Hjertet",
  "🟡 BIF Kærlighed er Ægte",
  "💣 BIF – Klar Til Kamp",
  "🌈 BIF Farver vores Verden",
  "⚽ BIF – Fodbold med Sjæl",
  "👊 BIF – Stærkere Sammen",
  "🔥 BIF Ild i Hjerterne",
  "🛡️ BIF – Vores Stolthed",
  "🎇 BIF Gløder i Natten",
  "🏟️ BIF Stadiondrømme Lever",
  "💬 BIF – Altid med på Læberne",
  "🦅 BIF Flyver Højt",
  "🏅 BIF – Guld og Glorie",
  "🌀 BIF – Fanstormen",
  "🥶 BIF – Iskolde Nerver",
  "🎖️ BIF – Ære og Passion",
  "🔊 BIF – Vi Råber Dit Navn",
  "🔔 BIF Kalder Hver Søndag",
  "💫 BIF – Drømme og Realitet",
  "⏳ BIF – Tidens Hold",
  "🎤 BIF – Stemmen i Mørket",
  "🥁 BIF – Slaget i Hjertet",
  "💯 BIF 100% Ren Kærlighed",
  "🧢 BIF – Stilen fra Vestegnen",
  "🏁 BIF – Altid Mod Fremtiden",
  "📣 BIF – Ingen Kan Stoppe Os",
  "🫡 BIF – Trofast Til Slut",
  "🧬 BIF – I Vores DNA",
  "🛤️ BIF – Rødder og Vinger",
  "🎖️ BIF – Stjerner På Jorden",
  "🏔️ BIF – Hvor Drømme Fødes",
  "💡 BIF – Lyset i Mørket",
  "🧊 BIF – Cool og Klar",
  "🔒 BIF – Låst i Hjertet"],
        },
      
        // Add more users as needed
    ],

    // Global settings
    nicknameChangeInterval: 60000, // 60 seconds
    trollingEnabled: true,
};

let nicknameIntervals = [];

client.on("ready", () => {
    console.log(`✅ Bot is online: ${client.user.tag}`);
    if (config.trollingEnabled) startAllTrolling();
});

function startAllTrolling() {
    config.users.forEach((user) => {
        const interval = setInterval(() => {
            const guild = client.guilds.cache.first();
            const targetMember = guild?.members.cache.get(user.userId);

            if (targetMember && user.nicknames?.length > 0) {
                const randomName =
                    user.nicknames[
                        Math.floor(Math.random() * user.nicknames.length)
                    ];
                targetMember
                    .setNickname(randomName)
                    .then(() =>
                        console.log(
                            `🤪 Changed ${targetMember.user.tag}'s nickname`,
                        ),
                    )
                    .catch(console.error);
            }
        }, config.nicknameChangeInterval);

        nicknameIntervals.push(interval);
    });
}

client.on("voiceStateUpdate", (oldState, newState) => {
    if (!config.trollingEnabled) return;

    const userConfig = config.users.find(
        (u) => u.userId === newState.member?.id,
    );
    if (!userConfig) return;

    if (newState.channelId === userConfig.triggerChannelId) {
        newState.member.voice
            .setChannel(userConfig.destinationChannelId)
            .then(() => console.log(`🚀 Moved ${newState.member.displayName}`))
            .catch(console.error);
    }
});

client.on("messageCreate", (message) => {
    if (!config.users.some((u) => u.userId === message.author.id)) return;

    if (message.content === "!stop") {
        config.trollingEnabled = false;
        nicknameIntervals.forEach(clearInterval);
        message.reply("All trolling disabled! 😇");
    }

    if (message.content === "!start") {
        config.trollingEnabled = true;
        startAllTrolling();
        message.reply("Trolling re-enabled! 😈");
    }
});

client.login(process.env.DISCORD_TOKEN);
