const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1205175607160348713')
    .setType('STREAMING')
    .setURL('https://bit.ly/DSH-TK') //Must be a youtube video link 
    .setState('YouTuber-MoKa')
    .setName('MoKa-DreaMGames')
    .setDetails(`DreaMGames Community`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1119192838547189782/1218343181070897152/DGC_c.gif?ex=66075182&is=65f4dc82&hm=3534638aef61d5be0df3d4b7b85f6de034eda26296f265e70d8dcec700717ca8&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('DreaMGames Community') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1077716803435909232/1169543166999937024/Verification.png?ex=66052074&is=65f2ab74&hm=67a0cb0bb7296b43648c75f51798342fdab042bded588110a2f7c86df7c4fc30&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('MoKa-DreaMGames') //Text when you hover the Small image
    .addButton('FaceBook', 'https://www.facebook.com/momenibrahimfouad')
    .addButton('Youtube', 'https://www.youtube.com/channel/UCAbB5a2GyoxYC81fofHos9A');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `MoKa-DreaMGames`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
