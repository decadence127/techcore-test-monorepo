const { execSync } = require("child_process");

execSync(
  `cd client && npm install --legacy-peer-deps && echo "installed" && npm run build`,
  {
    stdio: [0, 1, 2],
  }
);
