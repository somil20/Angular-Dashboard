import { NbMenuItem } from '@nebular/theme';

export const menuItems: NbMenuItem[] = [
    {
      title: 'Vendor',
      icon: 'people-outline',  // Eva icon for vendor management
      link: '/pages/vendor',           // Adjust this to match the correct route for Vendor
    },
    {
      title: 'Products',
      icon: 'cube-outline',    // Eva icon for products
      link: '/pages/list',           // Adjust this to match the correct route for Products
    },
    {
      title: 'Service',
      icon: 'settings-2-outline', // Eva icon for service management
      link: '/pages/list',             // Adjust this to match the correct route for Service
    },
    {
      title: 'Client',
      icon: 'person-done-outline', // Eva icon for clients
      link: '/pages/list',              // Adjust this to match the correct route for Client
    },
    {
      title: 'Appointment / Booking',
      icon: 'calendar-outline',    // Eva icon for appointment or booking
      link: '/pages/list',               // Adjust this to match the correct route for Appointment/Booking
    }
]