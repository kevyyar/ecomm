export const formatPhoneNumber = (value: string): string => {
  let cleaned = value.replace(/\D/g, '');
  cleaned = cleaned.slice(0, 10);
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    return [match[1], match[2], match[3]].filter(Boolean).join('-');
  }
  return cleaned;
};