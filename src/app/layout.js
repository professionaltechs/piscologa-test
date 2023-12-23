import Head from "next/head";
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Dott.ssa Polverino - Psicologa',
  description: 'Sito web della Dott.ssa Polverino, psicologa a Caserta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
              <Script
                dangerouslySetInnerHTML={
                  {
                    __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "ivyh2tycs5");`,
                  }}
              />;
            </Head>
            <body className={pop.className}>{children}
              <Script
                dangerouslySetInnerHTML={
                  {
                    __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "ivyh2tycs5");`,
                  }}
              /></body>
          </html>
          )
}
