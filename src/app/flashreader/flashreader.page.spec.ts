import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlashreaderPage } from './flashreader.page';

describe('FlashreaderPage', () => {
  let component: FlashreaderPage;
  let fixture: ComponentFixture<FlashreaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashreaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashreaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
