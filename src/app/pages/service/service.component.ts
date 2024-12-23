import { Component } from '@angular/core';

@Component({
  selector: 'ngx-services',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  services = [
    {
      title: 'On Spot Service',
      description: 'Quick and efficient on-the-spot automobile service at your location.',
      image: 'https://images.unsplash.com/photo-1579273162173-3b94f954a6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Service by Booking Slot',
      description: 'Convenient scheduling to fit your busy day.',
      image: 'https://images.unsplash.com/photo-1604335399100-92d2ff8c590d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Quick Service',
      description: 'Get back on the road with minimal downtime.',
      image: 'https://images.unsplash.com/photo-1583454154990-8d1b43c5fb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Detailing',
      description: 'Thorough cleaning and restoration for your vehicle.',
      image: 'https://images.unsplash.com/photo-1554774853-aae0a11b05b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Wheel Alignment',
      description: 'Ensure perfect alignment for a smooth ride.',
      image: 'https://images.unsplash.com/photo-1598133894002-c07b4eeb6cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Washing',
      description: 'Professional washing to keep your vehicle spotless.',
      image: 'https://images.unsplash.com/photo-1586268945584-cd7f74eb1f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Denting',
      description: 'Restore your vehicle’s body to perfection.',
      image: 'https://images.unsplash.com/photo-1517153295259-4f63c7b7c57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Painting',
      description: 'High-quality painting services to renew your vehicle’s look.',
      image: 'https://images.unsplash.com/photo-1611300961408-9a2c3b5451ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'AC Service',
      description: 'Stay cool with expert AC servicing.',
      image: 'https://images.unsplash.com/photo-1604358728595-0c0a0a7d5a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Convert to EV',
      description: 'Eco-friendly conversion to electric vehicles.',
      image: 'https://images.unsplash.com/photo-1599941033293-59854e39c5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
  ];
}
