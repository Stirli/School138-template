import sass from 'sass';
import clipboardy from 'clipboardy';

const result = sass.compile("scss/custom.scss");
console.log(result.css);

clipboardy.writeSync(result.css);



// const compressed = sass.compile("scss/custom.scss", {style: "compressed"});
// console.log(compressed.css);
