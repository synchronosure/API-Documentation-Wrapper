import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocsComponent } from './api-docs.component';

describe('ApiDocsComponent', () => {
    let component: ApiDocsComponent;
    let fixture: ComponentFixture<ApiDocsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ApiDocsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ApiDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Swagger URL is not empty', () => {
        expect(component.swaggerURL).toBeTruthy();
    });

    it('API option is in correct format', () => {
        component.apiOptions.forEach((prop) => {
            expect(Object.keys(prop)).toEqual(
                jasmine.objectContaining(['name', 'url'])
            );
        });
    });
});
