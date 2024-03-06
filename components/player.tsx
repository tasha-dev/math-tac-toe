// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {player} from '@/types/components'
import {cn} from "@/lib/utils";

// Creating and exporting player component as default
export default function Player({turn, number, name = `Player ${number}`}:player):ReactNode {
    // Returning JSX
    return (
        <div className={'flex items-center gap-[10px]'}>
            <div
                data-turn={(turn === number)}
                className={cn(
                    'w-[40px] h-[40px] rounded-[10px] shadow-xl transition-all duration-500 data-[turn="false"]:shadow-transparent dark:data-[turn="true"]:shadow-white/20 data-[turn="true"]:shadow-black/50',
                    (number === 1) ? 'bg-red-600' : 'bg-blue-600'
                )}
            />
            <span className={'text-[14px] font-light dark:text-white text-black'}>{name}</span>
        </div>
    );
}