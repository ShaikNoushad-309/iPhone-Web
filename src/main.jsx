import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://c3155eb95e85668a5f9c92d6dc82fce4@o4509438887657472.ingest.de.sentry.io/4509438940348496",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true
});

// const container = document.getElementById(“app”);
// const root = createRoot(container);
// root.render(<App />);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
