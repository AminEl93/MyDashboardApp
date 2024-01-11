import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './control-flow.component.html'
})

export default class ControlFlowComponent {

    public showContent = signal(false);
    public grade = signal<Grade>('A');
    
    public frameworks = signal(['Angular', 'React', 'Vue', 'NextJS', 'Svelte', 'Django', 'Laravel']);
    public frameworks2 = signal([]);

    public toggleContent() {
        this.showContent.update(value => !value);    
    }
}
