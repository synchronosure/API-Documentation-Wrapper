import { Component, OnInit } from '@angular/core';
import { observable, Observable, pipe } from 'rxjs';

export interface ApiOption {
    name: string;
    url: string;
}

@Component({
    selector: 'app-api-docs',
    templateUrl: './api-docs.component.html',
    styleUrls: ['./api-docs.component.scss'],
})
export class ApiDocsComponent implements OnInit {
    apiOptions: Array<any> = [
        {
            name: 'API documentation',
            url: `${window.location.href}/assets/swagger.json`,
        },
    ];

    selectedValue: string = '';
    swaggerURL: string = 'http://localhost:3200/index.html?url=';

    constructor() {}

    ngOnInit(): void {}

    goToApiDoc(url: string): void {
        if (url) {
            window.open(`${this.swaggerURL}${url}`, '_blank');
        }
    }
}
