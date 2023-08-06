'use client';

import { useEffect, useState } from 'react';
import { CopyIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

export default function GeneratedCode({ ...props }) {
  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', { duration: 2000 });
    } catch (error) {
      console.warn('Copy failed', error);
      toast.error('Something went wrong!', { duration: 2000 });
    }
  };

  return (
    <div className='relative'>
      <Button
        variant='outline'
        size='icon'
        onClick={() => copy(props.children[0].props.children[0] || '')}
        className='absolute right-2 top-2'
      >
        <CopyIcon className='h-4 w-4' />
      </Button>
      <pre {...props} />
    </div>
  );
}
