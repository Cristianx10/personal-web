const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/:var?', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Settings
app.set("port", process.env.PORT || 4000);

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});