const app = require('./src/app');
require('./src/api');

const port = 8888;

app.listen(port, () => {
    console.log(`app listenning on port ${port}`);
})