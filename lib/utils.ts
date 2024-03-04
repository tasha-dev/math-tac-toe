// Codes by mahdi tasha
// Importing part
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Defining cn utility which is a function to twMerge and clsx its given parameter
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
