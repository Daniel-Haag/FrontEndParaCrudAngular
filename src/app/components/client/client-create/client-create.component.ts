import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    name: '',
    email: '',
    address: '',
    contact: 0
  }

  constructor(private clientService: ClientService,
    private router: Router) {

   }

  ngOnInit(): void {
  }
  
  createClient(){
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage("Novo cliente cadastrado!");
      this.router.navigate(['clients']);
    })
  }

}
