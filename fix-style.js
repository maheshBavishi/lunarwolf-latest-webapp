const fs = require('fs');
let c = fs.readFileSync('src/icons/roundLineAnimation.js', 'utf8');

c = c.replace(/style="backdrop-filter:blur\(10px\);clipPath:url\(([^)]+)\);height:100%;width:100%"/g, 
  "style={{ backdropFilter: 'blur(10px)', clipPath: 'url($1)', height: '100%', width: '100%' }}");

// Just in case it still has clip-path
c = c.replace(/style="backdrop-filter:blur\(10px\);clip-path:url\(([^)]+)\);height:100%;width:100%"/g, 
  "style={{ backdropFilter: 'blur(10px)', clipPath: 'url($1)', height: '100%', width: '100%' }}");

fs.writeFileSync('src/icons/roundLineAnimation.js', c);
console.log("Fixed style prop!");
