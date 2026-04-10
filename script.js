
const PHOENIX_DATA = {
  RANKS: [
    { name: "Initiate", minXP: 0, icon: "🥚" },
    { name: "Novice", minXP: 100, icon: "🐣" },
    { name: "Apprentice", minXP: 300, icon: "🐥" },
    { name: "Journeyman", minXP: 600, icon: "🦅" },
    { name: "Expert", minXP: 1000, icon: "🔥" },
    { name: "Master", minXP: 1500, icon: "🐉" },
    { name: "Grandmaster", minXP: 2500, icon: "👑" },
    { name: "Legend", minXP: 4000, icon: "🌟" },
    { name: "Mythic", minXP: 6000, icon: "🌌" },
    { name: "Phoenix", minXP: 10000, icon: "🐦‍🔥" }
  ],
  BRANCHES: {
    "SYSTEMS": {
        "name": "Systems Programming",
        "icon": "terminal",
        "color": "blue"
    },
    "NETWORK": {
        "name": "Networking",
        "icon": "router",
        "color": "green"
    },
    "WEB": {
        "name": "Web Exploitation",
        "icon": "language",
        "color": "purple"
    },
    "CRYPTO": {
        "name": "Cryptography",
        "icon": "key",
        "color": "yellow"
    },
    "RE": {
        "name": "Reverse Engineering",
        "icon": "memory",
        "color": "red"
    },
    "BINARY": {
        "name": "Binary Exploitation",
        "icon": "bug_report",
        "color": "orange"
    },
    "PYTHON": {
        "name": "Python Tooling",
        "icon": "code",
        "color": "teal"
    },
    "RECON": {
        "name": "Recon & OSINT",
        "icon": "public",
        "color": "cyan"
    },
    "WINDOWS": {
        "name": "Windows & AD",
        "icon": "window",
        "color": "indigo"
    }
  },
  PHASES: [
    {
        "id": "phase0",
        "title": "Phase 0: Rust Removal & Re-Ignition",
        "description": "Establishing the baseline.",
        "quests": [
            {
                "id": "pk1",
                "track": "SYSTEMS",
                "title": "CS50 Weeks 0-5",
                "description": "CS50 Weeks 0-5",
                "xp": 15
            },
            {
                "id": "pk2",
                "track": "SYSTEMS",
                "title": "K.N. King through Ch.14",
                "description": "K.N. King through Ch.14",
                "xp": 15
            },
            {
                "id": "pk3",
                "track": "SYSTEMS",
                "title": "OverTheWire Bandit x2",
                "description": "OverTheWire Bandit x2",
                "xp": 15
            },
            {
                "id": "pk4",
                "track": "NETWORK",
                "title": "Networking Theory (Above Physical Layer)",
                "description": "Networking Theory (Above Physical Layer)",
                "xp": 10
            },
            {
                "id": "pk5",
                "track": "SYSTEMS",
                "title": "Bash Scripting Basics",
                "description": "Bash Scripting Basics",
                "xp": 10
            },
            {
                "id": "pk6",
                "track": "SYSTEMS",
                "title": "Ted Jensen Pointers & Arrays",
                "description": "Ted Jensen Pointers & Arrays",
                "xp": 10
            },
            {
                "id": "p0t1",
                "track": "SYSTEMS",
                "title": "OverTheWire Bandit Speedrun",
                "description": "OverTheWire Bandit Speedrun",
                "xp": 15
            },
            {
                "id": "p0t12",
                "track": "SYSTEMS",
                "title": "Payment Gateway Setup (Wise Account)",
                "description": "Payment Gateway Setup (Wise Account)",
                "xp": 10
            },
            {
                "id": "p0t2a",
                "track": "WEB",
                "title": "HTB Academy: Linux/Networking Basics",
                "description": "HTB Academy: Linux/Networking Basics",
                "xp": 10
            },
            {
                "id": "p0t2b",
                "track": "WEB",
                "title": "HTB Academy: Web Enumeration",
                "description": "HTB Academy: Web Enumeration",
                "xp": 10
            },
            {
                "id": "p0t3a",
                "track": "WEB",
                "title": "PicoCTF: First 5 Web Challenges",
                "description": "PicoCTF: First 5 Web Challenges",
                "xp": 5
            },
            {
                "id": "p0t3b",
                "track": "BINARY",
                "title": "PicoCTF: First 5 Binary/RE Challenges",
                "description": "PicoCTF: First 5 Binary/RE Challenges",
                "xp": 5
            },
            {
                "id": "p0t3c",
                "track": "SYSTEMS",
                "title": "PicoCTF: 5 General Skills Challenges",
                "description": "PicoCTF: 5 General Skills Challenges",
                "xp": 5
            },
            {
                "id": "p0t4a",
                "track": "BINARY",
                "title": "LiveOverflow: Eps 0x01 to 0x03 (Architecture)",
                "description": "LiveOverflow: Eps 0x01 to 0x03 (Architecture)",
                "xp": 5
            },
            {
                "id": "p0t4b",
                "track": "BINARY",
                "title": "LiveOverflow: Eps 0x04 to 0x06 (Assembly)",
                "description": "LiveOverflow: Eps 0x04 to 0x06 (Assembly)",
                "xp": 5
            },
            {
                "id": "p0t4c",
                "track": "BINARY",
                "title": "LiveOverflow: Eps 0x07 to 0x0A (Memory/GDB)",
                "description": "LiveOverflow: Eps 0x07 to 0x0A (Memory/GDB)",
                "xp": 5
            },
            {
                "id": "p0t5a",
                "track": "SYSTEMS",
                "title": "Exercism C: Exercises 1-5",
                "description": "Exercism C: Exercises 1-5",
                "xp": 5
            },
            {
                "id": "p0t5b",
                "track": "SYSTEMS",
                "title": "Exercism C: Exercises 6-10",
                "description": "Exercism C: Exercises 6-10",
                "xp": 5
            },
            {
                "id": "p0t5c",
                "track": "SYSTEMS",
                "title": "Exercism C: Exercises 11-15",
                "description": "Exercism C: Exercises 11-15",
                "xp": 5
            },
            {
                "id": "p0t5d",
                "track": "SYSTEMS",
                "title": "Exercism C: Exercises 16-20",
                "description": "Exercism C: Exercises 16-20",
                "xp": 5
            },
            {
                "id": "p0t6a",
                "track": "SYSTEMS",
                "title": "C Port Scanner: Core Sockets & Connections",
                "description": "C Port Scanner: Core Sockets & Connections",
                "xp": 10
            },
            {
                "id": "p0t6b",
                "track": "SYSTEMS",
                "title": "C Port Scanner: Argument Parsing & Loop Iteration",
                "description": "C Port Scanner: Argument Parsing & Loop Iteration",
                "xp": 10
            },
            {
                "id": "p0t7a",
                "track": "SYSTEMS",
                "title": "CS50 Week 4 (Memory & Pointers)",
                "description": "CS50 Week 4 (Memory & Pointers)",
                "xp": 5
            },
            {
                "id": "p0t7b",
                "track": "SYSTEMS",
                "title": "CS50 Week 5 (Data Structures)",
                "description": "CS50 Week 5 (Data Structures)",
                "xp": 5
            }
        ]
    },
    {
        "id": "phase1",
        "title": "Phase 1: The Multi-Track Offensive",
        "description": "Building core competencies.",
        "quests": [
            {
                "id": "p1w1a",
                "track": "WEB",
                "title": "PortSwigger SQLi: Theory & Data Retrieval",
                "description": "PortSwigger SQLi: Theory & Data Retrieval",
                "xp": 10
            },
            {
                "id": "p1w1b",
                "track": "WEB",
                "title": "PortSwigger SQLi: Blind & Advanced",
                "description": "PortSwigger SQLi: Blind & Advanced",
                "xp": 10
            },
            {
                "id": "p1w2a",
                "track": "WEB",
                "title": "PortSwigger XSS: Reflected & Stored",
                "description": "PortSwigger XSS: Reflected & Stored",
                "xp": 10
            },
            {
                "id": "p1w2b",
                "track": "WEB",
                "title": "PortSwigger XSS: DOM-Based",
                "description": "PortSwigger XSS: DOM-Based",
                "xp": 10
            },
            {
                "id": "p1w3",
                "track": "WEB",
                "title": "PortSwigger: Authentication (All Apprentice)",
                "description": "PortSwigger: Authentication (All Apprentice)",
                "xp": 15
            },
            {
                "id": "p1w4",
                "track": "WEB",
                "title": "PortSwigger: Directory Traversal + Access Control",
                "description": "PortSwigger: Directory Traversal + Access Control",
                "xp": 15
            },
            {
                "id": "p1w5",
                "track": "WEB",
                "title": "PortSwigger: CSRF + SSRF (Apprentice)",
                "description": "PortSwigger: CSRF + SSRF (Apprentice)",
                "xp": 15
            },
            {
                "id": "p1w6",
                "track": "WEB",
                "title": "HTB Academy OWASP Module (Free Alt to THM)",
                "description": "HTB Academy OWASP Module (Free Alt to THM)",
                "xp": 15
            },
            {
                "id": "p1w7",
                "track": "RECON",
                "title": "NahamSec Recon Playlist (Watch All)",
                "description": "NahamSec Recon Playlist (Watch All)",
                "xp": 10
            },
            {
                "id": "p1w8a",
                "track": "WEB",
                "title": "Burp Suite: Proxy & Repeater Mastery",
                "description": "Burp Suite: Proxy & Repeater Mastery",
                "xp": 10
            },
            {
                "id": "p1w8b",
                "track": "WEB",
                "title": "Burp Suite: Intruder & Automation",
                "description": "Burp Suite: Intruder & Automation",
                "xp": 10
            },
            {
                "id": "p1w9a",
                "track": "WEB",
                "title": "PortSwigger: Practitioner Labs (SQLi)",
                "description": "PortSwigger: Practitioner Labs (SQLi)",
                "xp": 15
            },
            {
                "id": "p1w9b",
                "track": "WEB",
                "title": "PortSwigger: Practitioner Labs (XSS, SSRF)",
                "description": "PortSwigger: Practitioner Labs (XSS, SSRF)",
                "xp": 15
            },
            {
                "id": "p1w10",
                "track": "WEB",
                "title": "PortSwigger: Deserialization + File Upload",
                "description": "PortSwigger: Deserialization + File Upload",
                "xp": 20
            },
            {
                "id": "p1w11a",
                "track": "WEB",
                "title": "OverTheWire: Natas (Levels 0-15)",
                "description": "OverTheWire: Natas (Levels 0-15)",
                "xp": 15
            },
            {
                "id": "p1w11b",
                "track": "WEB",
                "title": "OverTheWire: Natas (Levels 16-34)",
                "description": "OverTheWire: Natas (Levels 16-34)",
                "xp": 15
            },
            {
                "id": "p1w12",
                "track": "WEB",
                "title": "IppSec HTB Walkthroughs (10+ Web-Focused)",
                "description": "IppSec HTB Walkthroughs (10+ Web-Focused)",
                "xp": 15
            },
            {
                "id": "p1w13",
                "track": "WEB",
                "title": "WAHH: Read Targeted Chapters (SQLi, Auth, XSS)",
                "description": "WAHH: Read Targeted Chapters (SQLi, Auth, XSS)",
                "xp": 10
            },
            {
                "id": "p1w14",
                "track": "WEB",
                "title": "PortSwigger: Expert Labs (Attempt All)",
                "description": "PortSwigger: Expert Labs (Attempt All)",
                "xp": 35
            },
            {
                "id": "p1w15",
                "track": "WEB",
                "title": "NahamSec Beginner Bug Bounty Course",
                "description": "NahamSec Beginner Bug Bounty Course",
                "xp": 15
            },
            {
                "id": "p1w16",
                "track": "RECON",
                "title": "Jason Haddix: Bug Hunter Methodology Talk",
                "description": "Jason Haddix: Bug Hunter Methodology Talk",
                "xp": 10
            },
            {
                "id": "p1w17",
                "track": "WEB",
                "title": "Select 2-3 Bug Bounty Programs",
                "description": "Select 2-3 Bug Bounty Programs",
                "xp": 10
            },
            {
                "id": "p1w18",
                "track": "WEB",
                "title": "Submit First Bug Bounty Reports",
                "description": "Submit First Bug Bounty Reports",
                "xp": 25
            },
            {
                "id": "p1w19",
                "track": "WEB",
                "title": "Study 20+ Disclosed HackerOne Reports",
                "description": "Study 20+ Disclosed HackerOne Reports",
                "xp": 15
            },
            {
                "id": "p1w20a",
                "track": "WEB",
                "title": "Intigriti/HackerOne CTF Challenges (1-2)",
                "description": "Intigriti/HackerOne CTF Challenges (1-2)",
                "xp": 10
            },
            {
                "id": "p1w20b",
                "track": "WEB",
                "title": "Intigriti/HackerOne CTF Challenges (3+)",
                "description": "Intigriti/HackerOne CTF Challenges (3+)",
                "xp": 10
            },
            {
                "id": "p1s1a",
                "track": "SYSTEMS",
                "title": "Project: C CLI Password Manager (Core Structs)",
                "description": "Project: C CLI Password Manager (Core Structs)",
                "xp": 10
            },
            {
                "id": "p1s1b",
                "track": "SYSTEMS",
                "title": "Project: C CLI Password Manager (File I/O)",
                "description": "Project: C CLI Password Manager (File I/O)",
                "xp": 15
            },
            {
                "id": "p1s2a",
                "track": "SYSTEMS",
                "title": "Project: C TCP Chat Server (Sockets & Binding)",
                "description": "Project: C TCP Chat Server (Sockets & Binding)",
                "xp": 15
            },
            {
                "id": "p1s2b",
                "track": "SYSTEMS",
                "title": "Project: C TCP Chat Server (Concurrency/Select)",
                "description": "Project: C TCP Chat Server (Concurrency/Select)",
                "xp": 15
            },
            {
                "id": "p1s3a",
                "track": "SYSTEMS",
                "title": "Project: C HTTP Server (Parsing Headers)",
                "description": "Project: C HTTP Server (Parsing Headers)",
                "xp": 15
            },
            {
                "id": "p1s3b",
                "track": "SYSTEMS",
                "title": "Project: C HTTP Server (Serving Files)",
                "description": "Project: C HTTP Server (Serving Files)",
                "xp": 15
            },
            {
                "id": "p1s4a",
                "track": "SYSTEMS",
                "title": "Exercism C Track (21-30)",
                "description": "Exercism C Track (21-30)",
                "xp": 10
            },
            {
                "id": "p1s4b",
                "track": "SYSTEMS",
                "title": "Exercism C Track (31-40+)",
                "description": "Exercism C Track (31-40+)",
                "xp": 10
            },
            {
                "id": "p1s5",
                "track": "SYSTEMS",
                "title": "Jacob Sorber C Videos (10+)",
                "description": "Jacob Sorber C Videos (10+)",
                "xp": 10
            },
            {
                "id": "p1s6",
                "track": "SYSTEMS",
                "title": "OverTheWire: Leviathan (All Levels)",
                "description": "OverTheWire: Leviathan (All Levels)",
                "xp": 15
            },
            {
                "id": "p1s6a",
                "track": "BINARY",
                "title": "GDB-Pwndbg/GEF Crash Course",
                "description": "GDB-Pwndbg/GEF Crash Course",
                "xp": 15
            },
            {
                "id": "p1s6b",
                "track": "BINARY",
                "title": "Process Memory Layout Deep Dive",
                "description": "Process Memory Layout Deep Dive",
                "xp": 15
            },
            {
                "id": "p1s6c",
                "track": "BINARY",
                "title": "ELF Format & Linking Basics",
                "description": "ELF Format & Linking Basics",
                "xp": 15
            },
            {
                "id": "p1s7",
                "track": "BINARY",
                "title": "OverTheWire: Narnia (First 5 Levels)",
                "description": "OverTheWire: Narnia (First 5 Levels)",
                "xp": 20
            },
            {
                "id": "p1s8",
                "track": "SYSTEMS",
                "title": "HackTricks Linux PrivEsc (Free Alt to THM)",
                "description": "HackTricks Linux PrivEsc (Free Alt to THM)",
                "xp": 15
            },
            {
                "id": "p1s9a",
                "track": "SYSTEMS",
                "title": "Project: Build Shell in C (Parsing Input)",
                "description": "Project: Build Shell in C (Parsing Input)",
                "xp": 15
            },
            {
                "id": "p1s9b",
                "track": "SYSTEMS",
                "title": "Project: Build Shell in C (Fork/Exec/Pipes)",
                "description": "Project: Build Shell in C (Fork/Exec/Pipes)",
                "xp": 20
            },
            {
                "id": "p1s10",
                "track": "SYSTEMS",
                "title": "LiveOverflow Linux/Syscall Videos (5+)",
                "description": "LiveOverflow Linux/Syscall Videos (5+)",
                "xp": 10
            },
            {
                "id": "p1s10a",
                "track": "SYSTEMS",
                "title": "OSTEP: Virtual Memory Chapters (Ch 12-20)",
                "description": "OSTEP: Virtual Memory Chapters (Ch 12-20)",
                "xp": 25
            },
            {
                "id": "p1s11a",
                "track": "BINARY",
                "title": "Pwn.College: Program Interaction (1-5)",
                "description": "Pwn.College: Program Interaction (1-5)",
                "xp": 10
            },
            {
                "id": "p1s11b",
                "track": "BINARY",
                "title": "Pwn.College: Program Interaction (6-10)",
                "description": "Pwn.College: Program Interaction (6-10)",
                "xp": 10
            },
            {
                "id": "p1s12a",
                "track": "BINARY",
                "title": "Pwn.College: Assembly Crash Course (1-10)",
                "description": "Pwn.College: Assembly Crash Course (1-10)",
                "xp": 15
            },
            {
                "id": "p1s12b",
                "track": "BINARY",
                "title": "Pwn.College: Assembly Crash Course (11-20)",
                "description": "Pwn.College: Assembly Crash Course (11-20)",
                "xp": 15
            },
            {
                "id": "p1s13",
                "track": "BINARY",
                "title": "Hacking: Art of Exploitation Ch 1-3",
                "description": "Hacking: Art of Exploitation Ch 1-3",
                "xp": 15
            },
            {
                "id": "p1s14",
                "track": "BINARY",
                "title": "Microcorruption CTF (First 8 Levels)",
                "description": "Microcorruption CTF (First 8 Levels)",
                "xp": 25
            },
            {
                "id": "p1s15",
                "track": "BINARY",
                "title": "Nightmare Intro Sections",
                "description": "Nightmare Intro Sections",
                "xp": 15
            },
            {
                "id": "p1s15a",
                "track": "BINARY",
                "title": "CSAPP Bomb Lab",
                "description": "CSAPP Bomb Lab",
                "xp": 25
            },
            {
                "id": "p1p1",
                "track": "PYTHON",
                "title": "TCM Security Python 101 (YouTube Free)",
                "description": "TCM Security Python 101 (YouTube Free)",
                "xp": 15
            },
            {
                "id": "p1p2",
                "track": "PYTHON",
                "title": "Project: Subnet Scanner in Python",
                "description": "Project: Subnet Scanner in Python",
                "xp": 20
            },
            {
                "id": "p1p3",
                "track": "PYTHON",
                "title": "Project: Directory Brute-Forcer in Python",
                "description": "Project: Directory Brute-Forcer in Python",
                "xp": 20
            },
            {
                "id": "p1p4",
                "track": "PYTHON",
                "title": "Project: Rewrite a Public Exploit PoC",
                "description": "Project: Rewrite a Public Exploit PoC",
                "xp": 20
            },
            {
                "id": "p1p5",
                "track": "PYTHON",
                "title": "Automate 3+ Manual Tasks in Python",
                "description": "Automate 3+ Manual Tasks in Python",
                "xp": 15
            },
            {
                "id": "p1c1",
                "track": "CRYPTO",
                "title": "CryptoHack: Introduction",
                "description": "CryptoHack: Introduction",
                "xp": 15
            },
            {
                "id": "p1c2",
                "track": "CRYPTO",
                "title": "CryptoHack: Symmetric Ciphers",
                "description": "CryptoHack: Symmetric Ciphers",
                "xp": 20
            },
            {
                "id": "p1c3",
                "track": "CRYPTO",
                "title": "CryptoHack: RSA Challenges",
                "description": "CryptoHack: RSA Challenges",
                "xp": 20
            },
            {
                "id": "p1c4",
                "track": "CRYPTO",
                "title": "CryptoHack: Diffie-Hellman",
                "description": "CryptoHack: Diffie-Hellman",
                "xp": 20
            },
            {
                "id": "p1c5",
                "track": "CRYPTO",
                "title": "OverTheWire: Krypton (All Levels)",
                "description": "OverTheWire: Krypton (All Levels)",
                "xp": 15
            },
            {
                "id": "p1ctf1",
                "track": "WEB",
                "title": "PicoCTF: 20+ Challenges Across Categories",
                "description": "PicoCTF: 20+ Challenges Across Categories",
                "xp": 20
            },
            {
                "id": "p1ctf2",
                "track": "WEB",
                "title": "VulnHub: Kioptrix Series (5 VMs)",
                "description": "VulnHub: Kioptrix Series (5 VMs)",
                "xp": 20
            },
            {
                "id": "p1ctf3",
                "track": "WEB",
                "title": "Hack The Box: Starting Point (All Tiers)",
                "description": "Hack The Box: Starting Point (All Tiers)",
                "xp": 20
            },
            {
                "id": "p1ctf4",
                "track": "WEB",
                "title": "Hack The Box: 3+ Easy Machines",
                "description": "Hack The Box: 3+ Easy Machines",
                "xp": 25
            },
            {
                "id": "p1ctf5",
                "track": "WEB",
                "title": "Enter 1 Live CTF Event (CTFtime.org)",
                "description": "Enter 1 Live CTF Event (CTFtime.org)",
                "xp": 25
            },
            {
                "id": "p1ctf6",
                "track": "WEB",
                "title": "Write 10+ Challenge Writeups",
                "description": "Write 10+ Challenge Writeups",
                "xp": 20
            },
            {
                "id": "p1ctf7",
                "track": "WEB",
                "title": "BUUCTF: Complete 15+ Easy Challenges",
                "description": "BUUCTF: Complete 15+ Easy Challenges",
                "xp": 15
            }
        ]
    },
    {
        "id": "phase2",
        "title": "Phase 2: Deepening & Specialization",
        "description": "Applying knowledge.",
        "quests": [
            {
                "id": "p2b1a",
                "track": "BINARY",
                "title": "Pwn.College: Shellcode Injection (1-10)",
                "description": "Pwn.College: Shellcode Injection (1-10)",
                "xp": 15
            },
            {
                "id": "p2b1b",
                "track": "BINARY",
                "title": "Pwn.College: Shellcode Injection (11-20)",
                "description": "Pwn.College: Shellcode Injection (11-20)",
                "xp": 15
            },
            {
                "id": "p2b2",
                "track": "BINARY",
                "title": "Pwn.College: Sandboxing Module",
                "description": "Pwn.College: Sandboxing Module",
                "xp": 25
            },
            {
                "id": "p2b3",
                "track": "RE",
                "title": "Pwn.College: Reverse Engineering Module",
                "description": "Pwn.College: Reverse Engineering Module",
                "xp": 25
            },
            {
                "id": "p2b4",
                "track": "BINARY",
                "title": "Nightmare: Stack Exploitation Section",
                "description": "Nightmare: Stack Exploitation Section",
                "xp": 25
            },
            {
                "id": "p2b5",
                "track": "BINARY",
                "title": "Nightmare: Format String Section",
                "description": "Nightmare: Format String Section",
                "xp": 25
            },
            {
                "id": "p2b6",
                "track": "BINARY",
                "title": "Nightmare: Heap Exploitation Section",
                "description": "Nightmare: Heap Exploitation Section",
                "xp": 30
            },
            {
                "id": "p2b7",
                "track": "BINARY",
                "title": "ROP Emporium (All 8 Challenges)",
                "description": "ROP Emporium (All 8 Challenges)",
                "xp": 30
            },
            {
                "id": "p2b8",
                "track": "BINARY",
                "title": "OverTheWire: Narnia (Complete All)",
                "description": "OverTheWire: Narnia (Complete All)",
                "xp": 15
            },
            {
                "id": "p2b9",
                "track": "BINARY",
                "title": "OverTheWire: Behemoth (All Levels)",
                "description": "OverTheWire: Behemoth (All Levels)",
                "xp": 25
            },
            {
                "id": "p2b10",
                "track": "BINARY",
                "title": "Hacking: Art of Exploitation — Finish Book",
                "description": "Hacking: Art of Exploitation — Finish Book",
                "xp": 20
            },
            {
                "id": "p2b11",
                "track": "BINARY",
                "title": "HTB: 10+ Pwn Challenges (Easy→Medium)",
                "description": "HTB: 10+ Pwn Challenges (Easy→Medium)",
                "xp": 25
            },
            {
                "id": "p2b12",
                "track": "BINARY",
                "title": "Read glibc malloc.c Source Code",
                "description": "Read glibc malloc.c Source Code",
                "xp": 25
            },
            {
                "id": "p2b13",
                "track": "SYSTEMS",
                "title": "Compile Linux Kernel From Source (Once)",
                "description": "Compile Linux Kernel From Source (Once)",
                "xp": 20
            },
            {
                "id": "p2b14",
                "track": "BINARY",
                "title": "Fuzzing 101 by Antonio Morales (AFL++)",
                "description": "Fuzzing 101 by Antonio Morales (AFL++)",
                "xp": 25
            },
            {
                "id": "p2b15",
                "track": "BINARY",
                "title": "Patch Diffing: Analyze 1 CVE/Week",
                "description": "Patch Diffing: Analyze 1 CVE/Week",
                "xp": 20
            },
            {
                "id": "p2b16",
                "track": "BINARY",
                "title": "CodeQL or Semgrep on Open Source Project",
                "description": "CodeQL or Semgrep on Open Source Project",
                "xp": 20
            },
            {
                "id": "p2b17",
                "track": "BINARY",
                "title": "Reproduce 3 Linux Kernel CVEs with Public PoCs",
                "description": "Reproduce 3 Linux Kernel CVEs with Public PoCs",
                "xp": 30
            },
            {
                "id": "p2r1",
                "track": "RE",
                "title": "Malware Unicorn RE101 Workshop",
                "description": "Malware Unicorn RE101 Workshop",
                "xp": 20
            },
            {
                "id": "p2r2",
                "track": "RE",
                "title": "Malware Unicorn RE102 Workshop",
                "description": "Malware Unicorn RE102 Workshop",
                "xp": 20
            },
            {
                "id": "p2r3",
                "track": "RE",
                "title": "Challenges.re: 30+ Practice Problems",
                "description": "Challenges.re: 30+ Practice Problems",
                "xp": 20
            },
            {
                "id": "p2r4",
                "track": "RE",
                "title": "CrackMes.one: 10+ Easy→Medium",
                "description": "CrackMes.one: 10+ Easy→Medium",
                "xp": 20
            },
            {
                "id": "p2r5",
                "track": "RE",
                "title": "HTB: 10+ RE Challenges",
                "description": "HTB: 10+ RE Challenges",
                "xp": 25
            },
            {
                "id": "p2r6",
                "track": "RE",
                "title": "Learn Ghidra Proficiently",
                "description": "Learn Ghidra Proficiently",
                "xp": 20
            },
            {
                "id": "p2r7",
                "track": "RE",
                "title": "OALabs Malware Analysis Videos (10+)",
                "description": "OALabs Malware Analysis Videos (10+)",
                "xp": 15
            },
            {
                "id": "p2r8",
                "track": "RE",
                "title": "看雪 (Kanxue): Browse 5+ RE/Binary Solutions",
                "description": "看雪 (Kanxue): Browse 5+ RE/Binary Solutions",
                "xp": 15
            },
            {
                "id": "p2w1",
                "track": "WINDOWS",
                "title": "HTB Academy: Windows Fundamentals (Free)",
                "description": "HTB Academy: Windows Fundamentals (Free)",
                "xp": 15
            },
            {
                "id": "p2w2",
                "track": "WINDOWS",
                "title": "TCM Security YouTube: AD Attack Videos (Free)",
                "description": "TCM Security YouTube: AD Attack Videos (Free)",
                "xp": 15
            },
            {
                "id": "p2w3",
                "track": "WINDOWS",
                "title": "HackTricks AD Methodology (Complete Read)",
                "description": "HackTricks AD Methodology (Complete Read)",
                "xp": 25
            },
            {
                "id": "p2w4",
                "track": "WINDOWS",
                "title": "GOAD Lab: Game of Active Directory",
                "description": "GOAD Lab: Game of Active Directory",
                "xp": 30
            },
            {
                "id": "p2w5",
                "track": "WINDOWS",
                "title": "HTB: 5+ Easy Windows Machines",
                "description": "HTB: 5+ Easy Windows Machines",
                "xp": 25
            },
            {
                "id": "p2w6",
                "track": "WINDOWS",
                "title": "IppSec Windows Walkthroughs (10+)",
                "description": "IppSec Windows Walkthroughs (10+)",
                "xp": 15
            },
            {
                "id": "p2w7",
                "track": "WINDOWS",
                "title": "Orange Cyberdefense AD Mindmap",
                "description": "Orange Cyberdefense AD Mindmap",
                "xp": 10
            },
            {
                "id": "p2n1",
                "track": "NETWORK",
                "title": "Chris Greer Wireshark YouTube Series",
                "description": "Chris Greer Wireshark YouTube Series",
                "xp": 15
            },
            {
                "id": "p2n2",
                "track": "NETWORK",
                "title": "HTB Academy: Nmap Module",
                "description": "HTB Academy: Nmap Module",
                "xp": 10
            },
            {
                "id": "p2n3",
                "track": "NETWORK",
                "title": "Project: Build a Packet Sniffer in C",
                "description": "Project: Build a Packet Sniffer in C",
                "xp": 30
            },
            {
                "id": "p2n4",
                "track": "NETWORK",
                "title": "Wireshark: Analyze Your Own CTF Traffic",
                "description": "Wireshark: Analyze Your Own CTF Traffic",
                "xp": 15
            },
            {
                "id": "p2n5",
                "track": "NETWORK",
                "title": "TCP/IP Illustrated — Ch 1-4, 12-14, 17-18 ONLY",
                "description": "TCP/IP Illustrated — Ch 1-4, 12-14, 17-18 ONLY",
                "xp": 15
            },
            {
                "id": "p2bb1",
                "track": "WEB",
                "title": "Hunt 6-8 Hours/Week on Selected Programs",
                "description": "Hunt 6-8 Hours/Week on Selected Programs",
                "xp": 30
            },
            {
                "id": "p2bb2",
                "track": "RECON",
                "title": "Join Bug Bounty Discord Communities",
                "description": "Join Bug Bounty Discord Communities",
                "xp": 10
            },
            {
                "id": "p2bb3",
                "track": "WEB",
                "title": "First Valid Bug Bounty Finding",
                "description": "First Valid Bug Bounty Finding",
                "xp": 50
            },
            {
                "id": "p2bb4",
                "track": "PYTHON",
                "title": "Build Personal Recon Automation Pipeline",
                "description": "Build Personal Recon Automation Pipeline",
                "xp": 25
            },
            {
                "id": "p2ctf1",
                "track": "WEB",
                "title": "HTB: 10+ Medium Machines",
                "description": "HTB: 10+ Medium Machines",
                "xp": 30
            },
            {
                "id": "p2ctf2",
                "track": "WEB",
                "title": "Enter 2+ Live CTF Events",
                "description": "Enter 2+ Live CTF Events",
                "xp": 25
            },
            {
                "id": "p2ctf3",
                "track": "WEB",
                "title": "VulnHub: 5+ Medium VMs",
                "description": "VulnHub: 5+ Medium VMs",
                "xp": 20
            },
            {
                "id": "p2ctf4",
                "track": "WEB",
                "title": "Write 20+ Total Writeups",
                "description": "Write 20+ Total Writeups",
                "xp": 15
            },
            {
                "id": "p2ctf5",
                "track": "WEB",
                "title": "BUUCTF: Complete 30+ Archived Challenges",
                "description": "BUUCTF: Complete 30+ Archived Challenges",
                "xp": 25
            },
            {
                "id": "p2ctf6",
                "track": "WEB",
                "title": "BUUCTF: Attempt 1 AWD Session",
                "description": "BUUCTF: Attempt 1 AWD Session",
                "xp": 25
            }
        ]
    },
    {
        "id": "phase3",
        "title": "Phase 3: Operator-Level Capability",
        "description": "Advanced operations.",
        "quests": [
            {
                "id": "p3b1a",
                "track": "BINARY",
                "title": "Pwn.College: Adv Modules (Part 1)",
                "description": "Pwn.College: Adv Modules (Part 1)",
                "xp": 20
            },
            {
                "id": "p3b1b",
                "track": "BINARY",
                "title": "Pwn.College: Adv Modules (Part 2)",
                "description": "Pwn.College: Adv Modules (Part 2)",
                "xp": 20
            },
            {
                "id": "p3b2",
                "track": "BINARY",
                "title": "how2heap: Study All Techniques",
                "description": "how2heap: Study All Techniques",
                "xp": 30
            },
            {
                "id": "p3b0a",
                "track": "BINARY",
                "title": "Linux Kernel Module Programming",
                "description": "Linux Kernel Module Programming",
                "xp": 25
            },
            {
                "id": "p3b3",
                "track": "BINARY",
                "title": "Pawnyable: Kernel Exploitation Introduction",
                "description": "Pawnyable: Kernel Exploitation Introduction",
                "xp": 35
            },
            {
                "id": "p3b4",
                "track": "BINARY",
                "title": "HTB: Hard Pwn Challenges",
                "description": "HTB: Hard Pwn Challenges",
                "xp": 30
            },
            {
                "id": "p3b5",
                "track": "BINARY",
                "title": "Phoenix Exploit Education (All Levels)",
                "description": "Phoenix Exploit Education (All Levels)",
                "xp": 25
            },
            {
                "id": "p3m1",
                "track": "RE",
                "title": "ired.team: Study Evasion Techniques",
                "description": "ired.team: Study Evasion Techniques",
                "xp": 25
            },
            {
                "id": "p3m2",
                "track": "RE",
                "title": "VX-Underground: Study Papers Collection",
                "description": "VX-Underground: Study Papers Collection",
                "xp": 20
            },
            {
                "id": "p3m3a",
                "track": "SYSTEMS",
                "title": "Project: Custom C2 Framework (Implant)",
                "description": "Project: Custom C2 Framework (Implant)",
                "xp": 25
            },
            {
                "id": "p3m3b",
                "track": "SYSTEMS",
                "title": "Project: Custom C2 Framework (Server)",
                "description": "Project: Custom C2 Framework (Server)",
                "xp": 25
            },
            {
                "id": "p3m4",
                "track": "RE",
                "title": "Study Open-Source C2 Source Code",
                "description": "Study Open-Source C2 Source Code",
                "xp": 25
            },
            {
                "id": "p3m5",
                "track": "RE",
                "title": "Analyze 5+ Real Malware Samples",
                "description": "Analyze 5+ Real Malware Samples",
                "xp": 25
            },
            {
                "id": "p3m6",
                "track": "RE",
                "title": "Understand EDR/Sysmon Detection",
                "description": "Understand EDR/Sysmon Detection",
                "xp": 25
            },
            {
                "id": "p3m7",
                "track": "RE",
                "title": "Study ThreatHunter Playbook",
                "description": "Study ThreatHunter Playbook",
                "xp": 20
            },
            {
                "id": "p3m8",
                "track": "RE",
                "title": "Crow YouTube: Malware Dev Tutorials",
                "description": "Crow YouTube: Malware Dev Tutorials",
                "xp": 15
            },
            {
                "id": "p3r1",
                "track": "RE",
                "title": "Flare-On Challenge Archive (5+)",
                "description": "Flare-On Challenge Archive (5+)",
                "xp": 35
            },
            {
                "id": "p3r2",
                "track": "RE",
                "title": "IDA Pro / Binary Ninja Proficiency",
                "description": "IDA Pro / Binary Ninja Proficiency",
                "xp": 20
            },
            {
                "id": "p3r3",
                "track": "RE",
                "title": "Ghidra Scripting (Python/Java)",
                "description": "Ghidra Scripting (Python/Java)",
                "xp": 20
            },
            {
                "id": "p3bw1",
                "track": "BINARY",
                "title": "V8/d8 Standalone Setup & Exploitation",
                "description": "V8/d8 Standalone Setup & Exploitation",
                "xp": 30
            },
            {
                "id": "p3bw2",
                "track": "BINARY",
                "title": "Study 3 RWCTF Browser Challenge Writeups",
                "description": "Study 3 RWCTF Browser Challenge Writeups",
                "xp": 30
            },
            {
                "id": "p3bw3",
                "track": "RE",
                "title": "Frida Dynamic Instrumentation Mastery",
                "description": "Frida Dynamic Instrumentation Mastery",
                "xp": 20
            },
            {
                "id": "p3cap1",
                "track": "SYSTEMS",
                "title": "Project: Write a Custom Fuzzer",
                "description": "Project: Write a Custom Fuzzer",
                "xp": 40
            },
            {
                "id": "p3cap2",
                "track": "BINARY",
                "title": "Project: Exploit for Public CVE",
                "description": "Project: Exploit for Public CVE",
                "xp": 50
            },
            {
                "id": "p3cap3",
                "track": "PYTHON",
                "title": "Contribute to Open-Source Security Tool",
                "description": "Contribute to Open-Source Security Tool",
                "xp": 30
            },
            {
                "id": "p3cap4",
                "track": "WEB",
                "title": "Publish Original Security Research",
                "description": "Publish Original Security Research",
                "xp": 50
            },
            {
                "id": "p3cap5",
                "track": "BINARY",
                "title": "Study 5+ RWCTF / QiangWang Cup Writeups",
                "description": "Study 5+ RWCTF / QiangWang Cup Writeups",
                "xp": 30
            },
            {
                "id": "p3cap6",
                "track": "SYSTEMS",
                "title": "OSTEP: Concurrency Chapters",
                "description": "OSTEP: Concurrency Chapters",
                "xp": 20
            },
            {
                "id": "p3o1",
                "track": "WEB",
                "title": "OSCP (PEN-200) Certification",
                "description": "OSCP (PEN-200) Certification",
                "xp": 40
            },
            {
                "id": "p3o2",
                "track": "SYSTEMS",
                "title": "Build a Rootkit (Educational)",
                "description": "Build a Rootkit (Educational)",
                "xp": 40
            },
            {
                "id": "p3o3",
                "track": "RE",
                "title": "Android/iOS Security Exploration",
                "description": "Android/iOS Security Exploration",
                "xp": 25
            },
            {
                "id": "p3o4",
                "track": "WEB",
                "title": "Cloud Security (AWS/Azure Exploitation)",
                "description": "Cloud Security (AWS/Azure Exploitation)",
                "xp": 25
            },
            {
                "id": "p3o5",
                "track": "RE",
                "title": "52pojie RE Tutorials",
                "description": "52pojie RE Tutorials",
                "xp": 15
            }
        ]
    }
],
  ACHIEVEMENTS: [
    {
        "id": "a_0",
        "title": "Back in the Saddle",
        "description": "Complete Bandit speedrun",
        "icon": "🐴"
    },
    {
        "id": "a_1",
        "title": "First Blood",
        "description": "Complete first PortSwigger lab",
        "icon": "🩸"
    },
    {
        "id": "a_2",
        "title": "C Architect",
        "description": "Build HTTP server in C",
        "icon": "🏗️"
    },
    {
        "id": "a_3",
        "title": "Snake Charmer",
        "description": "Build first Python security tool",
        "icon": "🐍"
    },
    {
        "id": "a_4",
        "title": "Buffer Overflow!",
        "description": "Pop first buffer overflow in Narnia",
        "icon": "💥"
    },
    {
        "id": "a_5",
        "title": "Speaking Machine",
        "description": "Complete Pwn.College Assembly module",
        "icon": "🤖"
    },
    {
        "id": "a_6",
        "title": "Codebreaker",
        "description": "Complete CryptoHack Symmetric module",
        "icon": "🔓"
    },
    {
        "id": "a_7",
        "title": "Web Warrior",
        "description": "Complete PortSwigger Practitioner labs",
        "icon": "🌐"
    },
    {
        "id": "a_8",
        "title": "Team Player",
        "description": "Enter first live CTF",
        "icon": "🏁"
    },
    {
        "id": "a_9",
        "title": "Bug Hunter",
        "description": "Submit first bug bounty report",
        "icon": "🎯"
    },
    {
        "id": "a_10",
        "title": "Shell Lord",
        "description": "Build your own shell in C",
        "icon": "🐚"
    },
    {
        "id": "a_11",
        "title": "Getting Paid",
        "description": "First valid bug bounty finding",
        "icon": "💰"
    },
    {
        "id": "a_12",
        "title": "Chain Master",
        "description": "Complete all ROP Emporium challenges",
        "icon": "⛓️"
    },
    {
        "id": "a_13",
        "title": "Domain Admin",
        "description": "Complete GOAD AD lab",
        "icon": "🪟"
    },
    {
        "id": "a_14",
        "title": "Ghost Reader",
        "description": "Complete Malware Unicorn RE101+102",
        "icon": "👻"
    },
    {
        "id": "a_15",
        "title": "Heap Whisperer",
        "description": "Read glibc malloc.c source",
        "icon": "🧠"
    },
    {
        "id": "a_16",
        "title": "Shadow Operator",
        "description": "Build custom C2 framework",
        "icon": "🕴️"
    },
    {
        "id": "a_17",
        "title": "Ring Zero",
        "description": "Complete Pawnyable kernel exploitation",
        "icon": "💀"
    },
    {
        "id": "a_18",
        "title": "Original Researcher",
        "description": "Publish original security research",
        "icon": "📝"
    },
    {
        "id": "a_19",
        "title": "On Fire",
        "description": "7-day streak",
        "icon": "🔥"
    },
    {
        "id": "a_20",
        "title": "Unstoppable",
        "description": "30-day streak",
        "icon": "☄️"
    },
    {
        "id": "a_21",
        "title": "Machine",
        "description": "60-day streak",
        "icon": "⚡"
    },
    {
        "id": "a_22",
        "title": "Half a Grand",
        "description": "Earn 500 XP",
        "icon": "⚡"
    },
    {
        "id": "a_23",
        "title": "Quad Digits",
        "description": "Earn 1000 XP",
        "icon": "🌟"
    },
    {
        "id": "a_24",
        "title": "Two Thousand Strong",
        "description": "Earn 2000 XP",
        "icon": "✨"
    }
],
  TRANSPORT_PLAYLIST: [
    { title: "Darknet Diaries", url: "https://darknetdiaries.com/", type: "Podcast" },
    { title: "LiveOverflow", url: "https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w", type: "YouTube" },
    { title: "IppSec", url: "https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA", type: "YouTube" }
  ],
  RESOURCES: [
    { title: "HackTheBox", url: "https://www.hackthebox.com/", category: "Practice" },
    { title: "TryHackMe", url: "https://tryhackme.com/", category: "Practice" },
    { title: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", category: "Learning" },
    { title: "GTFOBins", url: "https://gtfobins.github.io/", category: "Reference" }
  ]
};

let state = {
  "operator": "Daedaluz",
  "totalXP": 100,
  "rank": "Initiate",
  "rankIcon": "🔰",
  "streak": {
    "current": 1,
    "lastDate": "2026-04-09",
    "best": 1
  },
  "completedQuests": [
    "pk1",
    "pk2",
    "pk3",
    "pk4",
    "pk5",
    "pk6",
    "p0t1",
    "p0t12"
  ],
  "logs": [
    {
      "date": 1774569600000,
      "content": ""
    }
  ]
};

// --- Core Logic ---
function init() {
  loadState();
  setupNavigation();
  renderAll();
  setupEventListeners();
  checkStreak();
}

function loadState() {
  const saved = localStorage.getItem('phoenix_state');
  if (saved) {
    state = JSON.parse(saved);
  }
}

function saveState() {
  localStorage.setItem('phoenix_state', JSON.stringify(state));
  updateHeader();
}

function calculateRank() {
  let currentRank = PHOENIX_DATA.RANKS[0];
  let nextRank = PHOENIX_DATA.RANKS[1];
  for (let i = 0; i < PHOENIX_DATA.RANKS.length; i++) {
    if (state.totalXP >= PHOENIX_DATA.RANKS[i].minXP) {
      currentRank = PHOENIX_DATA.RANKS[i];
      nextRank = PHOENIX_DATA.RANKS[i + 1] || currentRank;
    }
  }
  state.rank = currentRank.name;
  state.rankIcon = currentRank.icon;
  return { current: currentRank, next: nextRank };
}

function checkStreak() {
  const today = new Date().toDateString();
  if (state.streak.lastLogin !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (state.streak.lastLogin === yesterday.toDateString()) {
      state.streak.current++;
    } else {
      state.streak.current = 1;
    }
    state.streak.lastLogin = today;
    saveState();
  }
}

// --- Rendering ---
function renderAll() {
  updateHeader();
  renderQuests();
  renderTransport();
  renderResources();
  renderAchievements();
  renderLogs();
}

function updateHeader() {
  const ranks = calculateRank();
  document.getElementById('headerOperatorName').textContent = state.operator;
  document.getElementById('bcOperator').textContent = state.operator;
  document.getElementById('headerStreak').textContent = state.streak.current;
  
  const xpInLevel = state.totalXP - ranks.current.minXP;
  const xpNeeded = ranks.next.minXP - ranks.current.minXP;
  const progressPercent = xpNeeded === 0 ? 100 : Math.min(100, Math.max(0, (xpInLevel / xpNeeded) * 100));
  
  document.getElementById('headerRankText').textContent = `${ranks.current.icon} ${ranks.current.name} • ${state.totalXP} XP`;
  document.getElementById('headerProgressFill').style.width = `${progressPercent}%`;

  // Sidebar progress
  let totalQuests = 0;
  PHOENIX_DATA.PHASES.forEach(p => totalQuests += p.quests.length);
  const completed = state.completedQuests.length;
  const overallPercent = totalQuests === 0 ? 0 : (completed / totalQuests) * 100;
  
  document.getElementById('sidebarProgressFill').style.width = `${overallPercent}%`;
  document.getElementById('sidebarProgressText').textContent = `${completed} of ${totalQuests} tasks completed`;
}

function renderQuests() {
  const container = document.getElementById('questsContainer');
  container.innerHTML = '';

  let activePhaseFound = false;

  PHOENIX_DATA.PHASES.forEach((phase, index) => {
    const phaseCompleted = phase.quests.every(q => state.completedQuests.includes(q.id));
    const isLocked = !activePhaseFound && index > 0 && !PHOENIX_DATA.PHASES[index-1].quests.every(q => state.completedQuests.includes(q.id));
    const isOpen = !phaseCompleted && !isLocked && !activePhaseFound;
    
    if (isOpen) activePhaseFound = true;

    const phaseEl = document.createElement('div');
    phaseEl.className = `phase-section ${isLocked ? 'phase-locked' : ''}`;
    
    let contentHtml = '';
    if (isLocked) {
      contentHtml = `<div class="locked-banner"><span class="material-symbols-outlined" style="margin-right:8px;">lock</span> Complete previous phase to unlock</div>`;
    } else {
      // Group by track
      const tracks = {};
      phase.quests.forEach(q => {
        if (!tracks[q.track]) tracks[q.track] = [];
        tracks[q.track].push(q);
      });

      let gridHtml = '<div class="bento-grid">';
      for (const [trackId, quests] of Object.entries(tracks)) {
        const trackInfo = PHOENIX_DATA.BRANCHES[trackId];
        gridHtml += `<div style="grid-column: 1 / -1;"><div class="track-header"><span class="material-symbols-outlined" style="font-size:16px; margin-right:4px;">${trackInfo.icon}</span> ${trackInfo.name}</div></div>`;
        
        quests.forEach(q => {
          const isDone = state.completedQuests.includes(q.id);
          let codeHtml = '';
          if (q.command) {
            codeHtml = `
              <pre class="code-block">
                <span class="prompt">$</span>
                <code class="font-mono">${q.command}</code>
                <button onclick="copyToClipboard('${q.command.replace(/'/g, "\\'").replace(/"/g, '&quot;')}')" title="Copy to clipboard">
                  <span class="material-symbols-outlined" style="font-size:16px;">content_copy</span>
                </button>
              </pre>
            `;
          }

          gridHtml += `
            <div class="card quest-card ${isDone ? 'completed' : ''}">
              <input type="checkbox" class="quest-checkbox" data-id="${q.id}" data-xp="${q.xp}" ${isDone ? 'checked' : ''}>
              <div class="quest-content">
                <div class="quest-top">
                  <h3 class="quest-title">${q.title}</h3>
                  <span class="quest-badge ${isDone ? 'badge-done' : 'badge-progress'}">+${q.xp} XP</span>
                </div>
                <p class="quest-desc">${q.description}</p>
                ${codeHtml}
              </div>
            </div>
          `;
        });
      }
      gridHtml += '</div>';
      contentHtml = `<div class="accordion-content ${isOpen ? 'open' : ''}" id="phase-content-${phase.id}">${gridHtml}</div>`;
    }

    phaseEl.innerHTML = `
      <div class="phase-header" onclick="togglePhase('${phase.id}')">
        <div class="phase-icon"><span class="material-symbols-outlined">${phaseCompleted ? 'check_circle' : (isLocked ? 'lock' : 'play_circle')}</span></div>
        <h2>${phase.title}</h2>
        <span class="material-symbols-outlined" style="margin-left:auto; color:var(--on-surface-variant)">${isOpen ? 'expand_less' : 'expand_more'}</span>
      </div>
      ${contentHtml}
    `;
    container.appendChild(phaseEl);
  });

  // Add event listeners to checkboxes
  document.querySelectorAll('.quest-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      const xp = parseInt(e.target.getAttribute('data-xp'));
      if (e.target.checked) {
        state.completedQuests.push(id);
        state.totalXP += xp;
        showToast(`Quest completed! +${xp} XP`);
      } else {
        state.completedQuests = state.completedQuests.filter(q => q !== id);
        state.totalXP -= xp;
      }
      saveState();
      renderQuests(); // Re-render to update locked states
    });
  });
}

