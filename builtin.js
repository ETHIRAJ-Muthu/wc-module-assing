// bulitin modules
import fs from 'fs'
fs.writeFile('chummafile.txt','aram seiya virumbu',function(err){
 if(err) throw err;
  console.log('file was created & stored');
});

