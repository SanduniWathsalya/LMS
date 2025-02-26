import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { fullName, email, role } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use SMTP
    auth: {
      user: process.env.EMAIL_USER, // Admin email
      pass: process.env.EMAIL_PASS, // App password (not personal password)
    },
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'edupulseschools@gmail.com', // Replace with admin email
      subject: 'New User Registration Request',
      text: `Hello Admin,\n\nA new user has registered on eduPulse.\n\nFull Name: ${fullName}\nEmail: ${email}\nRole: ${role}\n\nPlease review and approve the registration.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Registration email sent successfully.' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
}
