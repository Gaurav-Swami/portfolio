import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="  z-10">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
