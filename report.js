const newman = require('newman');
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/31256672-28568379-6ccf-4e15-9be7-ed2568942630?access_key=PMAT-01HGZ8NW54D2H75MM4NXQVWN8H`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});