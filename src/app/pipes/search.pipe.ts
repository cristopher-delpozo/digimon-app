import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText?: any): any {
    
    if (!value) {
      return;
    }

    if (!searchText) {
      return value;
    }

    searchText = searchText.toLowerCase();

    return value.filter(item => {
      let matchFound = false;

      if (item.id && item.name && item.level) {
        const id = item.id;
        const name = item.name;
        const level = item.level;

        const searchId = JSON.stringify(id)
          .toLowerCase()
          .includes(searchText);
        
        const searchName = JSON.stringify(name)
          .toLowerCase()
          .includes(searchText);
          
        const searchLevel = JSON.stringify(level)
          .toLowerCase()
          .includes(searchText);

        if (searchId || searchName || searchLevel) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }

}
