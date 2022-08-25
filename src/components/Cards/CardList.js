import BasicCard from "./Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



const CardList = () => {
  return (
    <>
        
      <Box className="caja" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
            title={"Remera seleccion XL"}
            price={"$15.000"}
            image="camiseta.webp"
            stock={9}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              title={"Remera seleccion L"}
              price={"$13.000"}
              image="camiseta.webp"
              stock={6}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              title={"Campera M"}
              price={"$12.000"}
              image="campera.webp"
              stock={7}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              title={"Campera S"}
              price={"$10.000"}
              image="campera.webp"
              stock={5}
            />
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default CardList;
