const path= require('path');




// base file name
console.log(path.basename(__filename));

//dir file name
console.log(path.dirname(__filename));

console.log(path.extname(__filename));

// all in one
console.log(path.parse(__filename));

// we can use any of the property from the parse
console.log(path.parse(__filename).name);

// we can concatenate  paths as well
// why do we need to use this?
// because there exists a problem with the delimiter in windows \ vs in Linux /, 
// which can be solved using concatenation
console.log(path.join(__dirname, 'folderName', 'filename.html'));
