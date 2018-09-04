import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'AngularDataTable';
  message = '';
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      "pagingType": "full_numbers",
      "pageLength":"5",
      select: true,
      dom: 'Bfrtip',
      buttons: [
       
        'copy',
        'print',
        'excel',
        'pdf'
      ]

     
     
    
    };

  }

 
 
}
