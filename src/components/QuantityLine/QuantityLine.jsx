import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const QuantityLine = ({ value }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[100],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#aaaaaa",
    },
  }));

  return (
    <>
      <Grid
        container
        sx={{ display: "flex", direction: "row", alignItems: "center" }}
      >
        <Grid item xs={10} sm={10}>
          <BorderLinearProgress variant="determinate" value={value} />
        </Grid>
        <Grid item xs={2} sm={2}>
          <Typography
            style={{ display: "inline-block" }}
            variant="body2"
            color="text.secondary"
          >{`${Math.round(value)}`}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default QuantityLine;
