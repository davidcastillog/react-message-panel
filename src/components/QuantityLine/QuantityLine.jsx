import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const QuantityLine = ({ value, category }) => {
  // Adjust the color of the progress bar based on the category
  const colorByCategory = (category) => {
    switch (category) {
      case true:
        return "red";
      case "closed":
        return "#505050";
      case "submited":
        return "#ffffff";
      default:
        return "#b1b1b1";
    }
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[100],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorByCategory(category),
      // Border left and right
      border: `1px solid ${theme.palette.grey[200]}`,
    },
  }));

  return (
    <>
      <Grid
        container
        sx={{ display: "flex", direction: "row", alignItems: "center" }}
      >
        <Grid item xs={10} sm={10}>
          <BorderLinearProgress variant="determinate" value={Math.round(value)} />
        </Grid>
        <Grid item xs={2} sm={2}>
          <Typography
            style={{ display: "inline-block", fontSize: 12 }}
            variant="body2"
            color="text.secondary"
          >{`${Math.round(value)}`}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default QuantityLine;
