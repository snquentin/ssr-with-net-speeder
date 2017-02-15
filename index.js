var superagent = require('superagent');
var CronJob = require('cron').CronJob;
//1小时半执行一次
new CronJob('* 30 1 * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

function restart(){
  
}
