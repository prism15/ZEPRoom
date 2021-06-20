import { Pipe, PipeTransform } from '@angular/core';
import { HistoryModel } from './../history.model';


@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform( history : HistoryModel[],searchValue : String): HistoryModel[]{
    if(!history || !searchValue){
      return history
    }
    return history.filter(history=>history.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
