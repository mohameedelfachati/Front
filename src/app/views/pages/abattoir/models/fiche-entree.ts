import { Chevillard } from "./chevillard"
import { Facture } from "./facture"
import { Lot } from "./lot"

export class FicheEntree {
    id: number
    dateEntree: string
    lot: Lot
    chevillard: Chevillard
    facture: Facture
}
