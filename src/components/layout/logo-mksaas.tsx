import { cn } from '@/lib/utils';
import Image from 'next/image';

export function BoatLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/mksaas.png"
      alt="Logo of 青舟"
      title="Logo of 青舟"
      width={96}
      height={96}
      className={cn('size-8 rounded-md', className)}
    />
  );
}
