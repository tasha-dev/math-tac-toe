// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {Separator} from "@/components/ui/separator";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header>
            <Container className={'flex items-center justify-between gap-[20px] flex-wrap'}>
                <Logo />
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button>Rules</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Rules</AlertDialogTitle>
                            <Separator className="my-4" />
                            <AlertDialogDescription>

                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </Container>
        </header>
    );
}