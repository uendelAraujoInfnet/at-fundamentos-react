import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";

import styles from "../styles/AddHotel.module.css";

const AddHotel = () => {
  const navigate = useNavigate();

  const [newHotel, setNewHotel] = useState({
    name: "",
    image: "",
    stars: 1,
    city: "",
    state: "",
    price: "",
    description: "",
  });

  const [feedback, setFeedback] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    setNewHotel({
      ...newHotel,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newHotel.name ||
      !newHotel.price ||
      !newHotel.description ||
      !newHotel.city ||
      !newHotel.state
    ) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    const existingHotels = JSON.parse(localStorage.getItem("hotels")) || [];

    const newId =
      existingHotels.length > 0
        ? existingHotels[existingHotels.length - 1].id + 1
        : 1;

    const hotelWithId = { ...newHotel, id: newId };

    const updatedHotels = [...existingHotels, hotelWithId];

    localStorage.setItem("hotels", JSON.stringify(updatedHotels));

    setFeedback({
      open: true,
      message: "Hotel adicionado com sucesso!",
      type: "success",
    });
    //navigate("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, px: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Adicionar Novo Hotel
      </Typography>
      

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nome do Hotel"
            name="name"
            value={newHotel.name}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="URL da Imagem"
            name="image"
            value={newHotel.image}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Classificação (1-5)"
            name="stars"
            type="number"
            value={newHotel.stars}
            onChange={handleChange}
            inputProps={{ min: 1, max: 5 }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Cidade"
            name="city"
            value={newHotel.city}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Estado"
            name="state"
            value={newHotel.state}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Preço da Diária"
            name="price"
            type="number"
            value={newHotel.price}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            variant="outlined"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Descrição"
            name="description"
            value={newHotel.description}
            onChange={handleChange}
            multiline
            rows={4}
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} className={styles.buttonsPage}>
          <Button
            type="submit"
            className={styles.addHotelButton}
            variant="contained"
            sx={{ py: 1.5, mt: 2 }}
            color="success"
          >
            Adicionar Hotel
          </Button>

          <Button
            className={styles.backButton}
            variant="contained"
            onClick={() => navigate("/")}
            sx={{ py: 1.5, mt: 2 }}
            color="primary"
          >
            Voltar 
          </Button>

          <Button
            className={styles.cancelButton}
            variant="contained"
            onClick={() => navigate("/")}
            sx={{ py: 1.5, mt: 2 }}
            color="error"
          >
            Cancelar
          </Button>

          {/* Snackbar de feedback */}
          <Snackbar
            open={feedback.open}
            autoHideDuration={3000}
            onClose={() => setFeedback({ open: false })}
          >
            <Alert severity={feedback.type}>{feedback.message}</Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddHotel;
