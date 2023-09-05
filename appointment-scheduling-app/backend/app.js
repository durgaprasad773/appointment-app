const express = require('express');

const app = express();

app.get('/api/appointments', (req, res) => {
  // Get all appointments from the database.
  res.send([
    {
      id: 1,
      name: 'John Doe',
      date: '2023-09-08',
      time: '10:00 AM',
    },
    {
      id: 2,
      name: 'Jane Doe',
      date: '2023-09-09',
      time: '11:00 AM',
    },
  ]);
});

app.listen(3000, () => console.log('Server started on port 3000'));
