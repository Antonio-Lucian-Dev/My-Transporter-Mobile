import { FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterData = new EventEmitter<any>();

  filterForm = this.fb.group({
    city: ['All'],
    date: ['Desc']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(values => {
      this.filterData.emit(values);
    });
  }

  resetFilter(): void {
    this.filterForm.patchValue({
      city: 'All',
      date: 'Desc'
    });
    this.filterData.emit(this.filterForm.value);
  }

}
