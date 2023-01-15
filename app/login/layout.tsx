// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Toaster from "@/components/toaster";

const inter = Inter({
  subsets: ['latin']
});

export default async function LoginLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className="--font-inter">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
