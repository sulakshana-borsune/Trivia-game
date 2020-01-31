// Fetches API for Categorie Drop Down
fetch('https://opentdb.com/api_category.php')
  .then(r => r.json())
  .then(({ trivia_categories: categories }) => {
    categories.forEach(({ id, name }) => {
      let categoriesElem = document.createElement('li')
      categoriesElem.textContent = `${name}`
      document.getElementById('categories').append(categoriesElem)
      })
  })
  .catch(e => console.error(e))




