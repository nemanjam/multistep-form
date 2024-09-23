import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site-header';

export default function IndexPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex-1 flex flex-col">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Home page
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Go to the
              <Link href="/register">
                <Button variant="link" className="px-1">
                  Register page
                </Button>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
