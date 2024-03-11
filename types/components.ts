// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining types
export interface rootLayout {children: ReactNode;}
export interface game {player2: 'pc' | 'person';}
export interface container {
    size?: 'sm' | 'lg';
    children: ReactNode;
    className?: string;
}

export interface arrowLink {
    title: string;
    link: string;
}

export interface player {
    turn: 1 | 2;
    number: 1 | 2;
    name?: string;
}