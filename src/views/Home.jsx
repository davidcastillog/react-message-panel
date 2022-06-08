import { useEffect, useState } from "react";
import {
  TableOfMessages,
  RequestBar,
  MessageCard,
  Filters,
} from "../components";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const Home = () => {
  const [messages, setMessages] = useState([]);
  const [messageSelected, setMessageSelected] = useState({});
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [panelWidth, setPanelWidth] = useState(10);
  console.log(messages)

  // Handle new window when message is selected
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
      <Container maxWidth="xl" sx={{ p: 3 }}>
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
              messages={messages}
              setMessages={setMessages}
              messageSelected={messageSelected}
              setMessageSelected={setMessageSelected}
            />
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
