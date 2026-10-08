function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function buildSubject({ jobRole, company }) {
  return `Referral Request for ${jobRole} at ${company} – Nikhil Sharma`;
}

export function buildPlainText({
  firstName,
  jobRole,
  company,
  jobLink
}) {
  return `Hi ${firstName},

Hope you're doing well.

I’m reaching out to ask if you’d be open to referring me for the ${jobRole} position at ${company}.

Quick Links:

- Job Link: ${jobLink}
- My Resume: https://itsnikhil24.github.io/resume-nikhil/resume.pdf
- My LinkedIn: https://linkedin.com/in/itsnikhil24
- My GitHub: https://github.com/itsnikhil24

Why me?

- T-Shaped Learning Curve Mindset: My goal is to dive deep into core software architecture while building broad expertise across the entire full stack.
- Proven SDE Experience: Built and shipped software end-to-end during my SDE internships.
- Personal Project Highlights: Engineered a video streaming platform with FFmpeg HLS transcoding and a Redis-backed BullMQ queue.
- Hackathon Winner: Won the Community Impact Award at the Devpost Myanmar Flood Response Hackathon.

Thank you for your time and consideration. I would love the opportunity to discuss my application further.

Best Regards,
Nikhil Sharma
+91-8968491353`;
}

export function buildHtml({
  firstName,
  jobRole,
  company,
  jobLink
}) {
  const safeFirstName = escapeHtml(firstName);
  const safeRole = escapeHtml(jobRole);
  const safeCompany = escapeHtml(company);
  const safeJobLink = escapeHtml(jobLink);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />
  <title>Referral Request</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#ffffff;
    color:#222222;
    font-family:Arial,Helvetica,sans-serif;
    font-size:13px;
    line-height:1.4;
    text-align:left;
  "
>
  <div
    style="
      width:100%;
      margin:0;
      padding:0;
      text-align:left;
      font-size:13px;
      line-height:1.4;
    "
  >

    <p
      style="
        margin:0 0 12px 0;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      Hi ${safeFirstName},
    </p>

    <p
      style="
        margin:0 0 12px 0;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      Hope you're doing well.
    </p>

    <p
      style="
        margin:0 0 12px 0;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      I’m reaching out to ask if you’d be open to referring me for the
      <strong>${safeRole}</strong>
      position at
      <strong>${safeCompany}</strong>.
    </p>

    <p
      style="
        margin:0 0 6px 0;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      <strong>Quick Links:</strong>
    </p>

    <ul
      style="
        margin:0 0 12px 18px;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      <li
        style="
          margin:0 0 2px 0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        Job Link:
        <a
          href="${safeJobLink}"
          target="_blank"
          rel="noopener noreferrer"
          style="font-size:13px;"
        >
          ${safeJobLink}
        </a>
      </li>

      <li
        style="
          margin:0 0 2px 0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        My Resume:
        <a
          href="https://itsnikhil24.github.io/resume-nikhil/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style="font-size:13px;"
        >
          https://itsnikhil24.github.io/resume-nikhil/resume.pdf
        </a>
      </li>

      <li
        style="
          margin:0 0 2px 0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        My LinkedIn:
        <a
          href="https://linkedin.com/in/itsnikhil24"
          target="_blank"
          rel="noopener noreferrer"
          style="font-size:13px;"
        >
          https://linkedin.com/in/itsnikhil24
        </a>
      </li>

      <li
        style="
          margin:0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        My GitHub:
        <a
          href="https://github.com/itsnikhil24"
          target="_blank"
          rel="noopener noreferrer"
          style="font-size:13px;"
        >
          https://github.com/itsnikhil24
        </a>
      </li>
    </ul>

    <p
      style="
        margin:0 0 6px 0;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      <strong>Why me?</strong>
    </p>

    <ul
      style="
        margin:0 0 12px 18px;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      <li
        style="
          margin:0 0 2px 0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        <strong>T-Shaped Learning Curve Mindset:</strong>
        My goal is to dive deep into core software architecture while
        building broad expertise across the entire full stack.
      </li>

      <li
        style="
          margin:0 0 2px 0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        <strong>Proven SDE Experience:</strong>
        Built and shipped software end-to-end during my SDE internships.
      </li>

      <li
        style="
          margin:0 0 2px 0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        <strong>Personal Project Highlights:</strong>
        Engineered a video streaming platform with FFmpeg HLS
        transcoding and a Redis-backed BullMQ queue.
      </li>

      <li
        style="
          margin:0;
          padding:0;
          font-size:13px;
          line-height:1.4;
        "
      >
        <strong>Hackathon Winner:</strong>
        Won the Community Impact Award at the Devpost Myanmar Flood
        Response Hackathon.
      </li>
    </ul>

    <p
      style="
        margin:0 0 12px 0;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      Thank you for your time and consideration.
      I would love the opportunity to discuss my application further.
    </p>

    <p
      style="
        margin:0;
        padding:0;
        font-size:13px;
        line-height:1.4;
      "
    >
      Best Regards,<br />
      Nikhil Sharma<br />
      <a
        href="tel:+918968491353"
        style="
          color:#1155cc;
          text-decoration:underline;
          font-size:13px;
        "
      >
        +91-8968491353
      </a>
    </p>

  </div>
</body>
</html>`;
}