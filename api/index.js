const server = require("../dist/client/server/main");
server.app.listen(3000, () => {
  console.log("App is running on port 3000");
});
module.exports = server.app();
