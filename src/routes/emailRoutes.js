import { Router } from "express";
import { sendReferralEmail } from "../services/emailService.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Referral email API is running."
  });
});

router.post("/referrals/send", async (req, res, next) => {
  try {
    const {
      firstNames = [],
      emailAddresses = [],
      company = "",
      jobRole = "",
      jobLink = ""
    } = req.body;

    const sent = [];
    const failed = [];

    // No payload validation or confirmation step.
    // Each recipient is processed independently.
    // If one send fails, the next recipient is attempted immediately.
    for (let i = 0; i < firstNames.length; i += 1) {
      const firstName = firstNames[i];
      const email = emailAddresses[i];

      try {
        const result = await sendReferralEmail({
          firstName,
          email,
          jobRole,
          company,
          jobLink
        });

        sent.push({
          firstName,
          email,
          messageId: result.messageId
        });
      } catch (error) {
        failed.push({
          firstName,
          email,
          error: error instanceof Error ? error.message : String(error)
        });

        console.error(`Failed to send referral email to ${email}:`, error);
      }
    }

    return res.status(200).json({
      success: failed.length === 0,
      message: `Processed ${firstNames.length} recipient(s).`,
      total: firstNames.length,
      sentCount: sent.length,
      failedCount: failed.length,
      sent,
      failed
    });
  } catch (error) {
    next(error);
  }
});

export default router;
