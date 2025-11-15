import React from "react"
import { createRoot } from "react-dom/client"
import App from './components/App'
import "./styles/global.css"

const reactContentRoot = document.getElementById("root")
const root = createRoot(reactContentRoot)


root.render(<App />)

