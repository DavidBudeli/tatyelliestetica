export const WHATSAPP_PHONE = "5541987095659";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Tatyelli! Vim pelo site e gostaria de agendar uma avaliação.";

export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getProcedureWhatsAppUrl(procedureName: string) {
  return getWhatsAppUrl(
    `Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre ${procedureName}.`,
  );
}
