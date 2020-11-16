import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetentionQuizPage } from './retention-quiz.page';

describe('RetentionQuizPage', () => {
  let component: RetentionQuizPage;
  let fixture: ComponentFixture<RetentionQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionQuizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetentionQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
