import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealityPage } from './reality.page';

describe('RealityPage', () => {
  let component: RealityPage;
  let fixture: ComponentFixture<RealityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
