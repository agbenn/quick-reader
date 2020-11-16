import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentReaderPage } from './content-reader.page';

describe('ContentReaderPage', () => {
  let component: ContentReaderPage;
  let fixture: ComponentFixture<ContentReaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentReaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
