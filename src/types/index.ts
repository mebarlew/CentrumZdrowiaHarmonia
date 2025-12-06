export interface Specialist {
  id: string;
  name: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'psychology' | 'speech-therapy' | 'pedagogy' | 'sensory-integration';
  ageGroup: 'children' | 'adults' | 'both';
  items: string[];
}

export interface PriceItem {
  id: string;
  name: string;
  duration?: string;
  price: number;
  description?: string;
}

export interface PriceCategory {
  id: string;
  title: string;
  items: PriceItem[];
  packages?: PricePackage[];
}

export interface PricePackage {
  id: string;
  name: string;
  sessions: number;
  price: number;
  validityMonths: number;
  savings?: number;
}

export interface ContactInfo {
  name: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
  phones: string[];
  email?: string;
  facebook?: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}