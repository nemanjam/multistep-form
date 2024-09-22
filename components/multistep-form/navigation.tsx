import { FC } from 'react';
import { ArrowLeft } from 'lucide-react';

import { REGISTRATION_STEPS } from '@/config/registration';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Props {
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
  progress: number;
  isValidStepProfile: boolean;
}

const Navigation: FC<Props> = ({
  onBack,
  onNext,
  currentStep,
  progress,
  isValidStepProfile,
}) => {
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

      <Progress value={progress} />

      {currentStep < REGISTRATION_STEPS.length - 1 && (
        <Button
          type="button"
          className="rounded-full"
          onClick={onNext}
          disabled={!isValidStepProfile}
        >
          Continue
        </Button>
      )}
    </div>
  );
};

export default Navigation;
