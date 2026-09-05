import type { ContactInfo } from "../types";

export const contactInfo: ContactInfo = {
  name: "Centrum Zdrowia Psychicznego i Mowy Harmonia",
  address: {
    street: "ul. Morelowa 3",
    city: "Inowrocław",
    postalCode: "88-100",
  },
  phones: ["789 115 585"],
  facebook: "https://www.facebook.com/share/15jdfMYEbJ/?mibextid=wwXIfr",
  openingHours: {
    weekdays: "Poniedziałek - Piątek: 8:00 - 19:00",
    saturday: "Sobota: 9:00 - 14:00",
    sunday: "Niedziela: Zamknięte",
  },
};

export const phoneHref = (phone: string) => `tel:+48${phone.replace(/\s/g, "")}`;

export const openingHoursRows = Object.values(contactInfo.openingHours).map(
  (line) => {
    const [label, time] = line.split(": ");
    return { label, time };
  },
);
