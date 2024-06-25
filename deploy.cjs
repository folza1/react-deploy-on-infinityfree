const FtpDeploy = require('ftp-deploy');
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
// 755 permisison to htdocs folder
// GitHub Environment Secrets need to be set

console.log('FTP Username:', process.env.FTP_USERNAME);
console.log('FTP Password:', process.env.FTP_PASSWORD ? '******' : 'Not set');
console.log('FTP Host:', process.env.FTP_HOST);
