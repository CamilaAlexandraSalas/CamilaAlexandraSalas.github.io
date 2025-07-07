function downloadPDF() {
  const element = document.getElementById("cv");
  const opt = {
    margin: 0.5,
    filename: 'CV_CamilaSalas.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fill').forEach(el => {
    const width = el.style.width;
    el.style.width = '0';
    setTimeout(() => {
      el.style.width = width;
    }, 300);
  });
});
