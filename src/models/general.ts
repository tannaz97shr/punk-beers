export interface INavbarItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export interface ITabItem {
  title: string;
  id: string;
}

export interface IBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  food_pairing: string[];
}

export interface IBeersResponse {
  beers: IBeer[];
  message?: string;
}
