import type { PriceCategory } from "../types";

export const pricingData: PriceCategory[] = [
  {
    id: "speech-therapy",
    title: "Logopedia | Neurologopedia | Terapia Miofunkcjonalna",
    items: [
      {
        id: "diagnosis",
        name: "Diagnoza logopedyczna / neurologopedyczna",
        duration: "1-2 spotkania, ok. 60 min",
        price: 220,
        description: "Cena za spotkanie",
      },
      {
        id: "therapy",
        name: "Terapia logopedyczna",
        duration: "45 min",
        price: 150,
      },
      {
        id: "neuro-therapy",
        name: "Terapia neurologopedyczna",
        duration: "45 min",
        price: 150,
      },
      {
        id: "myo-therapy",
        name: "Terapia miofunkcjonalna",
        duration: "45 min",
        price: 150,
      },
      {
        id: "electrostimulation",
        name: "Elektrostymulacja",
        duration: "25 min",
        price: 80,
      },
      {
        id: "electrostimulation-first",
        name: "Pierwsza sesja elektrostymulacji (kwalifikacja)",
        duration: "ok. 45 min",
        price: 100,
      },
      {
        id: "massage-logo",
        name: "Masaż logopedyczny / twarzy",
        price: 80,
      },
      {
        id: "massage-tension",
        name: "Masaż redukujący napięcie mięśniowe",
        price: 100,
      },
      {
        id: "opinion",
        name: "Opinia logopedyczna / neurologopedyczna",
        price: 150,
        priceFrom: true,
        description:
          "Usługa dodatkowo płatna — cena zależy od zakresu i celu opinii (np. dla szkoły, poradni, sądu)",
      },
    ],
    packages: [
      {
        id: "speech-5",
        name: "Pakiet 5 terapii",
        sessions: 5,
        price: 700,
        validityMonths: 3,
        savings: 50,
      },
      {
        id: "speech-10",
        name: "Pakiet 10 terapii",
        sessions: 10,
        price: 1350,
        validityMonths: 3,
        savings: 150,
      },
    ],
  },
  {
    id: "psychology",
    title: "Psychologia | Psychotraumatologia",
    items: [
      {
        id: "psych-diagnosis",
        name: "Diagnoza psychologiczna (pierwsza wizyta)",
        duration: "60 min",
        price: 220,
      },
      {
        id: "individual-therapy",
        name: "Sesja indywidualna (dziecko / dorosły)",
        duration: "45-50 min",
        price: 200,
      },
      {
        id: "trauma-therapy",
        name: "Psychotraumatolog",
        duration: "45-50 min",
        price: 200,
      },
      {
        id: "couples-therapy",
        name: "Terapia par",
        duration: "60 min",
        price: 250,
      },
      {
        id: "psych-opinion",
        name: "Opinia psychologiczna",
        price: 180,
        priceFrom: true,
        description:
          "Usługa dodatkowo płatna — cena zależy od zakresu i celu opinii (np. dla szkoły, poradni, sądu)",
      },
    ],
    packages: [
      {
        id: "starter",
        name: "Pakiet 3 sesje",
        sessions: 3,
        price: 570,
        validityMonths: 3,
        savings: 30,
      },
      {
        id: "basic",
        name: "Pakiet 5 sesji",
        sessions: 5,
        price: 900,
        validityMonths: 3,
        savings: 100,
      },
      {
        id: "extended",
        name: "Pakiet 10 sesji",
        sessions: 10,
        price: 1700,
        validityMonths: 3,
        savings: 300,
      },
      {
        id: "couples",
        name: "Pakiet terapii par",
        sessions: 5,
        price: 1200,
        validityMonths: 3,
        savings: 50,
      },
    ],
  },
  {
    id: "pedagogy",
    title: "Pedagogika | Terapia",
    items: [
      {
        id: "ped-therapy",
        name: "Terapia pedagogiczna (dla dzieci z trudnościami szkolnymi)",
        price: 170,
      },
      {
        id: "tus",
        name: "Trening Umiejętności Społecznych (TUS)",
        price: 170,
      },
      {
        id: "autism-therapy",
        name: "Terapia dzieci ze spektrum autyzmu (model DIR/Floortime)",
        price: 170,
      },
    ],
  },
  {
    id: "feeding-therapy",
    title: "Terapia Karmienia",
    items: [
      {
        id: "feeding-first",
        name: "Pierwsza wizyta",
        duration: "ok. 75 min",
        price: 250,
      },
      {
        id: "feeding-next",
        name: "Kolejne wizyty",
        duration: "ok. 60 min",
        price: 200,
      },
    ],
  },
  {
    id: "sensory-integration",
    title: "Sensoryka i Emocje",
    items: [
      {
        id: "si-diagnosis",
        name: "Ocena funkcjonowania sensorycznego",
        duration: "1-2 spotkania po ok. 60 min",
        price: 200,
        description: "Cena za spotkanie",
      },
      {
        id: "si-individual",
        name: "Indywidualne zajęcia sensoryczne",
        duration: "45 min",
        price: 150,
      },
      {
        id: "si-group",
        name: "Zajęcia grupowe (grupy 4-osobowe)",
        price: 90,
        description: "Cena za dziecko",
      },
    ],
  },
];

// Electrostimulator rental info
export const equipmentRental = {
  electrostimulator: {
    weekly: 200,
    monthly: 700,
    deposit: 400,
  },
};
