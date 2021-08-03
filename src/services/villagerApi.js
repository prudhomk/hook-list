export const fetchVillager = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const json = await res.json();

  return json;
};

export const fetchByVillager = async (_id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`);
  const json = await res.json();
  console.log(json);
  return json;
};
