import "./globals.css";

export const metadata = {
  title: 'Prasanth | UI/UX Designer Portfolio',
  description: 'Innovative UI/UX Designer crafting exceptional digital experiences. View my portfolio of web and mobile app designs.',
  keywords: 'UI Designer, UX Designer, Web Design, Mobile App Design, Portfolio',
  authors: [{ name: 'Prasanth' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#FFFFFF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
