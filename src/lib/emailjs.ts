import emailjs from "@emailjs/browser";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  location: string;
  business_name: string;
  business_sector: string;
  comments?: string;
  time: string;
  source_button?: string;
  form_source_page?: string;
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export const sendContactEmail = async (
  payload: ContactEmailPayload
): Promise<void> => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS env vars are missing. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
    );
  }

  await emailjs.send(serviceId, templateId, payload, publicKey);
};