window.togglePhase = function(phaseId) {
  const content = document.getElementById(`phase-content-${phaseId}`);
  if (content) {
    content.classList.toggle('open');
    const icon = content.previousElementSibling.querySelector('.material-symbols-outlined:last-child');
    icon.textContent = content.classList.contains('open') ? 'expand_less' : 'expand_more';
  }
};

window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard');
  });
};

function renderTransport() {
  const container = document.getElementById('transportContainer');
  container.innerHTML = PHOENIX_DATA.TRANSPORT_PLAYLIST.map(t => `
    <div class="card resource-card">
      <h3>${t.title}</h3>
      <p>${t.type}</p>
      <a href="${t.url}" target="_blank">Open Link <span class="material-symbols-outlined" style="font-size:14px;">open_in_new</span></a>
    </div>
  `).join('');
}

function renderResources() {
  const container = document.getElementById('resourcesContainer');
  container.innerHTML = PHOENIX_DATA.RESOURCES.map(r => `
    <div class="card resource-card">
      <h3>${r.title}</h3>
      <p>${r.category}</p>
      <a href="${r.url}" target="_blank">Open Link <span class="material-symbols-outlined" style="font-size:14px;">open_in_new</span></a>
    </div>
  `).join('');
}

function renderAchievements() {
  // Render Skill Tree
  const skillTreeContainer = document.getElementById('skillTreeContainer');
  const branchProgress = {};
  for (const branch in PHOENIX_DATA.BRANCHES) {
    branchProgress[branch] = { total: 0, completed: 0 };
  }
  PHOENIX_DATA.PHASES.forEach(phase => {
    phase.quests.forEach(q => {
      if (branchProgress[q.track]) {
        branchProgress[q.track].total++;
        if (state.completedQuests.includes(q.id)) {
          branchProgress[q.track].completed++;
        }
      }
    });
  });

  skillTreeContainer.innerHTML = Object.entries(PHOENIX_DATA.BRANCHES).map(([id, branch]) => {
    const progress = branchProgress[id];
    const percent = progress.total === 0 ? 0 : Math.round((progress.completed / progress.total) * 100);
    return `
      <div class="resource-card" style="padding: 8px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <span class="material-symbols-outlined" style="color: var(--${branch.color || 'primary'});">${branch.icon}</span>
          <h3 style="margin: 0; font-size: 0.875rem;">${branch.name}</h3>
        </div>
        <div class="progress-track" style="margin-bottom: 8px;">
          <div class="progress-fill" style="width: ${percent}%; background: var(--${branch.color || 'primary'});"></div>
        </div>
        <div style="font-size: 0.75rem; color: var(--on-surface-variant); text-align: right;">
          Level ${progress.completed} (${percent}%)
        </div>
      </div>
    `;
  }).join('');

  const container = document.getElementById('achievementsContainer');
  container.innerHTML = PHOENIX_DATA.ACHIEVEMENTS.map(a => {
    // Simple logic for achievements
    let unlocked = false;
    if (a.id === 'a_1' && state.completedQuests.length > 0) unlocked = true;
    if (a.id === 'a_2' && PHOENIX_DATA.PHASES[0].quests.every(q => state.completedQuests.includes(q.id))) unlocked = true;
    if (a.id === 'a_3' && state.totalXP >= 1000) unlocked = true;
    if (a.id === 'a_4' && state.streak.current >= 7) unlocked = true;

    return `
      <div class="card resource-card" style="${unlocked ? '' : 'opacity: 0.5; filter: grayscale(1);'}">
        <div style="font-size: 2rem; margin-bottom: 8px;">${a.icon}</div>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        ${unlocked ? '<span class="quest-badge badge-done">Unlocked</span>' : '<span class="quest-badge" style="background:var(--surface-container); color:var(--on-surface-variant)">Locked</span>'}
      </div>
    `;
  }).join('');
}

