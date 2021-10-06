const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.urlencoded());

const root = "/LITTLEBIGPLANETPS3_XML/"

app.get(root, (req, res) => {
    res.sendStatus(200);
});

app.post(root + "login", (req, res) => {
    res.set('Content-Type', 'text/xml')
    res.send(fs.readFileSync("loginresult.xml"));
});

app.get(root + "eula", (req, res) => {
    res.sendStatus(200);
});

app.get(root + "announce", (req, res) => {
    res.send("PROJECT LIGHTHOUSE IS A GO!\nalso ezoiar was here")
    // res.sendStatus(200);
});

app.get(root + "t_conf", (req, res) => {
    res.sendStatus(404);
});

app.post(root + "enterLevel/user/:id", (req, res) => {
    res.sendStatus(200);
});

app.get(root + "tags", (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send(fs.readFileSync("tags.txt").toString());
});

app.get(root + "user/:username", (req, res) => {
    res.set('Content-Type', 'text/xml')
    res.send(fs.readFileSync("user.xml").toString().replace('$user', req.params.username));
});

app.get(root + "news", (req, res) => {
    res.set('Content-Type', 'text/xml')
    res.send(fs.readFileSync("news.xml"));
});

app.get(root + "network_settings.nws", (req, res) => {
    res.set('Content-Type', 'text/xml')
    res.send("<imStuff></imStuff>");
});

const server = app.listen(10060, function () {  
    const address = server.address();
    const host = address.address;
    const port = address.port;

    console.log("listening at http://%s:%s", host, port);
})  