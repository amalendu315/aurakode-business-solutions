import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppCTA() {
  return <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Enquire with AuraKode on WhatsApp"><MessageCircle size={20} strokeWidth={2.2}/><span>Chat on WhatsApp</span></a>;
}
