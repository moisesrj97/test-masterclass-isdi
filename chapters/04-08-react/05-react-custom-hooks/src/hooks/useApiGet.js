import { useState } from 'react';
import axios from 'axios';

export const useApiGet = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiGet = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      setData(null);
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, apiGet };
};
