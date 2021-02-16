import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owners/owner.service';
import { Owner } from '../owner';
import { Gender } from '../gender';
import { Customer } from '../customer';
import { from, of } from 'rxjs';
import { mergeMap, groupBy, reduce, tap, concatAll, toArray, concatMap } from 'rxjs/operators';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  owners?: Owner[];
  customers?: Customer[];
  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getOwners();
  }

  getOwners(): void {
    this.ownerService.getOwners().
      subscribe(owners => {
        this.owners = owners;
        this.formatData(owners);
      });
  }

  // formatData(owners: Owner[]): void {
  // this.customers = new Array();
  // from(owners).pipe(groupBy(x => x.gender),
  //   mergeMap(group => group.pipe(toArray()))).subscribe(val => { val.sort(); this.customers.push(val) });
  // }

  formatData(owners: Owner[]): void {
    const male: Array<string> = new Array<string>();
    const female: Array<string> = new Array<string>();

    owners.forEach((e) => {
      if (e.gender == Gender.Male) {
        e.pets?.forEach((p) => {
          if (p != null && p.type == 'Cat') {
            male.push(p.name);
          }
        });
      } else if (e.gender == Gender.Female) {
        e.pets?.forEach((p) => {
          if (p != null && p.type == 'Cat') {
            female.push(p.name);
          }
        });
      }

    });
    male.sort();
    female.sort();


    this.customers = new Array<Customer>();
    this.customers.push({ gender: Gender.Male, pets: male });
    this.customers.push({ gender: Gender.Female, pets: female });



  }

}
