import React from "react";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import "./index.css";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MantineProvider>
      <FirstTable />

      <SecondTable />
    </MantineProvider>
  </React.StrictMode>
);
