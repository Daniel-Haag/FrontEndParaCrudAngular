import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'contact', 'action'];
  dataSource: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients;
      this.dataSource = clients;
    })
  }

}
