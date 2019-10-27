import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuInputModule } from './lib/au-input.module';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
    let component: AuFaInputComponent,
        fixture: ComponentFixture<AuFaInputComponent>,
        el: DebugElement;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [ AuInputModule ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should create a font awesome email input', async(() => {

    }));
});
