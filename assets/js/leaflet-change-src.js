function changePDF(pdfPath) {
    const viewer =document.getElementById('pdf-link');
    const link =document.getElementById('pdf-link-download')
    const embed = document.getElementById('pdf-embed');
     embed.src = pdfPath;
     viewer.data = pdfPath;
     link.href = pdfPath;
    }