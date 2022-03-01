import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return <div>Details of {id}</div>;
};

export default Details;
