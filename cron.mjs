// cron.mjs
import cron from 'node-cron';
import fetch from 'node-fetch';

// Schedule followup email at 9am everyday
cron.schedule('0 9 * * *', async () => {
  console.log('Running followup email cron job at 9am...');
  try {
    const res = await fetch('http://localhost:3000/api/cron/followUp');
    const data = await res.json();
    console.log('Followup email response:', data);
  } catch (err) {
    console.error('Followup email cron error:', err);
  }
});

// Schedule callback email at 12pm everyday
cron.schedule('0 12 * * *', async () => {
  console.log('Running callback email cron job at 12am...');
  try {
    const res = await fetch('http://localhost:3000/api/cron/callBackEmail');
    const data = await res.json();
    console.log('Callback email response:', data);
  } catch (err) {
    console.error('Callback email cron error:', err);
  }
});
