import BasicCard from "./Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const CardList = ({title}) => {
  return (
    <>
        <h2>{title}</h2>
      <Box className="caja" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              title={"Remera seleccion XL"}
              price={"$15.000"}
              image="camiseta.webp"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              title={"Remera seleccion L"}
              price={"$13.000"}
              image="camiseta.webp"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              title={"Campera M"}
              price={"$12.000"}
              image="campera.webp"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              title={"Campera S"}
              price={"$10.000"}
              image="campera.webp"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardList;
