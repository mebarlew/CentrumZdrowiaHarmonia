import type { PriceCategory } from '../types';

export const pricingData: PriceCategory[] = [
  {
    id: 'speech-therapy',
    title: 'Logopedia',
    items: [
      {
        id: 'diagnosis',
        name: 'Diagnoza logopedyczna/neurologopedyczna',
        duration: '1-2 spotkania, ok. 60 min',
        price: 180,
        description: 'Kompleksowa ocena stanu logopedycznego'
      },
      {
        id: 'consultation',
        name: 'Konsultacja logopedyczna/neurologopedyczna',
        duration: 'ok. 45 min',
        price: 100
      },
      {
        id: 'therapy',
        name: 'Terapia logopedyczna',
        duration: 'ok. 45 min',
        price: 100
      },
      {
        id: 'neuro-therapy',
        name: 'Terapia neurologopedyczna',
        duration: 'ok. 45 min',
        price: 120
      },
      {
        id: 'myo-therapy',
        name: 'Terapia miofunkcjonalna',
        duration: 'ok. 45 min',
        price: 120
      },
      {
        id: 'opinion',
        name: 'Opinia logopedyczna dla szkoły/przedszkola',
        price: 80
      }
    ],
    packages: [
      {
        id: 'speech-5',
        name: '5 zajęć logopedycznych',
        sessions: 5,
        price: 420,
        validityMonths: 3,
        savings: 80
      },
      {
        id: 'speech-10',
        name: '10 zajęć logopedycznych',
        sessions: 10,
        price: 800,
        validityMonths: 3,
        savings: 200
      },
      {
        id: 'neuro-5',
        name: '5 zajęć neurologopedycznych',
        sessions: 5,
        price: 500,
        validityMonths: 3,
        savings: 100
      },
      {
        id: 'neuro-10',
        name: '10 zajęć neurologopedycznych',
        sessions: 10,
        price: 900,
        validityMonths: 3,
        savings: 300
      },
      {
        id: 'myo-5',
        name: '5 zajęć miofunkcjonalnych',
        sessions: 5,
        price: 500,
        validityMonths: 3,
        savings: 100
      },
      {
        id: 'myo-10',
        name: '10 zajęć miofunkcjonalnych',
        sessions: 10,
        price: 900,
        validityMonths: 3,
        savings: 300
      }
    ]
  },
  {
    id: 'psychology',
    title: 'Psychologia',
    items: [
      {
        id: 'psych-consultation',
        name: 'Konsultacja psychologiczna',
        duration: '50 min',
        price: 180
      },
      {
        id: 'individual-therapy',
        name: 'Terapia indywidualna',
        duration: '50 min',
        price: 180
      },
      {
        id: 'trauma-support',
        name: 'Wsparcie psychotraumatologiczne',
        duration: '50 min',
        price: 180
      },
      {
        id: 'couples-therapy',
        name: 'Terapia par',
        duration: '75 min',
        price: 250
      },
      {
        id: 'crisis-support',
        name: 'Pomoc w kryzysach',
        duration: '50 min',
        price: 180
      },
      {
        id: 'children-therapy',
        name: 'Terapia dla dzieci z trudnościami szkolnymi',
        duration: '50 min',
        price: 180
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
        description: 'Zniżka do wszystkich usług online'
      }
    ],
    packages: [
      {
        id: 'starter',
        name: 'Pakiet startowy',
        sessions: 3,
        price: 500,
        validityMonths: 2,
        savings: 40
      },
      {
        id: 'basic',
        name: 'Pakiet podstawowy',
        sessions: 5,
        price: 750,
        validityMonths: 3,
        savings: 150
      },
      {
        id: 'extended',
        name: 'Pakiet rozszerzony',
        sessions: 10,
        price: 1400,
        validityMonths: 6,
        savings: 400
      },
      {
        id: 'couples',
        name: 'Pakiet terapii par',
        sessions: 5,
        price: 1000,
        validityMonths: 3,
        savings: 250
      },
      {
        id: 'children',
        name: 'Pakiet konsultacji dziecięcych',
        sessions: 5,
        price: 800,
        validityMonths: 3,
        savings: 100
      }
    ]
  }
];