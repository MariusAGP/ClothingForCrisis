import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'ClothingForCrisis';
  public isMobile: boolean = false;

  constructor(private breakPointObserver: BreakpointObserver) {
  }

  public ngOnInit(): void {
    this.breakPointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe((result: BreakpointState) => {
      this.isMobile = result.matches;
    });
  }
}
