import { Injectable } from '@angular/core';
import { SortViewData } from './sort-view-data'
import { sortViewData } from './sort-data'; //导入数据

@Injectable()
export class SortViewService {

  constructor() { }

  getData (): SortViewData {
    return sortViewData;
  }

}
