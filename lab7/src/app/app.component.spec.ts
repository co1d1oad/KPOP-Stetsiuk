import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lab7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab7');
  });

  it(`check empty login`, () => {
    component.userData.login="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#loginErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty name`, () => {
    component.userData.name="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#nameErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty email`, () => {
    component.userData.email="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check invalid email`, () => {
    component.userData.email="@kpop.com";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Ошибка');
  });

  it(`check empty sex`, () => {
    component.userData.sex="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#sexErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty animal`, () => {
    component.userData.animal="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#animalErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty age`, () => {
    component.userData.age="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#ageErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check invalid age`, () => {
    component.userData.age="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#ageErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check invalid animal`, () => {
    component.userData.age="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#ageErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty sex`, () => {
    component.userData.sex="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#sexErr').textContent;
    expect(elementText).toBe('Заполните');
  });
});

