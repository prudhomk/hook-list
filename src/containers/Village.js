import React, { useEffect, useState } from 'react';
import VillagerList from '../components/VillagerList/VillagerList';
import { fetchVillager } from '../services/villagerApi';

const Village = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(async () => {
    const villagers = await fetchVillager();
    setVillagers(villagers);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return <VillagerList villagers={villagers} />;
};

export default Village;

