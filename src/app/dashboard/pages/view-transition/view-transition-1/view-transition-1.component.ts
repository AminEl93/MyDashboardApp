import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    standalone: true,
    imports: [CommonModule, TitleComponent],
    templateUrl: './view-transition-1.component.html'
})

export default class ViewTransition1Component {

}
