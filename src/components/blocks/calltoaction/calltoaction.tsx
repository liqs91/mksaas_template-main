import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function CallToActionSection() {
  const t = useTranslations('HomePage.calltoaction');

  return (
    <section id="call-to-action" className="px-4 py-24 bg-muted/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-muted-foreground">{t('description')}</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={(e) => e.preventDefault()}>
              <span>{t('primaryButton')}</span>
            </Button>

            <Button size="lg" variant="outline" onClick={(e) => e.preventDefault()}>
              <span>{t('secondaryButton')}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
