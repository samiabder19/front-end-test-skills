const host = 'localhost';
const user = 'root';
const password = '';
const database = 'humanitaide';

const mysql_import = require('mysql-import');
const Importer = require('../mysql-import.js');
const importer = new Importer({host, user, password, database});

importer.import('./bd.sql').then(()=>{
  var files_imported = importer.getImported();
  console.log('${files_imported.length} SQL file(s) imported.');
}).catch(err=>{
  console.error(err);
});