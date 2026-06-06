document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.querySelector('.share-btn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Vista Iliniza Lodge',
                    text: 'Visita Vista Iliniza Lodge en Toacazo - Latacunga',
                    url: window.location.href,
                })
                .then(() => console.log('Compartido con éxito'))
                .catch((error) => console.log('Error al compartir', error));
            } else {
                alert('Copia el enlace de tu navegador para compartir la página.');
            }
        });
    }
});