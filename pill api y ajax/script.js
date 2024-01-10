document.addEventListener('DOMContentLoaded', function () {
    // Obtener datos de la API
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(posts => {
            // Llamada a la función para mostrar los posts
            displayPosts(posts);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayPosts(posts) {
    const postList = document.getElementById('postList');

    // Limpiar el contenedor antes de agregar nuevos elementos
    postList.innerHTML = '';

    // Crear elementos para cada post y agregarlos al contenedor
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'cursor-pointer');
        listItem.textContent = post.title;
        listItem.addEventListener('click', () => displayPostDetails(post));
        postList.appendChild(listItem);
    });
}

function displayPostDetails(post) {
    // Actualizar contenido del modal con detalles del post
    document.getElementById('postTitle').textContent = post.title;
    document.getElementById('postBody').textContent = post.body;

    // Mostrar el modal
    const postModal = new bootstrap.Modal(document.getElementById('postModal'));
    postModal.show();
}




