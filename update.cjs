const fs = require('fs');
const userData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const phasesMap = {
  "phase0": { id: "phase0", title: "Phase 0: Rust Removal & Re-Ignition", description: "Establishing the baseline.", quests: [] },
  "phase1": { id: "phase1", title: "Phase 1: The Multi-Track Offensive", description: "Building core competencies.", quests: [] },
  "phase2": { id: "phase2", title: "Phase 2: Deepening & Specialization", description: "Applying knowledge.", quests: [] },
  "phase3": { id: "phase3", title: "Phase 3: Operator-Level Capability", description: "Advanced operations.", quests: [] }
};

const allQuests = [...userData.completedQuests, ...userData.incompleteQuests];

allQuests.forEach(q => {
  if (phasesMap[q.phase]) {
    phasesMap[q.phase].quests.push({
      id: q.id,
      track: q.branch.toUpperCase(),
      title: q.name,
      description: q.name,
      xp: q.xp
    });
  }
});

const newPhases = Object.values(phasesMap);

const newBranches = {
  "SYSTEMS": { name: "Systems Programming", icon: "terminal", color: "blue" },
  "NETWORK": { name: "Networking", icon: "router", color: "green" },
  "WEB": { name: "Web Exploitation", icon: "language", color: "purple" },
  "CRYPTO": { name: "Cryptography", icon: "key", color: "yellow" },
  "RE": { name: "Reverse Engineering", icon: "memory", color: "red" },
  "BINARY": { name: "Binary Exploitation", icon: "bug_report", color: "orange" },
  "PYTHON": { name: "Python Tooling", icon: "code", color: "teal" },
  "RECON": { name: "Recon & OSINT", icon: "public", color: "cyan" },
  "WINDOWS": { name: "Windows & AD", icon: "window", color: "indigo" }
};

const newAchievements = Object.entries(userData.achievements).map(([key, val], idx) => ({
  id: `a_${idx}`,
  title: key,
  description: val.desc,
  icon: val.icon
}));

const newState = {
  operator: userData.operator,
  totalXP: userData.totalXP,
  rank: userData.rank,
  rankIcon: userData.rankIcon,
  streak: userData.streak,
  completedQuests: userData.completedQuests.map(q => q.id),
  logs: userData.captureLog.map(l => ({ date: new Date(l.date).getTime(), content: `${l.learned}\n${l.stuck}\n${l.next}`.trim() }))
};

let htmlContent = fs.readFileSync('index.html', 'utf8');

// Replace BRANCHES
htmlContent = htmlContent.replace(/BRANCHES: \{[\s\S]*?\},/, `BRANCHES: ${JSON.stringify(newBranches, null, 4)},`);

// Replace PHASES
htmlContent = htmlContent.replace(/PHASES: \[[\s\S]*?\],\n  ACHIEVEMENTS:/, `PHASES: ${JSON.stringify(newPhases, null, 4)},\n  ACHIEVEMENTS:`);

// Replace ACHIEVEMENTS
htmlContent = htmlContent.replace(/ACHIEVEMENTS: \[[\s\S]*?\],\n  TRANSPORT_PLAYLIST:/, `ACHIEVEMENTS: ${JSON.stringify(newAchievements, null, 4)},\n  TRANSPORT_PLAYLIST:`);

// Replace state
htmlContent = htmlContent.replace(/let state = \{[\s\S]*?\};\n/, `let state = ${JSON.stringify(newState, null, 2)};\n`);

fs.writeFileSync('index.html', htmlContent);
console.log("Updated index.html");
