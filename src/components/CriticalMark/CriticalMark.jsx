import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

export const CriticalMark = ({ isCritical }) => {
  return (
    <>
      {isCritical && <WarningRoundedIcon sx={{ fontSize: 25 }} color="error" />}
    </>
  );
};