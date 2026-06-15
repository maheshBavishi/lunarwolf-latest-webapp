const fs = require('fs');
let c = fs.readFileSync('src/icons/roundLineAnimation.js', 'utf8');

c = c.replace(/stroke-dasharray/g, 'strokeDasharray')
     .replace(/stop-color/g, 'stopColor')
     .replace(/stop-opacity/g, 'stopOpacity')
     .replace(/stroke-width/g, 'strokeWidth')
     .replace(/clip-path/g, 'clipPath')
     .replace(/fill-opacity/g, 'fillOpacity');

c = c.replace(/import React from 'react'/, "import React from 'react';\nimport { motion } from 'framer-motion';");
c = c.replace(/<svg\b([^>]*)>/, '<motion.svg$1 animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>');
c = c.replace(/<\/svg>/, '</motion.svg>');

fs.writeFileSync('src/icons/roundLineAnimation.js', c);
console.log("Replaced successfully!");
