export const WHATSAPP_NUMBER = "916378281761";

export function whatsappUrl(message = "Hi AuraKode, I'd like to discuss a project.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
