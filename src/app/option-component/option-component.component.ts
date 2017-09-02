import { Component, OnInit } from '@angular/core';
import { SortViewService } from 'app/sort-view.service';
import { SortViewData } from 'app/sort-view-data';
import { Sort } from './sort-class';

@Component({
  selector: 'app-option',
  templateUrl: './option-component.component.html',
  styleUrls: ['./option-component.component.css'],
  providers: [SortViewService]
})
export class OptionComponentComponent implements OnInit {
  input: string;
  sortMethod: string = 'bubbleSort';
  interval: number = 2;
  sortObj: Sort;

  constructor(private sortViewService: SortViewService) {
    this.sortViewData = sortViewService.getData();
    this.sortObj = new Sort(0,this.sortViewData.index1,this.sortViewData.index2,this.sortViewData.inputArr)
   }
  sortViewData: SortViewData;


   //把输入的数据传入
  confirmInput(): void{
    let arr
    if(this.input){
      this.sortViewData.inputArr = [];
      arr = this.input.split(',');
      arr.forEach(function(element){
        self.sortViewData.inputArr.push(+element);
      })
    }
    this.sortViewData.whichStep = 0;
    this.sortViewData.index1 = 1;
    this.sortViewData.index2 = 0;
    const self = this;
    console.log(arr);
    this.sortObj = new Sort(0,this.sortViewData.index1,this.sortViewData.index2,this.sortViewData.inputArr)
  } 



  //判断数组是否已排好序
  isSorted(): boolean {
    let arr = this.sortViewData.inputArr;
    for(let i = 1; i < arr.length; i++){
      if(arr[i-1] > arr[i])
        return false;
    }
    return true;
  }

  //手动排序
  sort(): void {
    this.sortObj[this.sortMethod]();
    this.sortViewData.whichStep += 1;
    this.sortViewData.index1 = this.sortObj.index1;
    this.sortViewData.index2 = this.sortObj.index2;
  }

//自动排序
  autoSort(): void{
    let self = this;
    setTimeout(function() {
      let intervalID = setInterval(function() {
        self.sort();
        if(self.isSorted())
          clearInterval(intervalID)
      }, 1000*self.interval)
    }, 500*self.interval);
  }

  ngOnInit() {
  }

}
