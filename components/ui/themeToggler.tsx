// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

// Creating and exporting theme toggler as default
export default function ThemeToggler():ReactNode {
    // Defining states of component as default
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    // Returning JSX
    return (
        <Button
            size={'icon'}
            onClick={() => {
                const htmlElement = document.querySelector('html');

                if (theme === 'dark') {
                    setTheme('light')
                    htmlElement?.classList.remove('dark');
                } else {
                    setTheme('dark');
                    htmlElement?.classList.add('dark');
                }
            }}
        >
            {
                (theme === 'dark')
                    ? <SunIcon size={20} color={'currentColor'} />
                    : <MoonIcon size={20} color={'currentColor'} />
            }
        </Button>
    );
}