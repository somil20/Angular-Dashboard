import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  services = [
    'On Spot Service',
    'Quick Service',
    'Detailing',
    'Wheel Alignment',
    'Washing',
    'Denting & Painting',
    'AC Service',
    'Convert to EV',
  ];

  slots = [
    { date: '2024-12-23', time: '10:00 AM - 11:00 AM', available: true },
    { date: '2024-12-23', time: '11:00 AM - 12:00 PM', available: false },
    { date: '2024-12-23', time: '12:00 PM - 1:00 PM', available: true },
    { date: '2024-12-23', time: '2:00 PM - 3:00 PM', available: true },
  ];

  onBookAppointment(selectedService: string, selectedSlot: any, contact: string): void {
    if (!selectedSlot.available) {
      alert('This slot is already booked.');
      return;
    }

    if (!selectedService || !contact) {
      alert('Please provide all required details.');
      return;
    }

    alert(
      `Your appointment for "${selectedService}" has been booked successfully on ${selectedSlot.date} at ${selectedSlot.time}.`
    );
  }

}
