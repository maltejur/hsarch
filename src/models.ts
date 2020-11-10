export interface HsAusgabe {
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
