import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ // elementos que integran este módulo (componentes por ej.) con scope private
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // elementos que integran este módulo (componentes por ej.) con scope public fuera de este módulo
        ListadoComponent
    ],
    imports: [ // importación de modulos adicionales
        CommonModule
    ]
})
export class HeroesModule {

}