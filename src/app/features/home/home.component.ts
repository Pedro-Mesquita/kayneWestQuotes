import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  quote!: string;
  private subscription: Subscription = new Subscription();

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.subscription = this.service.get().subscribe({
      next: (data) => this.quote = data.quote,
      error: (error) => console.error("Deu ruim padrin", error),
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
