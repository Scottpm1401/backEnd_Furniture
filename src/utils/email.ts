import { sendEmail } from '../library/Mailer';

const SubscriptionText = `We are delighted to welcome you to Comfysloth, the online store for cozy and stylish furniture. Thank you for subscribing to our newsletter and joining our community of happy customers.

As a subscriber, you will receive exclusive offers, discounts, tips, and updates on our latest products and services. You will also be the first to know about our upcoming events and promotions.

To start browsing our catalog, please visit our website at https://furniture-website-nu.vercel.app. You can also follow us on social media to get inspired by our designs and reviews.

If you have any questions or feedback, please feel free to contact us at https://furniture-website-nu.vercel.app/contact or call us at +1-800-123-4567. We are always happy to hear from you and assist you with your needs.

We hope you enjoy your Comfysloth experience and find the perfect furniture for your home.

Sincerely,

The Comfysloth Team`;

const ResetPasswordText = (token: string) => `Hello,

We received a request to reset your password for your Comfysloth account. If you did not make this request, please ignore this email. Otherwise, please click the link below to set a new password:

https://furniture-website-nu.vercel.app/reset_password?code=${token}

This link will expire in 15 minutes.

If you have any questions or need assistance, please contact us at:

https://furniture-website-nu.vercel.app/contact

Thank you for choosing Comfysloth for your furniture needs!

Sincerely, The Comfysloth Team`;

export const sendSubscriptionEmail = (email: string) => {
  return sendEmail(
    email,
    'Thank you for subscribing to Comfysloth!',
    SubscriptionText
  );
};

export const sendResetPasswordEmail = (email: string, token: string) => {
  return sendEmail(
    email,
    'Reset your password for Comfysloth',
    ResetPasswordText(token)
  );
};
