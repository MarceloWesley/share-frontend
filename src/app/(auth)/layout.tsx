export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
