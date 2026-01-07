import { config, fields, collection, singleton } from "@keystatic/core";

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: "github",
        repo: "mebarlew/CentrumZdrowiaHarmonia",
      }
    : {
        kind: "local",
      },
  ui: {
    brand: {
      name: "Harmonia CMS",
    },
  },
  collections: {
    news: collection({
      label: "Aktualności",
      slugField: "title",
      path: "src/content/news/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Tytuł" } }),
        publishDate: fields.date({ label: "Data publikacji" }),
        excerpt: fields.text({ label: "Krótki opis", multiline: true }),
        image: fields.image({
          label: "Zdjęcie",
          directory: "public/images/news",
          publicPath: "/images/news/",
        }),
        content: fields.markdoc({
          label: "Treść",
        }),
      },
    }),
    services: collection({
      label: "Usługi",
      slugField: "title",
      path: "src/content/services/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Tytuł" } }),
        description: fields.text({ label: "Opis", multiline: true }),
        category: fields.select({
          label: "Kategoria",
          options: [
            { label: "Psychologia", value: "psychology" },
            { label: "Logopedia", value: "speech-therapy" },
            { label: "Pedagogika", value: "pedagogy" },
            { label: "Integracja sensoryczna", value: "sensory-integration" },
          ],
          defaultValue: "psychology",
        }),
        ageGroup: fields.select({
          label: "Grupa wiekowa",
          options: [
            { label: "Dzieci", value: "children" },
            { label: "Dorośli", value: "adults" },
            { label: "Wszyscy", value: "both" },
          ],
          defaultValue: "both",
        }),
        items: fields.array(fields.text({ label: "Element" }), {
          label: "Zakres usług",
          itemLabel: (props) => props.value || "Nowy element",
        }),
        order: fields.number({
          label: "Kolejność wyświetlania",
          defaultValue: 0,
        }),
      },
    }),
    pricing: collection({
      label: "Cennik",
      slugField: "title",
      path: "src/content/pricing/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Kategoria cennika" } }),
        items: fields.array(
          fields.object({
            name: fields.text({ label: "Nazwa usługi" }),
            duration: fields.text({ label: "Czas trwania (opcjonalnie)" }),
            price: fields.number({ label: "Cena (zł)" }),
            description: fields.text({ label: "Opis (opcjonalnie)" }),
          }),
          {
            label: "Pozycje cennika",
            itemLabel: (props) => props.fields.name.value || "Nowa usługa",
          },
        ),
        packages: fields.array(
          fields.object({
            name: fields.text({ label: "Nazwa pakietu" }),
            sessions: fields.number({ label: "Liczba sesji" }),
            price: fields.number({ label: "Cena pakietu (zł)" }),
            validityMonths: fields.number({
              label: "Ważność (miesiące)",
              defaultValue: 3,
            }),
            savings: fields.number({ label: "Oszczędność (zł)" }),
          }),
          {
            label: "Pakiety",
            itemLabel: (props) => props.fields.name.value || "Nowy pakiet",
          },
        ),
        order: fields.number({
          label: "Kolejność wyświetlania",
          defaultValue: 0,
        }),
      },
    }),
  },
  singletons: {
    contact: singleton({
      label: "Dane kontaktowe",
      path: "src/content/contact",
      format: { data: "json" },
      schema: {
        name: fields.text({ label: "Nazwa firmy" }),
        street: fields.text({ label: "Ulica" }),
        city: fields.text({ label: "Miasto" }),
        postalCode: fields.text({ label: "Kod pocztowy" }),
        phones: fields.array(fields.text({ label: "Numer telefonu" }), {
          label: "Telefony",
          itemLabel: (props) => props.value || "Nowy numer",
        }),
        facebook: fields.url({ label: "Link do Facebooka" }),
        weekdaysHours: fields.text({ label: "Godziny otwarcia (pon-pt)" }),
        saturdayHours: fields.text({ label: "Godziny otwarcia (sobota)" }),
        sundayHours: fields.text({ label: "Godziny otwarcia (niedziela)" }),
      },
    }),
    equipment: singleton({
      label: "Wypożyczalnia sprzętu",
      path: "src/content/equipment",
      format: { data: "json" },
      schema: {
        electrostimulatorWeekly: fields.number({
          label: "Elektrostymulator - tydzień (zł)",
        }),
        electrostimulatorMonthly: fields.number({
          label: "Elektrostymulator - miesiąc (zł)",
        }),
        electrostimulatorDeposit: fields.number({
          label: "Elektrostymulator - kaucja (zł)",
        }),
      },
    }),
  },
});
