import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Datepicker } from "materialize-css";
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { Location } from '@angular/common';
import { SingleTicketJoined, TicketStatus } from 'src/app/models/ticket';
import Swal from 'sweetalert2';
import { map, Observable } from 'rxjs';

declare const M: any;

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})

export class TicketDetailsComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  defaultItem: TicketStatus = {
    tstId: 1,
    tstName:"tst",
    tstDescription:"tst2"
};
  ticket!: Observable<SingleTicketJoined>;
  constructor(private httpTicketSvc: TicketService, private route: ActivatedRoute) {   
    let param1 = this.route.snapshot.paramMap.get('id') || '0';        
    this.ticket =this.httpTicketSvc.getCustomJoinedSingleTicket(param1);  
    M.updateTextFields(); // not working
  }  


  ngAfterViewInit(): void {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
       elems = document.querySelectorAll('.datepicker');
      instances = M.Datepicker.init(elems, {});  
      M.updateTextFields();    //not working
  }
  ngOnInit(): void {
    console.log(document.readyState + ' debug message');
  }
  
}
