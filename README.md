# Referral Email Backend

Node.js + Express + Nodemailer backend for sending personalized referral-request emails one recipient at a time.

## Behavior

The `/api/referrals/send` endpoint does not validate the request payload and does not require a confirmation flag. It immediately attempts each email in order. If one email fails, the error is recorded and the next email is attempted.

Recipients are paired by array position:

```text
firstNames[0]       -> emailAddresses[0]
firstNames[1]       -> emailAddresses[1]
firstNames[2]       -> emailAddresses[2]
```

No CC or BCC recipients are used.

## Setup

Use Node.js 20+.

```bash
npm install
cp .env.example .env
npm run dev
```

Configure SMTP credentials in `.env`.

For Gmail, use an App Password rather than your normal account password when SMTP authentication requires it.

## Request

```http
POST /api/referrals/send
Content-Type: application/json
```

```json
{
  "firstNames": ["Aman", "Rohit", "Nik"],
  "emailAddresses": ["aman@gmail.com", "rohit@gmail.com", "nik@gmail.com"],
  "company": "Google",
  "jobRole": "Software Engineer Intern",
  "jobLink": "https://example.com/job"
}
```

## cURL

```bash
curl -X POST http://localhost:5000/api/referrals/send \
  -H "Content-Type: application/json" \
  -d '{
    "firstNames": ["Aman", "Rohit", "Nik"],
    "emailAddresses": ["aman@gmail.com", "rohit@gmail.com", "nik@gmail.com"],
    "company": "Google",
    "jobRole": "Software Engineer Intern",
    "jobLink": "https://example.com/job"
  }'
```

## Response

```json
{
  "success": false,
  "message": "Processed 3 recipient(s).",
  "total": 3,
  "sentCount": 2,
  "failedCount": 1,
  "sent": [
    {
      "firstName": "Aman",
      "email": "aman@gmail.com",
      "messageId": "<message-id>"
    }
  ],
  "failed": [
    {
      "firstName": "Rohit",
      "email": "rohit@gmail.com",
      "error": "SMTP error"
    }
  ]
}
```
