const fs = require('fs');
let c = fs.readFileSync('src/icons/roundLineAnimation.js', 'utf8');

let newContent = c.replace(
  /<motion\.g animate=\{\{ rotate: 360 \}\} transition=\{\{ repeat: Infinity, duration: 20, ease: "linear" \}\} style=\{\{ transformOrigin: "center" \}\}>\n<path opacity="0\.5" d="([^"]+)" stroke="#99FCFF" strokeDasharray="8 8"\/>\n<path opacity="0\.1" d="([^"]+)" stroke="#99FCFF" strokeDasharray="8 8"\/>\n<\/motion\.g>/g,
  `<motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ transformOrigin: "center" }}>
<path opacity="0.5" d="$1" stroke="#99FCFF" strokeDasharray="8 8"/>
</motion.g>
<motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 2 }} style={{ transformOrigin: "center" }}>
<path opacity="0.1" d="$2" stroke="#99FCFF" strokeDasharray="8 8"/>
</motion.g>`
);

fs.writeFileSync('src/icons/roundLineAnimation.js', newContent);
console.log("Separated motion wrappers!");
