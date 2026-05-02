function changePDF(pdfPath) {
    const viewer =document.getElementById('pdf-link');
    const link =document.getElementById('pdf-link-download')
     viewer.data = pdfPath;
     link.href = pdfPath;
    }