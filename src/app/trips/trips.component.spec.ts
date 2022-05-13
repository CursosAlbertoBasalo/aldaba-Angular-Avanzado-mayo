import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { TripsService } from "../api/services/trips.service";
import { TripsComponent } from "./trips.component";

describe("TripsComponent", () => {
  let component: TripsComponent;
  let fixture: ComponentFixture<TripsComponent>;

  beforeEach(async () => {
    const spyTripsComponent = jasmine.createSpyObj<TripsService>("TripsService", {
      getAll$: of([]),
    });
    await TestBed.configureTestingModule({
      declarations: [TripsComponent],
      providers: [{ provide: TripsService, useValue: spyTripsComponent }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
