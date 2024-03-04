// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining types
export interface rootLayout {children: ReactNode;}
export interface container {
    size?: 'sm' | 'lg';
    children: ReactNode;
    className?: string;
}