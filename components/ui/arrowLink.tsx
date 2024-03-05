// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {arrowLink} from "@/types/components";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

// Creating and exporting arrow link component as default
export default function ArrowLink({link, title}:arrowLink):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'flex items-center justify-between dark:text-white text-black'}>
            <span className={'lg:text-[18px] font-light block w-full truncate text-current'}>{title}</span>
            <ArrowUpRight size={20} className={'shrink-0'} color={'currentColor'} />
        </Link>
    );
}