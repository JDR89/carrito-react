import BasicCard from "./Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const CardList = ({items}) => {

  return (
    <>
    
      <Box className="caja" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
          items.map((e) => {
            
            return (
              <Grid item xs={12} sm={6} md={3} key={e.id}>
                <BasicCard
                  title={e.title}
                  price={e.price}
                  image={e.image}
                  stock={e.stock}
                  id={e.id}
                />
              </Grid>
            );
          })
          }
        </Grid>
      </Box>
    </>
  );
};

export default CardList;
