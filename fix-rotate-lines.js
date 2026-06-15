const fs = require('fs');
let c = fs.readFileSync('src/icons/roundLineAnimation.js', 'utf8');

c = c.replace(/<\/motion\.g>\n(<foreignObject)/, '$1');
c = c.replace(/(<path d="M261 165V105L200 44")/, '</motion.g>\n$1');

fs.writeFileSync('src/icons/roundLineAnimation.js', c);
console.log("Moved closing tag!");
