import { useEffect, useState } from "react";
import {
  TableOfMessages,
  RequestBar,
  MessageCard,
  Filters,
  PaginationMU,
} from "../components";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const Home = () => {
  const [messages, setMessages] = useState([]);
  const [messagesPaginated, setMessagesPaginated] = useState([]);
  const [messageSelected, setMessageSelected] = useState({});
  const [panelWidth, setPanelWidth] = useState(10);

  // Handle grid size when a message is selected
  const handleNewWindow = () => {
    if (messageSelected.num) {
      setPanelWidth(6);
    } else {
      setPanelWidth(9);
    }
  };

  useEffect(() => {
    handleNewWindow();
  }, [messageSelected]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ pt: 3, pb: 3 }}>
        <Grid container spacing={12}>
          <Grid
            item
            xs={12}
            sm={3}
            style={{ maxHeight: "100vh", overflow: "auto" }}
          >
            <Filters label={"Label"} value={0} messages={messages} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={panelWidth}
            style={{ maxHeight: "100vh", overflow: "auto" }}
            className="panel-grid"
          >
            <RequestBar />
            <TableOfMessages
              messages={messagesPaginated}
              setMessages={setMessages}
              messageSelected={messageSelected}
              setMessageSelected={setMessageSelected}
            />
            <Grid container justifyContent="center" paddingTop={2}>
              <PaginationMU
                messages={messages}
                setMessagesPaginated={setMessagesPaginated}
              />
            </Grid>
          </Grid>
          {messageSelected.num && (
            <Grid
              item
              xs={12}
              sm={3}
              className="panel-grid"
              style={{ maxHeight: "100vh", overflow: "auto" }}
            >
              <MessageCard
                messageSelected={messageSelected}
                setMessageSelected={setMessageSelected}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};
