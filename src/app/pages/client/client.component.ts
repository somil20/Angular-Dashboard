import { Component } from '@angular/core';

@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  clients = [
    {
      name: 'John Doe',
      designation: 'CEO, AutoWorld',
      testimonial:
        'Mech Buddy provided outstanding service for my fleet of cars. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    },
    {
      name: 'Jane Smith',
      designation: 'Manager, QuickFix Repairs',
      testimonial:
        'Their quick service and attention to detail are unmatched. Will use their services again!',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400',
    },
    {
      name: 'Michael Brown',
      designation: 'Founder, GoGreen Automobiles',
      testimonial:
        'The EV conversion service was seamless and professionally done. Excellent job!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    },
  ];
}
