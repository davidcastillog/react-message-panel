import "./Filters.css";
import { useState, useEffect } from "react";
import { QuantityLine } from "../QuantityLine/QuantityLine";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Filters = ({ messages }) => {
  // Filter unique labels from messages to use in the filter panel
  const [discipline, setDiscipline] = useState([]);
  const [status, setStatus] = useState([]);
  const [criticality, setCriticality] = useState([]);

  // Messages by Category
  const [disciplineMessages, setDisciplineMessages] = useState([]);
  const [statusMessages, setStatusMessages] = useState([]);
  const [criticalityMessages, setCriticalityMessages] = useState([]);

  // Messages by Date
  const [messagesByDate, setMessagesByDate] = useState([]);
  console.log("Date", messagesByDate);

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

  // Filter messages by date (15 days, 180 days, 1 year)
  useEffect(() => {
    const newDate = new Date(); // Get current date
    const dateCount = [
      messages.filter((message) => {
        const date = new Date(message.regDate); // Convert date to format DD.MM.YYYY
        const diff = newDate - date; // Get difference between current date and date of message
        return diff < 15 * 24 * 60 * 60 * 1000; // Less than 15 days
      }),
      messages.filter((message) => {
        const date = new Date(message.regDate);
        const diff = newDate - date;
        return diff < 180 * 24 * 60 * 60 * 1000; // Less than 180 days
      }),
      messages.filter((message) => {
        const date = new Date(message.regDate);
        const diff = newDate - date;
        return diff < 365 * 24 * 60 * 60 * 1000; // Less than 1 year
      }),
    ];
    setMessagesByDate(dateCount);
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
              <QuantityLine
                value={disciplineMessage.length}
                totalMessages={messages.length}
                category={disciplineMessage[0].discipline}
              />
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
              <QuantityLine
                value={statusMessage.length}
                totalMessages={messages.length}
                category={statusMessage[0].status}
              />
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
              <QuantityLine
                value={criticalityMessage.length}
                totalMessages={messages.length}
                category={criticalityMessage[0].critical}
              />
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
        {messagesByDate.map((messagesByDateMessage, i) => (
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
                label={
                  i === 0
                    ? "New (< 15 days)"
                    : i === 1
                    ? "(< 180 days)"
                    : "(< 1 year)"
                }
                className="checkbox-label"
              />
            </Grid>
            <Grid item xs={4} sm={4} className="progress-bar">
              <QuantityLine
                value={messagesByDateMessage.length}
                totalMessages={messages.length}
              />
            </Grid>
          </Grid>
        ))}
      </FormGroup>
    </>
  );
};

export default Filters;
