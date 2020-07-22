import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealitypartComponent } from './realitypart.component';

describe('RealitypartComponent', () => {
  let component: RealitypartComponent;
  let fixture: ComponentFixture<RealitypartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealitypartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealitypartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
