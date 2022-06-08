import "./Filters.css";
import { useState, useEffect } from "react";
import { QuantityLine } from "../QuantityLine/QuantityLine";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Filters = ({ messages, setFilteredMessages }) => {
  const [discipline, setDiscipline] = useState([]);
  const [status, setStatus] = useState([]);
  const [criticality, setCriticality] = useState([]);

  // Filter unique keys from array to display categories in filter checkboxes
  useEffect(() => {
    const uniqueDiscipline = [
      ...new Set(messages.map((message) => message.discipline)),
    ];
    const uniqueStatus = [
      ...new Set(
        messages.map((message) => {
          if (message.status === "answered") {
            return "Request to answer";
          } else if (message.status === "submited") {
            return "Closed requests";
          } else {
            return "Answers to accept";
          }
        })
      ),
    ];
    const uniqueCriticality = [
      ...new Set(
        messages.map((message) => {
          if (!message.critical) {
            return "Not Critical";
          } else {
            return "Critical";
          }
        })
      ),
    ];
    setDiscipline(uniqueDiscipline);
    setStatus(uniqueStatus);
    setCriticality(uniqueCriticality);
  }, [messages]);

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
        sx={{ fontSize: "14px", color: "#4b4b4b", mb: 2 }}
      >
        Filters
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontSize: "14px", color: "#4b4b4b", pt: 2, mb:2 }}
      >
        Disciplines
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        {discipline.map((discipline) => (
          <Grid
            container
            key={discipline}
            spacing={12}
            sx={{ display: "flex", direction: "row", alignItems: "center" }}
          >
            <Grid item xs={8} sm={8} className="filter-checkline">
              <FormControlLabel
                control={<Checkbox size="small" color="default" defaultChecked />}
                label={discipline}
                className="checkbox-label"
                value={discipline}
              />
            </Grid>
            <Grid item xs={4} sm={4} className="progress-bar">
              <QuantityLine value={80} />
            </Grid>
          </Grid>
        ))}
      </FormGroup>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontSize: "14px", color: "#4b4b4b", pt: 2 }}
      >
        Status
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        {status.map((status) => (
          <Grid
            container
            key={status}
            spacing={12}
            sx={{ display: "flex", direction: "row", alignItems: "center" }}
          >
            <Grid item xs={8} sm={8} className="filter-checkline">
              <FormControlLabel
                control={<Checkbox size="small" color="default" defaultChecked />}
                label={status}
                className="checkbox-label"
                value={status}
              />
            </Grid>
            <Grid item xs={4} sm={4} className="progress-bar">
              <QuantityLine value={80} />
            </Grid>
          </Grid>
        ))}
      </FormGroup>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontSize: "14px", color: "#4b4b4b", pt: 2 }}
      >
        Criticality
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        {criticality.map((criticality) => (
          <Grid
            container
            key={criticality}
            spacing={12}
            sx={{ display: "flex", direction: "row", alignItems: "center" }}
          >
            <Grid item xs={8} sm={8} className="filter-checkline">
              <FormControlLabel
                control={<Checkbox size="small" color="default" defaultChecked />}
                label={criticality}
                className="checkbox-label"
                value={criticality}
              />
            </Grid>
            <Grid item xs={4} sm={4} className="progress-bar">
              <QuantityLine value={80} />
            </Grid>
          </Grid>
        ))}
      </FormGroup>
    </>
  );
};

export default Filters;
