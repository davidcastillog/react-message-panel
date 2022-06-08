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
  // Filter unique labels from messages
  const [discipline, setDiscipline] = useState([]);
  const [status, setStatus] = useState([]);
  const [criticality, setCriticality] = useState([]);

  // Messages by Category
  const [disciplineMessages, setDisciplineMessages] = useState([]);
  const [statusMessages, setStatusMessages] = useState([]);
  const [criticalityMessages, setCriticalityMessages] = useState([]);
  const [messagesByDate, setMessagesByDate] = useState([]);
  console.log("byDate", messagesByDate);

  // Setting the unique values of the discipline, status and criticality.
  useEffect(() => {
    const uniqueDiscipline = [
      ...new Set(messages.map((item) => item.discipline)),
    ];

    const uniqueStatus = [...new Set(messages.map((item) => item.status))];

    const uniqueCriticality = [
      ...new Set(messages.map((item) => item.critical)),
    ];

    setDiscipline(uniqueDiscipline);
    setStatus(uniqueStatus);
    setCriticality(uniqueCriticality);
  }, [messages]);

  // Filtering the messages based on the discipline, status and criticality.
  useEffect(() => {
    const disciplineCount = discipline.map((discipline) => {
      return messages.filter((message) => message.discipline === discipline);
    });

    const statusCount = status.map((status) => {
      return messages.filter((message) => message.status === status);
    });

    const criticalityCount = criticality.map((critical) => {
      return messages.filter((message) => message.critical === critical);
    });

    setDisciplineMessages(disciplineCount);
    setStatusMessages(statusCount);
    setCriticalityMessages(criticalityCount);
  }, [messages, discipline, status, criticality]);

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
        sx={{ fontSize: "14px", color: "#4b4b4b", pt: 2, mb: 2 }}
      >
        Disciplines
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        {disciplineMessages.map((disciplineMessage, i) => (
          <Grid
            container
            key={i}
            spacing={12}
            sx={{ display: "flex", direction: "row", alignItems: "center" }}
          >
            <Grid item xs={8} sm={8} className="filter-checkline">
              <FormControlLabel
                key={i}
                control={
                  <Checkbox size="small" color="default" defaultChecked />
                }
                label={disciplineMessage[0].discipline}
                value={disciplineMessage[0].discipline}
                className="checkbox-label"
              />
            </Grid>
            <Grid item xs={4} sm={4} className="progress-bar">
              <QuantityLine value={disciplineMessage.length} />
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
        {statusMessages.map((statusMessage, i) => (
          <Grid
            container
            key={i}
            spacing={12}
            sx={{ display: "flex", direction: "row", alignItems: "center" }}
          >
            <Grid item xs={8} sm={8} className="filter-checkline">
              <FormControlLabel
                key={i}
                control={
                  <Checkbox size="small" color="default" defaultChecked />
                }
                // if the status is "closed" then the label is "Closed requests".
                // If the status is "answered" then the label is "Answers to accept"
                // If the status is "submited" then the label is "Requests to answer".
                label={
                  statusMessage[0].status === "closed"
                    ? "Closed requests"
                    : statusMessage[0].status === "answered"
                    ? "Answers to accept"
                    : statusMessage[0].status === "submited"
                    ? "Request to answer"
                    : statusMessage[0].status
                }
                value={statusMessage[0].status}
                className="checkbox-label"
              />
            </Grid>
            <Grid item xs={4} sm={4} className="progress-bar">
              <QuantityLine value={statusMessage.length} />
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
        {criticalityMessages.map((criticalityMessage, i) => (
          <Grid
            container
            key={i}
            spacing={12}
            sx={{ display: "flex", direction: "row", alignItems: "center" }}
          >
            <Grid item xs={8} sm={8} className="filter-checkline">
              <FormControlLabel
                key={i}
                control={
                  <Checkbox size="small" color="default" defaultChecked />
                }
                // If the criticality is true then the label is "Critical" else "Not Critical"
                label={
                  criticalityMessage[0].critical ? "Critical" : "Not Critical"
                }
                value={criticalityMessage[0].critical}
                className="checkbox-label"
              />
            </Grid>
            <Grid item xs={4} sm={4} className="progress-bar">
              <QuantityLine value={criticalityMessage.length} />
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
        Registration Date
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        <Grid
          container
          spacing={12}
          sx={{ display: "flex", direction: "row", alignItems: "center" }}
        >
          <Grid item xs={8} sm={8} className="filter-checkline">
            <FormControlLabel
              control={<Checkbox size="small" color="default" defaultChecked />}
              label="New ( < 2 weeks )"
              className="checkbox-label"
              value="15"
            />
          </Grid>
          <Grid item xs={4} sm={4} className="progress-bar">
            <QuantityLine value={100} />
          </Grid>
        </Grid>
      </FormGroup>
    </>
  );
};

export default Filters;
