import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ConsumersComponent } from "./consumers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ConsumersComponent", () => {

  let fixture: ComponentFixture<ConsumersComponent>;
  let component: ConsumersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ConsumersComponent]
    });

    fixture = TestBed.createComponent(ConsumersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
