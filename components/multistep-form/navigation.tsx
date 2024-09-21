interface Props {
  onBack: () => void;
  onNext: () => void;
}

const Navigation: React.FC<Props> = ({ onBack, onNext }) => {
  return (
    <div className="flex items-center justify-between">
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="button" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Navigation;
