import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [ // elementos que integran este módulo (componentes por ej.) con scope private
        ContadorComponent
    ],
    exports: [ // elementos que integran este módulo (componentes por ej.) con scope public fuera de este módulo
        ContadorComponent
    ],
    imports: [ // importación de modulos adicionales
        CommonModule
    ]
})
export class ContadorModule {

}