export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`https://api.github.com/search/users?${params}`);
  const { items } = await response.json();

  return items;
};
