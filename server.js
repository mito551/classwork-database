const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./models")
db.sequelize.sync()

require('./routes/users.routes')(app);
require('./routes/items.routes')(app);
require('./routes/carts.routes')(app);

app.get('/', (req, res) => {
    res.json({code: 200, message: 'Hello World!'})
})

// app.get('/about', (req, res) => {
//     res.send("<h1>About Us</h1>")
// })

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})