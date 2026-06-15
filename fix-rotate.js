const fs = require('fs');
let c = fs.readFileSync('src/icons/roundLineAnimation.js', 'utf8');

// Remove animate from root svg
c = c.replace(/<motion\.svg(.*?) animate=\{\{ rotate: 360 \}\} transition=\{\{ repeat: Infinity, duration: 20, ease: "linear" \}\}>/, '<svg$1>');
c = c.replace(/<\/motion\.svg>/, '</svg>');

// Wrap the paths with motion.g
c = c.replace(/(<path opacity="0\.5" d="M392\.474)/, '<motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ transformOrigin: "center" }}>\n$1');

// Close motion.g before foreignObject
c = c.replace(/(<foreignObject x="81")/, '</motion.g>\n$1');

fs.writeFileSync('src/icons/roundLineAnimation.js', c);
console.log("Fixed rotation scope!");
