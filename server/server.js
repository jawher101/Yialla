require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();

// Define allowed origins including localhost and Stripe API
const allowedOrigins = [
    "http://localhost:5173",
    "https://merchant-ui-api.stripe.com",
];

// Enable CORS with specific origin and credentials
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use(helmet());

// CSP configuration
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"].concat(allowedOrigins), // Allow scripts from self and Stripe API
        },
    })
);

app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());

app.use(require("./routes"));

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
