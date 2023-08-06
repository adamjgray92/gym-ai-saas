import { CodeIcon, ImageIcon } from 'lucide-react';

export const MAX_FREE_COUNTS = 5;

export const TOOLS = [
  {
    label: 'Code Generation',
    icon: CodeIcon,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
];
