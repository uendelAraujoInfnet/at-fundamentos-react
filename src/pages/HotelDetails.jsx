import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/HotelDetails.module.css";
import { Typography, CardMedia } from '@mui/material';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const hotels = JSON.parse(localStorage.getItem('hotels'));
    const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(id));
    setHotel(selectedHotel);
  }, [id]);

  return hotel ? (
    <div className={styles.hotelDetails}>
      <Typography variant="h4">{hotel.name}</Typography>
      <CardMedia
        component="img"
        width="300"
        image="https://arterreforma.files.wordpress.com/2014/01/dubai.jpg"
        alt={hotel.name}
      />
      <Typography>{`Localização: ${hotel.city}, ${hotel.state}`}</Typography>
      <Typography>{`Preço: R$ ${hotel.price}/noite`}</Typography>
      <Typography>{hotel.description}</Typography>
      <Typography>Estrelas: {hotel.stars}</Typography>
    </div>
  ) : (
    <Typography variant="h5">Hotel não encontrado</Typography>
  );
};

export default HotelDetails;
