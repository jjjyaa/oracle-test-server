const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Oracle JSON 테스트 서버 🚀');
});

app.post('/api/test', (req, res) => {
  console.log('Oracle에서 받은 데이터:', req.body);
  res.json({
    message: '서버에서 JSON 응답 완료!',
    received: req.body
  });
});

app.listen(3000, () => console.log('Server running...'));
