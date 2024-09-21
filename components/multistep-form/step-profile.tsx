import { FC } from 'react';
import { Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Props {}

const StepProfile: FC<Props> = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="basis-1/2">
        <Button type="button" className="uppercase rounded-xl">
          <Zap className="mr-2 size-4" />
          Profile Info
        </Button>
        <h2>Welcome! Let&apos;s get started.</h2>
        <p>
          We&apos;ll use this information to send your free health check and
          find service providers in your area.
        </p>
      </div>
      <div className="basis-1/2 border border-blue-500">profile form</div>
    </div>
  );
};

export default StepProfile;
