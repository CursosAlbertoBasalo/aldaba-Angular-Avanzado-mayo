import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AgenciesService } from "./agencies.service";
describe("AgenciesService", () => {
  let service: AgenciesService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [
        // { provide:HttpClient , useValue: jasmine.createSpyObj( []) }
      ],
    });
    service = TestBed.inject(AgenciesService);
    controller = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
    service.getError$();
    controller.expectOne('environment.apiUrl + "/agencies/error"');
  });
});
