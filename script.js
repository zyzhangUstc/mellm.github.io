async function sendRequest() {
  const input = document.getElementById('input-text').value;
  const response = await fetch('https://你的api地址/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: input })
  });

  const data = await response.json();
  document.getElementById('result').textContent = '预测结果: ' + data.prediction;
}
