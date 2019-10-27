import { NavTab } from '../interfaces/nav-tab.interface';

export const navTabsConst: NavTab[] = [
  {
    name: 'home',
    label: 'Home',
    url: 'home',
    disabled: true,
  },
  {
    name: 'user',
    label: 'Users',
    url: 'user/list',
    disabled: false,
  },
];
