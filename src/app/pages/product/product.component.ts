import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products = [
    {
      name: 'Car Engine Servicing',
      description: 'Comprehensive engine checkup and oil change.',
      image: 'assets/images/engine-service.jpg',
      price: '₹1200',
    },
    {
      name: 'Bike Chain Lubrication',
      description: 'Ensure smooth and long-lasting bike chain operation.',
      image: 'assets/images/chain-lubrication.jpg',
      price: '₹300',
    },
    {
      name: 'Car Interior Cleaning',
      description: 'Detailed cleaning of seats, mats, and dashboard.',
      image: 'assets/images/interior-cleaning.jpg',
      price: '₹800',
    },
    {
      name: 'Bike Tire Replacement',
      description: 'Replace old tires with high-quality new ones.',
      image: 'assets/images/tire-replacement.jpg',
      price: '₹1500',
    },
    {
      name: 'Car Brake Inspection',
      description: 'Check and replace brake pads for optimal safety.',
      image: 'assets/images/brake-inspection.jpg',
      price: '₹1000',
    },
    {
      name: 'Bike Oil Change',
      description: 'High-quality oil for smooth engine performance.',
      image: 'assets/images/oil-change.jpg',
      price: '₹500',
    },
  ];
}


