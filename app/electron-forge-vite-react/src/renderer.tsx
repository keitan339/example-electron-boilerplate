import { createRoot } from "react-dom/client";
import { App } from "./web/app";
import "./index.css";

const root = createRoot(document.getElementById("root") as Element);
root.render(<App />);
