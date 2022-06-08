import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Avatar from "@mui/material/Avatar";

export const StatusMark = ({ status }) => {
  return (
    <>
      {status === "answered" && (
        <Avatar
          sx={{
            width: 25,
            height: 25,
            backgroundColor: "white",
            borderColor: "#ccc",
            borderStyle: "solid",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></Avatar>
      )}
      {status === "closed" && (
        <Avatar
          sx={{
            width: 25,
            height: 25,
            backgroundColor: "white",
            borderColor: "#ccc",
            borderStyle: "solid",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 22 }} color="action" />
        </Avatar>
      )}
      {status === "submited" && (
        <Avatar
          sx={{
            width: 25,
            height: 25,
            backgroundColor: "white",
            borderColor: "#ccc",
            borderStyle: "solid",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 22 }} color="disabled" />
        </Avatar>
      )}
    </>
  );
};