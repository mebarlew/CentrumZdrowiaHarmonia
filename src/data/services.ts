import type { Service } from "../types";

export const services: Service[] = [
  // Psychology services
  {
    id: "psychology-general",
    title: "Psycholog | Psychotraumatolog",
    description:
      "Profesjonalna pomoc psychologiczna dla dzieci, młodzieży i dorosłych z wykorzystaniem nowoczesnych metod terapeutycznych.",
    category: "psychology",
    ageGroup: "both",
    items: [
      "Konsultacje psychologiczne dla dzieci, młodzieży i dorosłych",
      "Terapia indywidualna (od 10 r.ż.)",
      "Terapia dla dzieci z trudnościami emocjonalnymi i szkolnymi",
      "Wsparcie psychotraumatologiczne (traumy rozwojowe, PTSD)",
      "Terapia par",
      "Pomoc w kryzysach emocjonalnych i życiowych",
      "Możliwość terapii w języku angielskim",
      "Terapia online",
    ],
  },
  {
    id: "psychology-adults",
    title: "Psychologia - Dorośli",
    description:
      "Specjalistyczna pomoc psychologiczna dla osób dorosłych w różnych obszarach życia.",
    category: "psychology",
    ageGroup: "adults",
    items: [
      "Konsultacje indywidualne dla dorosłych i par",
      "Depresja, stany obniżonego nastroju",
      "Zaburzenia lękowe",
      "Kryzysy życiowe (rozwód, żałoba, choroba przewlekła)",
      "Terapia w doświadczeniu traumy i przeciążenia psychicznego",
      "Trudności wychowawcze i relacyjne",
      "Terapia par",
    ],
  },
  {
    id: "psychology-children",
    title: "Psychologia - Dzieci i Młodzież",
    description:
      "Kompleksowa opieka psychologiczna dostosowana do potrzeb młodych ludzi.",
    category: "psychology",
    ageGroup: "children",
    items: [
      "Depresja i wahania nastroju",
      "Lęki, fobie, napięcia emocjonalne",
      "Trudności adaptacyjne i szkolne",
      "Zaburzenia odżywiania",
      "Niska samoocena, nieśmiałość, wycofanie",
      "Samookaleczenia, zachowania ryzykowne",
      "Relacje rówieśnicze i problemy społeczne",
      "Wsparcie dla dzieci z doświadczeniem traumy",
    ],
  },
  // Speech therapy services
  {
    id: "speech-therapy-general",
    title: "Logopeda | Neurologopeda | Terapeuta Miofunkcjonalny",
    description:
      "Profesjonalna terapia logopedyczna i neurologopedyczna dla wszystkich grup wiekowych.",
    category: "speech-therapy",
    ageGroup: "both",
    items: [
      "Diagnoza logopedyczna i neurologopedyczna",
      "Terapia wad wymowy, opóźnionego rozwoju mowy, trudności w komunikacji",
      "Terapia miofunkcjonalna",
      "Ćwiczenia przygotowujące przed i po zabiegu podcięcia wędzidełka języka lub warg",
      "Terapia wspomagająca leczenie ortodontyczne",
      "Terapia zaburzeń mowy po udarach, w chorobach neurologicznych i urazach",
      "Wsparcie dla osób z trudnościami w artykulacji, komunikacji, oddychaniu, połykaniu",
      "Praca z dziećmi w spektrum autyzmu",
      "Masaż logopedyczny",
      "Elektrostymulacja logopedyczna",
    ],
  },
  {
    id: "speech-therapy-children",
    title: "Logopedia - Dzieci i Młodzież",
    description:
      "Specjalistyczna terapia logopedyczna dostosowana do najmłodszych pacjentów.",
    category: "speech-therapy",
    ageGroup: "children",
    items: [
      "Opóźniony rozwój mowy",
      "Wady wymowy",
      "Zaburzenia komunikacji w spektrum autyzmu",
      "Zaburzenia miofunkcjonalne (zgryz, połykanie, oddychanie)",
      "Problemy z płynnością mowy",
      "Wsparcie językowe i artykulacyjne",
      "Redukcja napięć mięśniowych",
    ],
  },
  {
    id: "speech-therapy-adults",
    title: "Logopedia - Dorośli",
    description:
      "Terapia logopedyczna dla dorosłych pacjentów z różnorodnymi potrzebami.",
    category: "speech-therapy",
    ageGroup: "adults",
    items: [
      "Wady wymowy u dorosłych",
      "Zaburzenia mowy po udarach, urazach, chorobach neurologicznych",
      "Terapia wspomagająca leczenie ortodontyczne i redukcję chrapania",
      "Redukcja napięć mięśniowych",
    ],
  },
  // Pedagogy services
  {
    id: "pedagogy-general",
    title: "Pedagog | Terapeuta",
    description:
      "Profesjonalna pomoc pedagogiczna i terapeutyczna dla dzieci z trudnościami w nauce i rozwoju.",
    category: "pedagogy",
    ageGroup: "children",
    items: [
      "Terapia pedagogiczna dla dzieci z trudnościami w nauce",
      "Trening Umiejętności Społecznych (TUS)",
      "Praca z dziećmi z zaburzeniami ze spektrum autyzmu",
      "Indywidualne podejście dostosowane do potrzeb rozwojowych dziecka (model DIR/Floortime)",
    ],
  },
  // Feeding therapy services
  {
    id: "feeding-therapy",
    title: "Terapia Karmienia",
    description:
      "Specjalistyczne wsparcie dla dzieci z trudnościami w jedzeniu, piciu i akceptacji nowych pokarmów.",
    category: "feeding-therapy",
    ageGroup: "children",
    items: [
      "Diagnoza trudności w karmieniu i jedzeniu",
      "Terapia wybiórczości pokarmowej",
      "Wsparcie dzieci z trudnościami w ssaniu, gryzieniu, żuciu i połykaniu",
      "Rozszerzanie diety i akceptacja nowych pokarmów",
      "Wskazówki i wsparcie dla rodziców",
    ],
  },
  // Sensory Integration services
  {
    id: "sensory-integration",
    title: "Regulacja sensoryczno-emocjonalna – wsparcie psychologiczne",
    description:
      "Kompleksowe wsparcie psychologiczne dzieci z trudnościami w zakresie przetwarzania bodźców, samoregulacji oraz regulacji emocjonalnej, prowadzone w bezpiecznym i przyjaznym środowisku.",
    category: "sensory-integration",
    ageGroup: "children",
    items: [
      "Ocena funkcjonowania sensorycznego dziecka (profil przetwarzania sensorycznego, obserwacja kliniczna)",
      "Indywidualne zajęcia wspierające regulację sensoryczno-emocjonalną",
      "Zajęcia grupowe wspomagające samoregulację (małe grupy 4-osobowe)",
      "Praca z ciałem, emocjami i napięciem w oparciu o wiedzę psychologiczną",
      "Wsparcie dla dzieci z nadwrażliwością sensoryczną, trudnościami adaptacyjnymi, ADHD, lękiem",
    ],
  },
];
