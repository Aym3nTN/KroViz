import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KROViz — KRO ResourceGraphDefinition Visualizer',
  description: 'Interactive dependency graph visualizer for KRO ResourceGraphDefinitions. Analyze dependencies, execution order, critical paths, and failure impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-[#0f0f17] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
