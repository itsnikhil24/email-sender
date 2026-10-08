import express from "express";
import emailRoutes from "./routes/emailRoutes.js";
import { verifyEmailTransport } from "./services/emailService.js";

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    name: "Referral Email API",
    endpoints: {
      health: "GET /api/health",
      send: "POST /api/referrals/send"
    }
  });
});

app.use("/api", emailRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found."
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({
      success: false,
      error: "Invalid JSON body."
    });
  }

  return res.status(500).json({
    success: false,
    error: "Internal server error."
  });
});

async function startServer() {
  try {
    await verifyEmailTransport();
    console.log("SMTP connection verified successfully.");

    app.listen(PORT, () => {
      console.log(`Referral Email API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
