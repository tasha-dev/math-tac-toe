// Codes by mahdi tasha
// Importing part
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Creating and exporting cn function which combines twMerge and clsx functions together via given parameter
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Creating and exporting function to play audio
export function playAudio(route:string):void {
  const audio = new Audio(route);
  audio.play();
}