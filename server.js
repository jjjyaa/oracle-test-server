const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/test', (req, res) => {
  console.log('오라클에서 받은 데이터 건수 :', Array.isArray(req.body) ? req.body.length : 1);
  console.log(req.body); // JSON 전체 출력

  res.json({
    message: '서버에서 JSON 수신 완료',
    receivedCount: Array.isArray(req.body) ? req.body.length : 1
  });
});

app.listen(3000, () => console.log('Server running...'));


