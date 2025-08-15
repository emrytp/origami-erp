import Loader from '@/components/Loader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white">
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <Loader />
        </div>
        {children}
      </body>
    </html>
  );
}
