import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import BooksContext from "./Books";
import {Provider} from "./Books.js";
const el=document.querySelector("#root");
const root=ReactDom.createRoot(el);
root.render(
<BooksContext.Provider>
    <App />
</BooksContext.Provider>
);