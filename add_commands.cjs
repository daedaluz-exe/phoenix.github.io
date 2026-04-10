const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const commandsToAdd = {
  "pk3": "ssh bandit0@bandit.labs.overthewire.org -p 2220",
  "p0t1": "ssh bandit0@bandit.labs.overthewire.org -p 2220",
  "p0t5a": "exercism download --exercise=hello-world --track=c",
  "p0t6a": "gcc scanner.c -o scanner && ./scanner <target_ip>",
  "p1w1a": "' OR 1=1--",
  "p1w2a": "<script>alert(1)</script>",
  "p2n2": "nmap -sC -sV -oA nmap_scan <target>",
  "p1p2": "nmap -sn 192.168.1.0/24",
  "p1p3": "ffuf -w /usr/share/wordlists/dirb/common.txt -u http://<target>/FUZZ",
  "p1s6a": "gdb -q ./binary",
  "p1s15a": "objdump -d bomb > bomb.asm",
  "p3bw3": "frida -U -f com.example.app -l script.js --no-pause",
  "p2b14": "afl-gcc -o vulnerable vulnerable.c && afl-fuzz -i in -o out ./vulnerable @@",
  "p1s9a": "gcc shell.c -o myshell && ./myshell",
  "p2n3": "sudo tcpdump -i eth0 -w capture.pcap",
  "p1w8a": "curl -x http://127.0.0.1:8080 -k https://<target>",
  "p1w11a": "ssh natas0@natas.labs.overthewire.org -p 2220",
  "p1s6": "ssh leviathan0@leviathan.labs.overthewire.org -p 2223",
  "p1s7": "ssh narnia0@narnia.labs.overthewire.org -p 2226",
  "p1c5": "ssh krypton1@krypton.labs.overthewire.org -p 2231",
  "p2b9": "ssh behemoth0@behemoth.labs.overthewire.org -p 2221",
  "p2b13": "make menuconfig && make -j$(nproc)",
  "p3b0a": "make -C /lib/modules/$(uname -r)/build M=$(pwd) modules"
};

// We need to parse the PHASES array from the HTML, update it, and write it back.
const scriptMatch = html.match(/PHASES:\s*(\[[\s\S]*?\]),\n\s*ACHIEVEMENTS:/);
if (scriptMatch) {
  let phases = JSON.parse(scriptMatch[1]);
  phases.forEach(phase => {
    phase.quests.forEach(q => {
      if (commandsToAdd[q.id]) {
        q.command = commandsToAdd[q.id];
      }
    });
  });
  
  html = html.replace(scriptMatch[1], JSON.stringify(phases, null, 4));
  fs.writeFileSync('index.html', html);
  console.log("Commands added successfully.");
} else {
  console.log("Could not find PHASES array.");
}
