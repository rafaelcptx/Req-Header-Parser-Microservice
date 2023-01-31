let express = require("express");
let app = express();

app.get("/api/whoami", (req, res) => {
  let userIp = req.headers["x-forwarded-for"];
  let preferredLanguage = req.headers["accept-language"];
  let userSoftware = req.headers["user-agent"];

  res.json({
    ipaddres: userIp,
    language: preferredLanguage,
    software: userSoftware,
  });
});

app.listen(5040);
