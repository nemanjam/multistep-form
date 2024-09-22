import { FC } from 'react';
import { ArrowLeft } from 'lucide-react';

import { REGISTRATION_STEPS } from '@/config/registration';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Props {
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
}

const Navigation: FC<Props> = ({ onBack, onNext, currentStep }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={onBack}
        disabled={currentStep === 0}
      >
        <ArrowLeft />
      </Button>

      <Progress value={50} />

      {currentStep < REGISTRATION_STEPS.length - 1 && (
        <Button type="button" className="rounded-full" onClick={onNext}>
          Continue
        </Button>
      )}
    </div>
  );
};

export default Navigation;
