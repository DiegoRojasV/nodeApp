var os = require('os');

var message = 'acá hay un poco de información de tu sistema';

var sysarray = new Array('Type: '+ os.type(),
						 'Node Versión: '+ process.version,
						 'Plataforma: '+ os.platform(),
						 'Hostname: '+ os.hostname(),
						 'Memoria total: '+ os.totalmem(),
						 'Memoria libre: '+ os.freemem(),
						 'Uptime: '+ os.uptime()
						);
console.log(message);

var arraylen = sysarray.length;

i= 0;

while(i < arraylen){
	console.log(sysarray[i]);
	i++;
}