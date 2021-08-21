const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });
const config = require('./config.json');

client.login({ clientId : config.ClientID }).catch(console.error); 

client.on('ready', () => {
console.log('Your presence works now check your discord profile :D')
client.request('SET_ACTIVITY', {
pid: process.pid,
activity: {
    details: config.Details,
    state: config.State,
    timestamps: {
        start: Date.now() + 5 * 60,
    },
assets: {
         large_image: config.LargeImage,
         large_text: config.LargeImageText,
         small_image: config.SmallImage,
         small_text: config.SmallImageText,
},
buttons : [
    {
        label : config.Button1,url : config.Url1
    },
    { 
        label : config.Button2,url : config.Url2
    },
    ]
    }
})
})