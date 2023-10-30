const http = require('http');
const axios = require('axios');
const os = require('os');

const server = http.createServer(async (req, res) => 
{
    const ip = await axios.get('https://api.ipify.org?format=json').then((response) => response.data.ip);
    const pcname = os.hostname;
    console.log(`IP Address: ${ip} || PC Name: ${pcname}`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`server started.`);
});
