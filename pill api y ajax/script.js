fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(posts => {
    // Llamada a la función para mostrar los posts
    displayPosts(posts);
  })
  .catch(error => console.error('Error fetching data:', error));

  function displayPosts(posts) {
    const mainContainer = document.getElementById('mainContainer'); // Reemplaza con tu ID de contenedor principal
  
    // Limpiar el contenedor antes de agregar nuevos elementos
    mainContainer.innerHTML = '';
  
    // Crear elementos para cada post y agregarlos al contenedor
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.textContent = post.title;
      mainContainer.appendChild(postElement);
    });
  }

