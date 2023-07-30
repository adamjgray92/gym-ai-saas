'use client';

import { useState } from 'react';
import axios from 'axios';
import { ZapIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function SubscriptionButton({
  isPro = false,
}: {
  isPro: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      disabled={isLoading}
      onClick={onClick}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <ZapIcon className='w-4 h-4 ml-2 fill-white' />}
    </Button>
  );
}