function renderLogs() {
  const container = document.getElementById('logContainer');
  if (state.logs.length === 0) {
    container.innerHTML = '<p style="color:var(--on-surface-variant)">No logs yet. Add an entry to track your progress or issues.</p>';
    return;
  }
  container.innerHTML = state.logs.map((log, i) => `
    <div class="card log-entry">
      <div style="font-size:0.75rem; color:var(--on-surface-variant); margin-bottom:8px;">${new Date(log.date).toLocaleString()}</div>
      <p style="white-space: pre-wrap; margin:0;">${log.content}</p>
    </div>
  `).reverse().join('');
}

// --- Event Listeners ---
function setupNavigation() {
  const links = document.querySelectorAll('.nav-center a, .side-link, .bottom-nav-item');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      
      // Update active states
      links.forEach(l => l.classList.remove('active'));
      document.querySelectorAll(`[data-target="${target}"]`).forEach(l => l.classList.add('active'));
      
      // Show view
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(`view-${target}`).classList.add('active');
      
      // Update breadcrumb
      const titles = { quests: 'Quest Board', transport: 'Transport', resources: 'Resources', achievements: 'Achievements', log: 'Capture Log' };
      document.getElementById('bcView').textContent = titles[target];
    });
  });
}

function setupEventListeners() {
  // Import/Export
  document.getElementById('btnExport').addEventListener('click', exportState);
  document.getElementById('btnImport').addEventListener('click', () => document.getElementById('importFile').click());
  document.getElementById('importFile').addEventListener('change', importState);

  // Logs
  document.getElementById('btnSaveLog').addEventListener('click', () => {
    const content = document.getElementById('newLogContent').value.trim();
    if (content) {
      state.logs.push({ date: new Date().toISOString(), content });
      saveState();
      renderLogs();
      document.getElementById('newLogContent').value = '';
      showToast('Log entry saved');
    }
  });

  document.getElementById('btnExportLog').addEventListener('click', () => {
    let md = "# Capture Log\n\n";
    state.logs.forEach(log => {
      md += `## ${new Date(log.date).toLocaleString()}\n${log.content}\n\n`;
    });
    downloadFile(md, 'stuck_log.md', 'text/markdown');
  });
}

