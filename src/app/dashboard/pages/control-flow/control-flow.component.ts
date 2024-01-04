import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './control-flow.component.html'
})

export default class ControlFlowComponent {

    public showContent = signal(false);
    
    public toggleContent() {
        this.showContent.update(value => !value);    
    }
}
