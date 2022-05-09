import { TestBed } from "@angular/core/testing";
import { ACañizaInterceptor } from "./error.interceptor";

describe("ErrorInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ACañizaInterceptor],
    }),
  );

  it("should be created", () => {
    const interceptor: ACañizaInterceptor = TestBed.inject(ACañizaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
