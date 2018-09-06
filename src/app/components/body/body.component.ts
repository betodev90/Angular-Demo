import { Component } from '@angular/core';

@Component({
    'selector': 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'La innovación no se trata de decir que sí a todo. Se trata de decir NO a todas las características, excepto a las más cruciales',
        autor: 'Steve Jobs'
    };
    frameworks: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
}