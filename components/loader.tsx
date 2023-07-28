import Image from 'next/image';

export default function Loader() {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
      <div className='h-10 w-10 relative animate-spin'>
        <Image alt='logo' fill src='/logo.png' />
      </div>
      <p className='text-sm text-muted-foreground'>IntelliGym is thinking...</p>
    </div>
  );
}
