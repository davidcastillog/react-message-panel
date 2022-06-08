import { ButtonDefault } from "../index"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Grid from "@mui/material/Grid";

const RequestBar = () => {
  return (
    <>
      <Grid item sm={12} sx={{ display: "flex", justifyContent: "flex-end", pr:2 }}>
        <FileDownloadOutlinedIcon sx={{ mr: 4 }} color="error" />
        <ButtonDefault message={"Add request"} />
      </Grid>
    </>
  );
};

export default RequestBar;
