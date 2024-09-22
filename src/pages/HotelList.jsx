import React, { useEffect, useState } from "react";
//import hotelData from "../data/hotelData";
import SearchBar from "../components/SearchBar";
import styles from "../styles/HotelList.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Box,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOption, setSortOption] = useState("");

  const [choosedHotels, setChoosedHotels] = useState([...hotels]);

  const [favorites, setFavorites] = useState([]);

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortOption === "") return 0;

    if (sortOption === "price") {
      return a.price - b.price;
    } else {
      return b.stars - a.stars;
    }
  });

  useEffect(() => {
    const storedHotels =
      JSON.parse(localStorage.getItem("hotels")) || hotelData;
    localStorage.setItem("hotels", JSON.stringify(storedHotels));
    setHotels(storedHotels);
  }, []);

  useEffect(() => {
    let sorted = [...hotels];
    if (sortOption === "price") {
      sorted.sort((a, b) => a.price - b.price); // Ordena por preço
    } else if (sortOption === "stars") {
      sorted.sort((a, b) => b.stars - a.stars); // Ordena por classificação
    }
    setChoosedHotels(sorted); // Atualiza os hotéis ordenados
  }, [sortOption, hotels]);

  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setHotels(storedHotels);
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleDelete = (id) => {
    const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
    const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    setHotels(updatedHotels);
  };

  return (
    <div>
      <Box sx={{ mt: 4 }}>
        <div className={styles.buttonAddNewHotel}>
          {/* Componente de busca */}
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="add-new-hotel"
            sx={{ py: 1.5, mt: 2 }}
            fullWidth
          >
            Adicionar Novo Hotel
          </Button>
        </div>

        {/* Exibição dos hotéis filtrados apenas se houver busca */}
        {searchTerm && (
          <Grid container spacing={2}>
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://carter.eu/wp-content/uploads/2024/02/Atlantis-The-Royal-najbardziej-luksusowe-hotele-w-Dubaju-ekskluzywne-wakacje-w-Dubaju-luksusowa-podroz-do-Dubaju-najlepsze-hotele-w-Dubaju-ultraekskluzywne-wczasy-w-Dubaju-11.jpg"
                      alt={hotel.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {hotel.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {hotel.city}, {hotel.state}
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                        R$ {hotel.price} / diária
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="success" variant="contained">
                        <Link to={`/hotel/${hotel.id}`}>Ver Detalhes</Link>
                      </Button>
                      <Button size="small" color="primary" variant="contained">
                        <Link to={`/edit-hotel/${hotel.id}`}>Editar Hotel</Link>
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => handleDelete(hotel.id)}
                      >
                        Remover Hotel
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" sx={{ mt: 2 }}>
                Nenhum hotel encontrado.
              </Typography>
            )}
          </Grid>
        )}
      </Box>

      <Grid container spacing={2}>
        {hotels.map((hotel) => (
          <Grid item key={hotel.id} xs={12} sm={6} md={4}></Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        {/* Componente para escolher a ordenação */}
        <select
          className={styles.optionSelect}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="" selected>
            Selecione a Opção Desejada
          </option>
          <option value="price">Ordenar por Preço</option>
          <option value="stars">Ordenar por Classificação</option>
        </select>

        {/* Exibição dos hotéis ordenados */}

        {sortOption && (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {sortedHotels.length > 0 ? (
              sortedHotels.map((hotel) => (
                <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://carter.eu/wp-content/uploads/2024/02/Atlantis-The-Royal-najbardziej-luksusowe-hotele-w-Dubaju-ekskluzywne-wakacje-w-Dubaju-luksusowa-podroz-do-Dubaju-najlepsze-hotele-w-Dubaju-ultraekskluzywne-wczasy-w-Dubaju-11.jpg"
                      alt={hotel.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {hotel.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {hotel.city}, {hotel.state}
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                        R$ {hotel.price} / diária
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Classificação: {hotel.stars} estrelas
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="success" variant="contained">
                        <Link to={`/hotel/${hotel.id}`}>Ver Detalhes</Link>
                      </Button>
                      <Button size="small" color="primary" variant="contained">
                        <Link to={`/edit-hotel/${hotel.id}`}>Editar Hotel</Link>
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => handleDelete(hotel.id)}
                      >
                        Remover Hotel
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" sx={{ mt: 2 }}>
                Nenhum hotel encontrado.
              </Typography>
            )}
          </Grid>
        )}
      </Box>

      <div className={styles.hotelList}>
        {hotels.map((hotel) => (
          <Card key={hotel.id} className={styles.hotelCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://carter.eu/wp-content/uploads/2024/02/Atlantis-The-Royal-najbardziej-luksusowe-hotele-w-Dubaju-ekskluzywne-wakacje-w-Dubaju-luksusowa-podroz-do-Dubaju-najlepsze-hotele-w-Dubaju-ultraekskluzywne-wczasy-w-Dubaju-11.jpg"
                alt={hotel.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {`${hotel.city}, ${hotel.state}`}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {`Preço: R$ ${hotel.price}/noite`}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {`Estrelas: ${hotel.stars}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="success" variant="contained">
                <Link to={`/hotel/${hotel.id}`}>Ver Detalhes</Link>
              </Button>
              <Button size="small" color="primary" variant="contained">
                <Link to={`/edit-hotel/${hotel.id}`}>Editar Hotel</Link>
              </Button>
              <Button
                size="small"
                color="error"
                variant="contained"
                onClick={() => handleDelete(hotel.id)}
              >
                Remover Hotel
              </Button>
            </CardActions>

            <Button
              onClick={() => toggleFavorite(hotel.id)}
              color="secondary"
              variant="contained"
              fullWidth
            >
              {favorites.includes(hotel.id)
                ? "Remover dos Favoritos"
                : "Adicionar aos Favoritos"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
