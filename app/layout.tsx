
export const metadata = { title: "Todo TS App" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 40 }}>
        {children}
      </body>
    </html>
  );
}
