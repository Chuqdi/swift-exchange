import { WHATSAPP_LINK } from '../lib/constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function FloatingWhatsApp() {
  return (
    <a
      className="float-wa"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}