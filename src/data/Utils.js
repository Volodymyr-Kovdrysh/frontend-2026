const getDataFromGoogleAppScripts = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Помилка HTTP ${response.status}`);
  }
  return await response.json();
};

export default getDataFromGoogleAppScripts;
