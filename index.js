const fs = require("fs");
const FontName = require("fontname");
const fontData = fs.readFileSync('./zh-ch/Glow Sans SC Extended/GlowSansSC-Normal-Bold.otf');
console.log(FontName.parse(fontData)[0]);
