'use client';

import { BoatLogo } from '@/components/layout/logo-mksaas';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function BuiltWithButton() {
  return (
    <div
      onClick={(e) => e.preventDefault()}
      className={cn(
        buttonVariants({ variant: 'outline', size: 'sm' }),
        'border border-border px-4 rounded-md cursor-pointer'
      )}
    >
      <span>Built with</span>
      <span>
        <BoatLogo className="size-5 rounded-full" />
      </span>
      <span className="font-semibold">青舟科技</span>
    </div>
  );
}
