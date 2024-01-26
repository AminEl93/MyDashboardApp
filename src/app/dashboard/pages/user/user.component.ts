import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/req-response';

@Component({
    standalone: true,
    imports: [CommonModule, TitleComponent],
    templateUrl: './user.component.html'
})

export default class UserComponent {
    
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _usersService = inject(UsersService);
  
    // public user = signal<User| undefined>(undefined);
    public user = toSignal(
        this._route.params.pipe(
            switchMap( ({ id }) => this._usersService.getUserById(id) )
        )
    )

    /*
    constructor() {
        this._route.params.subscribe(params => {
            console.log({params});
        })
    }
    */

    goBack() {
        this._router.navigateByUrl('/dashboard/user-list');
    }
}
