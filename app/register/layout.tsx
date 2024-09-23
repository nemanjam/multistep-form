interface RegistrationLayoutProps {
  children: React.ReactNode;
}

export default function RegistrationLayout({
  children,
}: RegistrationLayoutProps) {
  return <div className="flex-1 flex flex-col">{children}</div>;
}
