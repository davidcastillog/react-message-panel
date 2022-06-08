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
    <Card sx={{ width: 350 }}>
      <CardContent>
        <IconButton
          sx={{ position: "relative", left: "275px"}}
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
          <CriticalMark isCritical={messageSelected.critical} />
        </Typography>
        <Divider />
        <Typography
          sx={{ mt: 2, fontSize: 12, color: "black" }}
          color="text.secondary"
        >
          Request:
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
          {nameFormat(messageSelected.sentTo.name)} (
          {messageSelected.sentTo.company})
          <Typography
            sx={{
              fontSize: 12,
              color: "disable",
              display: "flex",
              textAlign: "right",
            }}
          >
            {messageSelected.regDate}
          </Typography>
        </Typography>
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
