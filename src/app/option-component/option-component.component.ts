import { Component, OnInit } from '@angular/core';
import { SortViewService } from 'app/sort-view.service';
import { SortViewData } from 'app/sort-view-data';

@Component({
  selector: 'app-option',
  templateUrl: './option-component.component.html',
  styleUrls: ['./option-component.component.css'],
  providers: [SortViewService]
})
export class OptionComponentComponent implements OnInit {

  constructor(private sortViewService: SortViewService) {
    this.sortViewData = sortViewService.getData();
   }
  sortViewData: SortViewData;

  input: string;
  sortMethod: string = '0';
  interval: number = 2;

   //把输入的数据传入
  confirmInput(): void{
    this.sortViewData.whichStep = 0;
    this.sortViewData.inputArr = [];
    const self = this;
    let arr = this.input.split(',');
    arr.forEach(function(element){
      self.sortViewData.inputArr.push(+element);
    })
    console.log(arr);
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

  //冒泡排序法
  bubbleSort(): void {

  }

  //选择排序法
  slectionSort(): void {
    
  }
  //手动排序
  sort(): void {
    let i = this.sortViewData.whichStep;
    let j = 0;
    let arr = this.sortViewData.inputArr;
    let index1 = this.sortViewData.index1;
    let index2 = this.sortViewData.index2;
    let n = arr.length;
    let temp;

    if(index2 >= n - j){
      this.sortViewData.index1 = 0;
      this.sortViewData.index2 = 1;
      index1 = 0;
      index2 = 0;
      return;
    }
    
    if(arr[index2] < arr[index1]){
      temp = arr[index2];
      arr[index2] = arr[index1];
      arr[index1] = temp;                                
    }
    console.log(index2);
    this.sortViewData.whichStep += 1;
    this.sortViewData.index1 += 1;
    this.sortViewData.index2 += 1;
    j += 1;
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
