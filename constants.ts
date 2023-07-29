import { DumbbellIcon, UtensilsCrossedIcon } from 'lucide-react';

export const MAX_FREE_COUNTS = 5;

export const TOOLS = [
  {
    label: 'Daily Workout',
    icon: DumbbellIcon,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/workout',
  },
  {
    label: 'Meal Plan',
    icon: UtensilsCrossedIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href: '/meal-plan',
  },
];
