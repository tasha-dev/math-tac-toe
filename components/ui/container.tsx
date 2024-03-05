// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {container} from "@/types/components";
import {cn} from "@/lib/utils";

// Creating and exporting container component as default
export default function Container({size = 'lg', children, className}:container):ReactNode {
    // Returning JSX
    return (
        <div
            className={cn(
                'mx-auto p-[20px]',
                (size === 'lg') ? 'max-w-[1000px]' : 'max-w-[700px]',
                className
            )}
        >
            {children}
        </div>
    );
}