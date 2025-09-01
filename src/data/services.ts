import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'psychology-general',
    title: 'Psychologia',
    description: 'Profesjonalna pomoc psychologiczna dla wszystkich grup wiekowych z wykorzystaniem nowoczesnych metod terapeutycznych.',
    category: 'psychology',
    ageGroup: 'both',
    items: [
      'Terapia wspierająca dla dzieci z trudnościami szkolnymi i wychowawczymi',
      'Współpraca z innymi specjalistami',
      'Usługi stacjonarne i online'
    ]
  },
  {
    id: 'psychology-adults',
    title: 'Psychologia - Dorośli i Seniorzy',
    description: 'Specjalistyczna pomoc psychologiczna dla osób dorosłych w różnych obszarach życia.',
    category: 'psychology',
    ageGroup: 'adults',
    items: [
      'Konsultacje indywidualne dla dorosłych i par',
      'Depresja, stany obniżonego nastroju',
      'Zaburzenia lękowe',
      'Kryzysy życiowe (rozwód, żałoba, choroba przewlekła)',
      'Terapia w doświadczeniu traumy i przeciążenia psychicznego',
      'Trudności wychowawcze i relacyjne',
      'Terapia par'
    ]
  },
  {
    id: 'psychology-children',
    title: 'Psychologia - Dzieci i Młodzież',
    description: 'Kompleksowa opieka psychologiczna dostosowana do potrzeb młodych ludzi.',
    category: 'psychology',
    ageGroup: 'children',
    items: [
      'Depresja i wahania nastroju',
      'Lęki, fobie, napięcia emocjonalne',
      'Trudności adaptacyjne i szkolne',
      'Zaburzenia odżywiania',
      'Niska samoocena, nieśmiałość, wycofanie',
      'Samookaleczenia, zachowania ryzykowne',
      'Relacje rówieśnicze i problemy społeczne',
      'Wsparcie dla dzieci z doświadczeniem traumy'
    ]
  },
  {
    id: 'speech-therapy-general',
    title: 'Logopedia i Neurologopedia',
    description: 'Profesjonalna terapia logopedyczna i neurologopedyczna dla wszystkich grup wiekowych.',
    category: 'speech-therapy',
    ageGroup: 'both',
    items: [
      'Diagnoza logopedyczna i neurologopedyczna',
      'Terapia wad wymowy, opóźnionego rozwoju mowy',
      'Terapia miofunkcjonalna',
      'Terapia przed i po zabiegach podcięcia wędzidełka',
      'Współpraca z innymi specjalistami',
      'Usługi stacjonarne'
    ]
  },
  {
    id: 'speech-therapy-children',
    title: 'Logopedia - Dzieci i Młodzież',
    description: 'Specjalistyczna terapia logopedyczna dostosowana do najmłodszych pacjentów.',
    category: 'speech-therapy',
    ageGroup: 'children',
    items: [
      'Opóźniony rozwój mowy',
      'Wady wymowy',
      'Zaburzenia komunikacji w spektrum autyzmu',
      'Zaburzenia miofunkcjonalne',
      'Trudności w płynności mowy',
      'Wspomaganie rozwoju kompetencji językowych',
      'Wsparcie przed i po zabiegach wędzidełka'
    ]
  },
  {
    id: 'speech-therapy-adults',
    title: 'Logopedia - Dorośli',
    description: 'Terapia logopedyczna dla dorosłych pacjentów z różnorodnymi potrzebami.',
    category: 'speech-therapy',
    ageGroup: 'adults',
    items: [
      'Wady wymowy w wieku dorosłym',
      'Zaburzenia mowy po udarach, urazach',
      'Terapia miofunkcjonalna wspomagająca leczenie ortodontyczne',
      'Ćwiczenia usprawniające mowę i artykulację',
      'Wsparcie logopedyczne przed i po zabiegach wędzidełka'
    ]
  }
];