import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-tile-record',
  templateUrl: './tile-record.component.html',
  styleUrls: ['./tile-record.component.scss']
})
export class TileRecordComponent implements OnInit {

  constructor() {}

  @Input() offerRecord: any;
  @Input() isGlobalOffers: boolean;
  favouriteChecked: boolean = false;
  isFavourite: boolean;
  storageItems: any;
  isContrast: boolean;

  ngOnInit(): void {
    this.storageItems = localStorage.getItem('favourite');
    if (this.storageItems) {
      let storageArray = [];
      storageArray = JSON.parse(this.storageItems)
      this.favouriteChecked = storageArray.some((item: { id: any; }) => item.id === this.offerRecord.id) ? true : false;
    }
  }

  changeStatus(record: any, status: boolean) {
    let storageArray = [];
    this.storageItems = localStorage.getItem('favourite');
    if (!this.storageItems && status === true) {
      storageArray.push(record);
      localStorage.setItem('favourite', JSON.stringify(storageArray));
    } else if (this.storageItems && status === true) {
      storageArray = JSON.parse(this.storageItems)
      storageArray.push(record)
      localStorage.setItem('favourite', JSON.stringify(storageArray));
    } else if (status === false && this.storageItems) {
      storageArray = JSON.parse(this.storageItems);
      storageArray = storageArray.filter((item: { id: any; }) => item.id !== record.id );
      if (!isEmpty(storageArray)) {
        localStorage.setItem('favourite', JSON.stringify(storageArray));
      } else {
        localStorage.removeItem('favourite');
      }
    }
    this.favouriteChecked = !this.favouriteChecked;
  }

}
