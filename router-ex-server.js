const express = require('express');
const app = express();
const port = 8001;
const birds = require('./birds');

app.use('/birds', birds);

//looks for url to end in /birds
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});