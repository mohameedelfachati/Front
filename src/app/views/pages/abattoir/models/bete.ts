import internal from "events"
import { Espece } from "./espece"

export class Bete {
    id:number 
    numeroSequence :string
    poidsInit :DoubleRange
    poidsCarcasse :DoubleRange
    poidsExploitable :DoubleRange
    espece : Espece
}
