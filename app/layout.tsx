// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import siteConfig from "@/config/siteConfig";
import {Noto_Sans} from "next/font/google";
import {rootLayout} from '@/types/components';
import {cn} from "@/lib/utils";
import '@/styles/index.css';
import Header from "@/components/header";
import Footer from "@/components/footer";

// Defining font of page
const NotoFont = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
    variable: "--font-sans",
});

// Defining metadata of page
export const metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: ["Math Tac To", "Multiply to Win", "Educational Game", "Strategy Puzzle", "TypeScript Game", "Next.js Gaming", "TailwindCSS Design", "Number Multiplication", "Multiplayer Math", "PC Challenge", "Logic and Math", "Game Development", "Interactive Learning", "Numerical Puzzle", "Board Game", "JavaScript Gaming", "Fun Mathematics", "Player vs Computer", "Creative Multiplication", "Strategic Gameplay", "Colorful Boxes", "Educational Entertainment", "ReactJS Game", "TypeScript Challenge", "Numbers and Colors"],
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#fffff"},
        {media: "(prefers-color-scheme: dark)", color: "#00000"},
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    }
}

// Creating and exporting root layout of the page
export default function RootLayout({children}:rootLayout):ReactNode {
    // returning JSX
    return (
        <html className={'dark'}>
            <body className={cn('overflow-x-hidden overflow-y-auto min-h-screen dark:bg-slate-900 bg-slate-200', NotoFont.className)}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
