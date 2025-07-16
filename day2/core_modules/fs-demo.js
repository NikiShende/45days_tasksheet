const fs = require('fs');

fs.writeFileSync('example.txt', 'Hello, this is a file created using fs module.');


const content = fs.readFileSync('example.txt', 'utf-8');
console.log(content);
