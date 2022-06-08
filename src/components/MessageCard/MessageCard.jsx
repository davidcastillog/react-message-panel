import "./MessageCard.css";
import { ButtonDefault } from "../index";
import { StatusMark } from "../StatusMark/StatusMark";
import { CriticalMark } from "../CriticalMark/CriticalMark";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

export default function MessageCard({ messageSelected, setMessageSelected }) {
  // Change name to N. Lastname format
  const nameFormat = (name) => {
    const oldName = name.split(" ");
    const firstName = oldName[0];
    const lastName = oldName[1];
    return `${firstName[0]}. ${lastName}`;
  };

  // Handle close button on message card
  const handleClose = () => {
    setMessageSelected({});
  };

  return (
    <Card sx={{ width: 350 }} elevation={3}>
      <CardContent>
        <IconButton
          sx={{ position: "relative", left: "280px", top: "15px" }}
          onClick={(e) => handleClose()}
        >
          <CloseIcon color="disabled" />
        </IconButton>
        <Typography sx={{ fontSize: 13, color: "red" }} color="text.secondary">
          {messageSelected.discipline}
        </Typography>
        <Typography
          sx={{ fontSize: 18, color: "black", fontFamily: "Segoe UI" }}
          variant="body1"
        >
          {messageSelected.subject}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
          Sent to:{nameFormat(messageSelected.sentTo.name)}
        </Typography>
        <Typography sx={{ display: "inline-flex", mb: 3 }} variant="body2">
          <StatusMark status={messageSelected.status} />
          <CriticalMark
            isCritical={messageSelected.critical}
            className="message-card-critical"
          />
        </Typography>
        <Divider />
        <Typography
          sx={{ mt: 2, fontSize: 12, color: "black" }}
          color="text.secondary"
        >
          Request:
        </Typography>
        <Grid
          container
          spacing={12}
          sx={{ display: "flex", direction: "row", alignItems: "center" }}
        >
          <Grid item xs={8} sm={8}>
            <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
              {nameFormat(messageSelected.sentTo.name)} (
              {messageSelected.sentTo.company})
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} className="message-card-date">
            <Typography
              sx={{
                mb: 1.5,
                fontSize: 12,
              }}
              color="text.secondary"
            >
              {messageSelected.regDate}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{ mb: 2, fontSize: 12, color: "black" }}
          color="text.secondary"
        >
          {messageSelected.message}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions sx={{ pb: 3, justifyContent: "flex-end" }}>
        <ButtonDefault message={"Answer Request"} />
      </CardActions>
    </Card>
  );
}
