import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Suvil Kaushik UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "green" }}>This is a header</h1>
            <img
                className="App-image"
                src={require("../src/IMG_7035.jpg")}
                alt="A picture of my bike"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
            <ul>
                <li>Blue</li>
                <li>Off-white</li>
                <li>Green</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
