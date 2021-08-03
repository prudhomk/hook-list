import React, { useEffect, useState } from 'react';
import VillagerDetail from '../components/VillagerDetail/VillagerDetail';
import { fetchByVillager } from '../services/villagerApi';
import { useParams } from 'react-router-dom';

const VillagerDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState({});
  const { _id } = useParams();

  useEffect(async () => {
    const villager = await fetchByVillager(_id);
    setVillager(villager);
    setLoading(false);
  }, {});

  if(loading) return <h1>Loading...</h1>;
  return <VillagerDetail villager={villager} />;
};

export default VillagerDetailPage;
