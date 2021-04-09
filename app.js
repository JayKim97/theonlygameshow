const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrft = require("csurf");
const multer = require("multer");

const errorController = require("");
const User = require("./models/user");

const app = express();
const csrfProtection = csrf();

app.set("view engine", "ejs");
app.set("views", "views");
