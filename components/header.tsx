// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import ThemeToggler from "@/components/ui/themeToggler";
import Rules from "@/components/rules";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header>
            <Container className={'flex items-center justify-between gap-[20px] flex-wrap'}>
                <Logo />
                <div className={'flex gap-[20px] flex-wrap'}>
                    <ThemeToggler />
                    <Rules />
                </div>
            </Container>
        </header>
    );
}