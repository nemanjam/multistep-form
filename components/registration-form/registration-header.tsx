import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/images/repairwise-logo.png';

import { siteConfig } from '@/config/site';

export function RegistrationHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0 max-w-screen-2xl mx-auto px-8">
        <Link href={siteConfig.mainNav[0].href}>
          <Image
            src={logoImage}
            width={277}
            height={97}
            alt="RepairWise logo"
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
