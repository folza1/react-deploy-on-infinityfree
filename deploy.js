// const FtpDeploy = require('ftp-deploy');
import FtpDeploy from 'ftp-deploy';
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + '/dist',
  remoteRoot: '/htdocs/', // állítsd be a szerver könyvtárát
  include: ['*', '**/*'], // minden fájlt másol
  deleteRemote: false, // törli az összes távoli fájlt
  forcePasv: true
};

ftpDeploy.deploy(config)
  .then(res => console.log('Deploy finished:', res))
  .catch(err => console.log('Deploy error:', err));
