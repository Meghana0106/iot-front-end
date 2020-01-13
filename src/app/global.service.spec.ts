import { GlobalService } from "./global.service";
import { TestBed } from "@angular/core/testing";

describe("GlobalService", () => {

  let service: GlobalService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalService
      ]
    });
    service = TestBed.get(GlobalService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
