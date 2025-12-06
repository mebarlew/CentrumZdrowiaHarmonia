import type { PriceCategory } from '../types';

export const pricingData: PriceCategory[] = [
  {
    id: 'speech-therapy',
    title: 'Logopedia | Neurologopedia | Terapia Miofunkcjonalna',
    items: [
      {
        id: 'diagnosis',
        name: 'Diagnoza logopedyczna / neurologopedyczna',
        duration: '1-2 spotkania, 60 min',
        price: 190,
        description: 'Kompleksowa ocena stanu logopedycznego'
      },
      {
        id: 'therapy',
        name: 'Terapia logopedyczna',
        duration: '45 min',
        price: 130
      },
      {
        id: 'neuro-therapy',
        name: 'Terapia neurologopedyczna',
        duration: '45 min',
        price: 130
      },
      {
        id: 'myo-therapy',
        name: 'Terapia miofunkcjonalna',
        duration: '45 min',
        price: 130
      },
      {
        id: 'electrostimulation',
        name: 'Elektrostymulacja',
        duration: '25 min',
        price: 70
      },
      {
        id: 'electrostimulation-first',
        name: 'Pierwsza sesja elektrostymulacji (kwalifikacja)',
        duration: 'ok. 45 min',
        price: 100
      },
      {
        id: 'massage-logo',
        name: 'Masaż logopedyczny / twarzy',
        price: 70
      },
      {
        id: 'massage-tension',
        name: 'Masaż redukujący napięcie mięśniowe',
        price: 90
      },
      {
        id: 'opinion',
        name: 'Opinia logopedyczna',
        price: 80
      }
    ],
    packages: [
      {
        id: 'speech-5',
        name: '5 terapii logopedycznych',
        sessions: 5,
        price: 620,
        validityMonths: 3,
        savings: 30
      },
      {
        id: 'speech-10',
        name: '10 terapii logopedycznych',
        sessions: 10,
        price: 1200,
        validityMonths: 3,
        savings: 100
      },
      {
        id: 'neuro-5',
        name: '5 terapii neurologopedycznych',
        sessions: 5,
        price: 620,
        validityMonths: 3,
        savings: 30
      },
      {
        id: 'neuro-10',
        name: '10 terapii neurologopedycznych',
        sessions: 10,
        price: 1200,
        validityMonths: 3,
        savings: 100
      },
      {
        id: 'myo-5',
        name: '5 terapii miofunkcjonalnych',
        sessions: 5,
        price: 620,
        validityMonths: 3,
        savings: 30
      },
      {
        id: 'myo-10',
        name: '10 terapii miofunkcjonalnych',
        sessions: 10,
        price: 1200,
        validityMonths: 3,
        savings: 100
      },
      {
        id: 'electro-5',
        name: '5 zabiegów elektrostymulacji',
        sessions: 5,
        price: 300,
        validityMonths: 3,
        savings: 50
      }
    ]
  },
  {
    id: 'psychology',
    title: 'Psychologia | Psychotraumatologia',
    items: [
      {
        id: 'psych-diagnosis',
        name: 'Diagnoza psychologiczna (pierwsza wizyta)',
        price: 200
      },
      {
        id: 'individual-therapy',
        name: 'Sesja indywidualna (dziecko / dorosły)',
        price: 180
      },
      {
        id: 'trauma-therapy',
        name: 'Psychotraumatolog',
        price: 180
      },
      {
        id: 'couples-therapy',
        name: 'Terapia par',
        duration: '75 min',
        price: 250
      },
      {
        id: 'psych-opinion',
        name: 'Opinia psychologiczna',
        price: 150
      },
      {
        id: 'online-discount',
        name: 'Konsultacje online',
        price: -10,
        description: 'Zniżka do wszystkich usług psychologicznych'
      }
    ],
    packages: [
      {
        id: 'starter',
        name: 'Pakiet 3 sesje',
        sessions: 3,
        price: 500,
        validityMonths: 3,
        savings: 40
      },
      {
        id: 'basic',
        name: 'Pakiet 5 sesji',
        sessions: 5,
        price: 800,
        validityMonths: 3,
        savings: 100
      },
      {
        id: 'extended',
        name: 'Pakiet 10 sesji',
        sessions: 10,
        price: 1500,
        validityMonths: 3,
        savings: 300
      },
      {
        id: 'couples',
        name: 'Pakiet terapii par',
        sessions: 5,
        price: 1200,
        validityMonths: 3,
        savings: 50
      },
    ]
  },
  {
    id: 'sensory-integration',
    title: 'Integracja Sensoryczna',
    items: [
      {
        id: 'si-diagnosis',
        name: 'Diagnoza SI',
        duration: '1-2 spotkania po ok. 60 min',
        price: 180,
        description: 'Cena za spotkanie'
      },
      {
        id: 'si-individual',
        name: 'Terapia indywidualna SI',
        price: 130
      },
      {
        id: 'si-group',
        name: 'Terapia grupowa SI (grupy 4-osobowe)',
        price: 80,
        description: 'Cena za dziecko'
      }
    ]
  }
];

// Electrostimulator rental info
export const equipmentRental = {
  electrostimulator: {
    weekly: 200,
    monthly: 700,
    deposit: 400
  }
};
