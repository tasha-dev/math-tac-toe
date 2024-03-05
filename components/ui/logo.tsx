// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from '@/images/logo.png';

// Creating and exporting logo component as default
export default function Logo():ReactNode {
    // Returning JSX
    return (
        <Link href={'/'}>
            <Image
                className={'dark:invert'}
                alt={'Math tac toe logo'}
                src={logoImage.src}
                width={40}
                height={40}
            />
        </Link>
    );
}