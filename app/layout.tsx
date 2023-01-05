// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Toaster from "@/components/toaster";
import AuthStatus from "@/components/auth-status";

const inter = Inter({
  subsets: ['latin']
});

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
  const AuthStatusDiv = await AuthStatus();
  return (
    <html lang="en">
      <body className="--font-inter">
        <Toaster />
        {AuthStatusDiv}
        {children}
      </body>
    </html>
  );
}