// --- Import/Export ---
function exportState() {
  // Calculate Phase/Branch percent
  const phaseProgress = {};
  const branchProgress = {};
  const incompleteQuests = [];
  
  // Initialize branch progress
  for (const branch in PHOENIX_DATA.BRANCHES) {
    branchProgress[branch] = { total: 0, completed: 0, percent: 0 };
  }

  PHOENIX_DATA.PHASES.forEach(phase => {
    let phaseTotal = phase.quests.length;
    let phaseCompleted = 0;
    
    phase.quests.forEach(q => {
      if (branchProgress[q.track]) {
        branchProgress[q.track].total++;
      }
      
      if (state.completedQuests.includes(q.id)) {
        phaseCompleted++;
        if (branchProgress[q.track]) {
          branchProgress[q.track].completed++;
        }
      } else {
        incompleteQuests.push(q.id);
      }
    });
    
    phaseProgress[phase.id] = {
      total: phaseTotal,
      completed: phaseCompleted,
      percent: phaseTotal === 0 ? 100 : Math.round((phaseCompleted / phaseTotal) * 100)
    };
  });

  for (const branch in branchProgress) {
    const b = branchProgress[branch];
    b.percent = b.total === 0 ? 100 : Math.round((b.completed / b.total) * 100);
  }

  const exportData = {
    operator: state.operator,
    totalXP: state.totalXP,
    rank: state.rank,
    rankIcon: state.rankIcon,
    streak: state.streak,
    completedQuests: state.completedQuests,
    incompleteQuests: incompleteQuests,
    phaseProgress: phaseProgress,
    branchProgress: branchProgress,
    logs: state.logs
  };
  downloadFile(JSON.stringify(exportData, null, 2), 'phoenix_progress.json', 'application/json');
}

function importState(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.operator !== undefined && data.totalXP !== undefined) {
        state = { ...state, ...data };
        saveState();
        renderAll();
        showToast('State imported successfully');
      } else {
        showToast('Invalid state file');
      }
    } catch (err) {
      showToast('Error parsing file');
    }
  };
  reader.readAsText(file);
}

function downloadFile(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// --- Utils ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Initialize
window.onload = init;
