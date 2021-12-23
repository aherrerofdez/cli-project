console.log("Hello World");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you? ', name => {
    console.log(`Hey there ${name}!`);
    if(name.toLowerCase() == "ana") {
        readline.question('Where are you? ', place => {
            console.log(`WOW! ${place} is so cool!`);
            readline.close();
        });
    }
  });