import app from './app';

import config from './config/config.server';


app.listen(config.server.port, (): void => {
  console.log(`Current ENV is ${config.env}`);
  console.log(`Server listening on port ${config.server.port}!`);
});
