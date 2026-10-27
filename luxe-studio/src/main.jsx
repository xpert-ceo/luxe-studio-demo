import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { business } from "./config/business";
import "./index.css";

// Apply brand colours from config
const t = business.theme;
const s = document.documentElement.style;
s.setProperty("--c-bg", t.bg); s.setProperty("--c-text", t.text); s.setProperty("--c-muted", t.muted);
s.setProperty("--c-accent", t.accent); s.setProperty("--c-surface", t.surface);
s.setProperty("--c-border", t.border); s.setProperty("--c-taupe", t.taupe);
document.title = `${business.name} | Premium Salon & Beauty Studio`;

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
