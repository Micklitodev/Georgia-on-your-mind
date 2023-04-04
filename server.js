const express = require("express");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const exphbs = require("express-handlebars");


const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express(); 
const PORT = process.env.PORT || 3001; 

const sess = {
    secret: 'The Secret', 
    cookie: {
        httpOnly: true,
        secure: false, 
        sameSite: 'strict',  
    }, 
    resave: false,
    saveUninitialize: true, 
    store: new SequelizeStore({
        db: sequelize,
    }),
}

app.use(session(sess))

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, "public"))); 

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`ServerRun - http://localhost:${PORT}`));
});
