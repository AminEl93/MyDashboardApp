import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TitleComponent],
    templateUrl: './change-detection.component.html'
})

export default class ChangeDetectionComponent {

    public currentFramework = computed(
        () => `Change Detection - ${ this.frameworkAsSignal().name }`
    );    
    
    public frameworkAsSignal = signal({
        name: 'Angular (3, 2, 1...)',
        releaseDate: 2016
    });
    
    public frameworkAsProperty = {
        name: 'Angular (este nunca cambiará)',
        releaseDate: 2016
    };    
    
    constructor() {    
        setTimeout(() => {    
            // this.frameworkAsProperty.name = 'React';
            this.frameworkAsSignal.update(value => {
                value.name = 'React';        
                return {...value};
            });    
            console.log('Ya está hecho el cambio!');
        }, 3000);
    }
}
