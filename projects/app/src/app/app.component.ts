import { Component, ViewChild } from '@angular/core';
import { PoChartOptions, PoChartType, PoLineChartSeries, PoMenuComponent, PoMenuItem } from '../../../ui/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(PoMenuComponent, { static: true }) menu: PoMenuComponent;

  menuItems: Array<PoMenuItem> = [
    {
      label: 'PO UI - Angular Framework',
      action: this.onClick.bind(this),
      shortLabel: 'aro',
      icon: 'po-icon-agro-business'
    }
  ];

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];
  participationByCountryInWorldExports: Array<PoLineChartSeries> = [
    { label: 'Brazil', data: [35, 32, 25, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 23, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;

  onClick() {
    this.menu.toggle();
  }
}
