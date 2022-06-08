import { QuantityLine } from "../QuantityLine/QuantityLine";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Filters = ({ label, value }) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ color: "red", mb: 3, fontFamily: "Segoe UI" }}
      >
        Request for Information
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ fontSize: "14px", color: "#757575" }}
      >
        Filters
      </Typography>
      <Divider />
      <FormGroup>
        <Grid
          spacing={12}
          sx={{ display: "flex", direction: "row", alignItems: "center" }}
        >
          <Grid item xs={6} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label={label}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <QuantityLine value={value} />
          </Grid>
        </Grid>
      </FormGroup>
    </>
  );
};

export default Filters;
