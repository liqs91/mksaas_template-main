import { cn } from '@/lib/utils';
import Image from 'next/image';

export function BoatLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/mksaas.png"
      alt="Logo of 青舟科技"
      title="Logo of 青舟科技"
      width={96}
      height={96}
      className={cn('size-8 rounded-md', className)}
    />
  );
}
