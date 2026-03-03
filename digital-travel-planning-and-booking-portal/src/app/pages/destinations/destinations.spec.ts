import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DestinationsComponent } from './destinations';

describe('DestinationsComponent', () => {
  let component: DestinationsComponent;
  let fixture: ComponentFixture<DestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have destinations loaded', () => {
    expect(component.mockDestinations.length).toBeGreaterThan(5);
  });

  it('should filter by search term', () => {
    component.searchTerm = 'Ooty';
    const result = component.filteredDestinations;
    expect(result.length).toBe(1);
    expect(result[0].name).toContain('Ooty');
    expect(result[0].duration).toBeTruthy();
  });

  it('should navigate to the detail route when a destination is clicked', () => {
    const dest = component.mockDestinations[0];
    const routerSpy = spyOn((component as any).router, 'navigate');
    component.viewDetails(dest);
    expect(routerSpy).toHaveBeenCalledWith(['/destinations', dest.id]);
  });

  it('should navigate to booking when book link clicked', () => {
    const dest = component.mockDestinations[1];
    const routerSpy = spyOn((component as any).router, 'navigate');
    // simulate click on link by calling navigate directly as template uses routerLink
    component.router.navigate(['/booking'], { queryParams: { destination: dest.name } });
    expect(routerSpy).toHaveBeenCalledWith(['/booking'], { queryParams: { destination: dest.name } });
  });
});
