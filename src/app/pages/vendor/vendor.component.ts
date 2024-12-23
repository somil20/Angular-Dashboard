import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent {
  vendors = [
    {
      name: 'Vendor One',
      title: 'Electronics Specialist',
      picture: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Vendor Two',
      title: 'Furniture Expert',
      picture: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Vendor Three',
      title: 'Car Mechanic',
      picture: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Vendor Three',
      title: 'Car Mechanic',
      picture: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Vendor Three',
      title: 'Car Mechanic',
      picture: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Vendor Three',
      title: 'Car Mechanic',
      picture: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Vendor Three',
      title: 'Car Mechanic',
      picture: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  viewDetails(vendor: any): void {
    alert(`Viewing details for ${vendor.name}`);
  }
}
