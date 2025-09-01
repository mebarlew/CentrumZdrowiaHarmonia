import type { ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  name: "Centrum Zdrowia Psychicznego i Mowy Harmonia",
  address: {
    street: "ul. Morelowa 3",
    city: "Inowrocław", 
    postalCode: "88-100"
  },
  phones: ["505 636 848", "510 056 057", "519 763 554"],
  facebook: "https://www.facebook.com/share/15jdfMYEbJ/?mibextid=wwXIfr",
  openingHours: {
    weekdays: "Poniedziałek - Piątek: 8:00 - 20:00",
    saturday: "Sobota: 9:00 - 14:00", 
    sunday: "Niedziela: Zamknięte"
  }
};