export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100 min-h-screen p-6">{children}</body>
    </html>
  );
}