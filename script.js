const searchBar = document.getElementById('searchBar');
const posts = document.querySelectorAll('.post');

searchBar.addEventListener('input', function () {
  const searchText = this.value.toLowerCase();

  posts.forEach(post => {
    const title = post.querySelector('.title').textContent.toLowerCase();
    const content = post.textContent.toLowerCase();

    if (title.includes(searchText) || content.includes(searchText)) {
      post.style.display = '';
    } else {
      post.style.display = 'none';
    }
  });
});
