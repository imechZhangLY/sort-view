import { Component, OnInit } from '@angular/core';
import { SortViewService } from 'app/sort-view.service';
import { SortViewData } from 'app/sort-view-data';
//declare var $;
@Component({
  selector: 'app-view',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css'],
  providers: [SortViewService]
})
export class ViewComponentComponent implements OnInit {

  constructor(private sortViweService: SortViewService) { 
    this.sortViewData = sortViweService.getData();
  }
  sortViewData: SortViewData;
  getHeight(element: number): number {
    const maxHeight = 360;
    const minHeight = 10;
    const maxNumber = Math.max.apply(null,this.sortViewData.inputArr);
    const minNumber = Math.min.apply(null,this.sortViewData.inputArr);
    const result = Math.round(minHeight + (maxHeight - minHeight) / (maxNumber - minNumber) * (element - minNumber));
    console.log(result);
    return result;

  }

  ngOnInit() {
  }

}
