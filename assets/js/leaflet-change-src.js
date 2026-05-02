function changePDF(pdfPath) {
    const viewer =document.getElementById('pdf-link');
    const link =document.getElementById('pdf-link-download')
    const embed = document.getElementById('pdf-embed');
     
     viewer.data = pdfPath;
     link.href = pdfPath;
     embed.src = pdfPath;
    }