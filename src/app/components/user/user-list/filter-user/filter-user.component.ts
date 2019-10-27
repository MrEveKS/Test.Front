import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
})
export class FilterUserComponent {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onFiltred = new EventEmitter<string>();

  public filterValue = '';

  constructor() {
  }

  public filtrerValue(): void {
    this.onFiltred.emit(this.filterValue);
  }

}
