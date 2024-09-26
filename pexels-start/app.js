const loadImagesButton = document.getElementById('load-images');

loadImagesButton.addEventListener('click', function () {
    fetch('https://api.pexels.com/v1/search?query=hamsters', {
        headers: {
            Authorization: '0X9cJG6npzf5QXgrBWO7Mw93O9W1PvcSNCmduUaLSW5nwLmPWs08qyM4'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('la risposta non era ok');
            }
            return response.json();
        })
        .then(data => {
            const container = document.querySelector('.album .row');
            container.innerHTML = '';

            data.photos.forEach(photo => {
                const cardHTML = `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.alt || 'Hamster'}" />
            <div class="card-body">
              <h5 class="card-title">${photo.alt || 'Hamster Image'}</h5>
              <p class="card-text">
                Questa è una bella immagine di un criceto.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">Just now</small>
              </div>
            </div>
          </div>
        </div>
      `;
                container.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error('Error loading images:', error));
});
