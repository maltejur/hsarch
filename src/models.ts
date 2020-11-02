export type Routes = {
  [route: string]: (params: Params) => HTMLElement;
};

export type Params = { [name: string]: string };

export interface HertzschlagAusgabe {
  Ausgabe: string;
  Thema: string;
  Seitenzahl?: string | number;
  Erscheinungsdatum?: string | Date;
  "Chefredakteur(-e)"?: string;
  "Umschlag/Innenteil"?: string;
  Preis?: string;
  Auflage?: number;
  yumpu?: string;
}

export interface HertzblattAusgabe {
  Name: string;
  Erscheinungsdatum: Date;
  Ausgabe: string;
}
