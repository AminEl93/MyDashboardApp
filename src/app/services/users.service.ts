import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {    
    loading: boolean;
    users: User[];
}

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    
    private _http = inject(HttpClient);

    #state = signal<State>({
        loading: true,
        users: []        
    });

    public loading = computed(() => this.#state().loading);
    public users = computed(() => this.#state().users);

    constructor() {
        this._http.get<UsersResponse>('https://reqres.in/api/users')
            .pipe(delay(2000))
            .subscribe(res => {
                this.#state.set({
                    loading: false,
                    users: res.data
                });
            })
    }

    getUserById(id: string) {
        return this._http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
            .pipe(
                delay(2000),
                map(resp => resp.data)
            )    
    }    
}