document.addEventListener('DOMContentLoaded', () => {
  console.log('📦 OrcaX Core Web 페이지가 로드되었습니다.');
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('이 버튼은 아직 연결되지 않았습니다. 😅');
    });
  });
});
