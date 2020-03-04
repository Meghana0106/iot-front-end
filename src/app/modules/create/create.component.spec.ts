import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CreateComponent } from "./create.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CreateComponent", () => {

  let fixture: ComponentFixture<CreateComponent>;
  let component: CreateComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CreateComponent]
    });

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
