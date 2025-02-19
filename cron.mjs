// cron.mjs
import cron from 'node-cron';
import fetch from 'node-fetch';

// This cron schedule runs every minute:
cron.schedule('* * * * *', async () => {
  console.log('Running local cron job to call the route...');
  try {
    const res = await fetch('http://localhost:3000/api/cron/followUp');
    const data = await res.json();
    console.log('Cron response:', data);
  } catch (err) {
    console.error('Cron error:', err);
  }
});
