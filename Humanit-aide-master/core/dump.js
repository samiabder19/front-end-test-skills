mysqldump = require('mysqldump')
mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'humanitaide',
    },
    dumpToFile: './humanitaide.sql',
});