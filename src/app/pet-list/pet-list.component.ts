import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owners/owner.service';
import { Owner } from '../owner';
import { from, of } from 'rxjs';
import { mergeMap, groupBy, reduce, tap, map, concatAll, toArray, concatMap } from 'rxjs/operators';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  owners?: Owner[];
  customers?: any;
  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getOwners();
  }

  getOwners(): void {
    this.ownerService.getOwners().
      subscribe(owners => {
        this.owners = owners;
        // this.formatData(owners)
      });
  }

 // formatData(owners: Owner[]): void {
   // this.customers = new Array();
   // from(owners).pipe(groupBy(x => x.gender),
   //   mergeMap(group => group.pipe(toArray()))).subscribe(val => { val.sort(); this.customers.push(val) });
 // }

}
