import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail({ data }) {
  const { id } = useParams();
  return (
    <div>
      {data.map((pDetail) =>
        pDetail.id === parseInt({ id }) ? (
          <p> {pDetail.title} </p>
        ) : (
          console.log(parseInt(id))
        )
      )}
    </div>
  );
}
