import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

function EditHotel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState({
    name: "",
    image: "",
    stars: 1,
    city: "",
    state: "",
    price: 0,
    description: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
    const hotelToEdit = hotels[id-1];
    if (hotelToEdit) {
      setHotel(hotelToEdit);
    }
  }, []);

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!hotel.name) newErrors.name = "Nome é obrigatório";
    if (!hotel.city) newErrors.city = "Cidade é obrigatória";
    if (!hotel.state) newErrors.state = "Estado é obrigatório";
    if (hotel.price <= 0) newErrors.price = "O preço deve ser maior que 0";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
      hotels[id] = hotel;
      localStorage.setItem("hotels", JSON.stringify(hotels));
      navigate("/at-fundamentos-react/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Editar Hotel
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nome"
            name="name"
            fullWidth
            value={hotel.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Imagem (URL)"
            name="image"
            fullWidth
            value={hotel.image}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Classificação (Estrelas)</InputLabel>
            <Select
              label="Classificação (Estrelas)"
              name="stars"
              value={hotel.stars}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <MenuItem key={star} value={star}>
                  {star}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Cidade"
            name="city"
            fullWidth
            value={hotel.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Estado"
            name="state"
            fullWidth
            value={hotel.state}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Preço"
            name="price"
            fullWidth
            type="number"
            value={hotel.price}
            onChange={handleChange}
            error={!!errors.price}
            helperText={errors.price}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Descrição"
            name="description"
            fullWidth
            multiline
            rows={4}
            value={hotel.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="success"
            fullWidth
            sx={{ py: 1.5, mt: 2 }}
          >
            Atualizar Hotel
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/at-fundamentos-react/")}
            sx={{ py: 1.5, mt: 2 }}
            color="error"
          >
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditHotel;
