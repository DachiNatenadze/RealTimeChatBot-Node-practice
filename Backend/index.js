const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
   const r = await axios.put(
    'https://api.chatengine.io/users/',
    {
        username: "username",
        sercet: "username",
        first_name: username,
        
    },
    {headers: {"private-key": "    9b54754f-296d-403b-86dc-6d5157e47f5a"}}
      

    ),
    return res.status(r.status).json(r.data)

  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
