// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";

// Creating and exporting rules component as default
export default function Rules():ReactNode {
    // Returning JSX
    return (
        <Drawer>
            <DrawerTrigger>
                <Button>Rules</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Rules</DrawerTitle>
                    <DrawerDescription>Explore the exciting world of Math Tac To, where strategy meets mathematics! To
                        play the game successfully, familiarize yourself with the following rules:</DrawerDescription>
                </DrawerHeader>
                <ScrollArea className={'px-4 lg:h-[30dvh] h-[50dvh]'}>
                    <div className={'mb-4'}>
                        <DrawerTitle className={'mb-2'}>Objective:</DrawerTitle>
                        <DrawerDescription>When a numbers is selected there are some factors for it which the next selectable numbers should be selected by one of these</DrawerDescription>
                        <DrawerDescription>Be the first player to colorize four boxes either vertically, horizontally on the 6x6 grid.</DrawerDescription>
                    </div>
                    <div className={'mb-4'}>
                        <DrawerTitle className={'mb-2'}>Game Board:</DrawerTitle>
                        <DrawerDescription>The game board consists of a 6x6 grid, each box represented by a unique
                            number. Understand the grid layout for effective gameplay.</DrawerDescription>
                    </div>
                    <div className={'mb-4'}>
                        <DrawerTitle className={'mb-2'}>Winning Conditions:</DrawerTitle>
                        <DrawerDescription>Achieve victory by coloring four boxes in a row, either vertically,
                            horizontally and criss-cross alignments.</DrawerDescription>
                    </div>
                    <div className={'mb-4'}>
                        <DrawerTitle className={'mb-2'}>Gameplay:</DrawerTitle>
                        <DrawerDescription>
                            Players take turns providing two numbers for multiplication. <br/>
                            The result of the multiplication determines the color of the corresponding box.
                        </DrawerDescription>
                    </div>
                </ScrollArea>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button>Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}