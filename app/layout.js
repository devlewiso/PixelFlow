import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PixelFlow - Image Optimization Made Simple",
  description:
    "PixelFlow is your go-to solution for converting images to WebP format with efficiency and ease.",
  openGraph: {
    url: "https://pixelflow.neuralcodelab.com/",
    type: "website",
    title: "PixelFlow - Image Optimization Made Simple",
    description: "PixelFlow is your go-to solution for converting images to WebP format with efficiency and ease.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/c4295f43-e479-40e8-917a-adfb0a0deac8.png?token=ssggz-q374la0QFEbPv0_ixzpTxRy0EZKI5feptuxeU&height=923&width=1181&expires=33281171301",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "pixelflow.neuralcodelab.com",
    url: "https://pixelflow.neuralcodelab.com/",
    title: "PixelFlow - Image Optimization Made Simple",
    description: "PixelFlow is your go-to solution for converting images to WebP format with efficiency and ease.",
    images: [
      "https://opengraph.b-cdn.net/production/images/c4295f43-e479-40e8-917a-adfb0a0deac8.png?token=ssggz-q374la0QFEbPv0_ixzpTxRy0EZKI5feptuxeU&height=923&width=1181&expires=33281171301",
    ],
  },
  metadataBase: new URL("https://pixelflow.neuralcodelab.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TLKEJGV7QE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TLKEJGV7QE');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
