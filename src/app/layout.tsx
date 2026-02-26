import type { Metadata } from "next";
import { Bungee, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Dunrae Gardens Wild Robot Build Hub",
  description:
    "Dunrae Gardens Grade 4 home build guide for Wild Robot: dates, materials, goals, and next steps.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${bungee.variable}`}>
      <body className="min-h-screen antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t-4 border-[var(--wild-bark)] bg-transparent py-6">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div>
                <p className="font-display text-sm font-black uppercase tracking-wide text-[var(--wild-bark)]">
                  DGSTEAM Wild Robot CoLearn Project
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={(process.env.BASE_PATH ?? "/dg-wildrobot") + "/images/IRV-logo-small.png"}
                alt="Made with IRV"
                className="h-7 w-auto"
              />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
