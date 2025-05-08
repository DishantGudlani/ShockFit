export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface ServiceItem {
    label: string;
    href: string;
    description?: string;
  }
  
  export interface NavConfig {
    navItems: NavItem[];
    services: ServiceItem[];
  }