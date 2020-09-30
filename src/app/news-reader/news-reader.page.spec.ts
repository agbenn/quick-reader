import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsReaderPage } from './news-reader.page';

describe('NewsReaderPage', () => {
  let component: NewsReaderPage;
  let fixture: ComponentFixture<NewsReaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsReaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
