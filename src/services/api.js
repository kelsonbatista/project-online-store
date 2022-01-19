export async function getCategories() {
  try {
    const fetchRequest = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await fetchRequest.json();
    return data;
  } catch (error) {
    return `An error has ocurred: ${error}`;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const fetchRequest = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const data = fetchRequest.json();
    return data;
  } catch (error) {
    return `An error has ocurred: ${error}`;
  }
}
