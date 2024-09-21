import RegisterFlow from '@/components/multistep-form/register-flow';

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 border border-red-500">
      <RegisterFlow />
    </section>
  );
}
