import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],

      providers: [
         {
                        provide: ActivatedRoute,
                        useValue: {
                          // params: of({ id: '1' }), // Mock route parameters
                          // queryParams: of({ query: 'test' }), // Mock query parameters
                          // data: of({ someData: 'value' }), // Mock route data if used
                          // fragment: of('someFragment'), // Mock fragment if used
                          // snapshot: {
                          //   paramMap: {
                          //     get: (key: string) => '1', // Mock snapshot paramMap
                          //   },
                          // },
                        },
                      },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'trend_prototype' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('trend_prototype');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, trend_prototype');
  });
});
