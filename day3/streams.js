const fs = require('fs');

const readStream = fs.createReadStream('simple.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('New chunk received:');
  console.log(chunk);
});

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Writing line 1\n');
writeStream.write('Writing line 2\n');
writeStream.end(); 
