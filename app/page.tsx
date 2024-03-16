// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import Container from "@/components/ui/container";
import Game from "@/components/game";
import {Button} from "@/components/ui/button";

// Creating and exporting home page as default
export default function Home():ReactNode {
    // Defining state of component
    const [player2, setPlayer2] = useState<'pc' | 'person'>();

    // Returning JSX
    return (
        <Container size={'sm'}>
            {
                (player2)
                    ? <Game player2={player2} />
                    : (
                        <div>
                            <h1 className={'lg:text-[20px] text-[16px] mb-[20px] font-bold text-center dark:text-white text-black'}>Select Playing Model.</h1>
                            <div className={'flex lg:flex-row flex-col items-center justify-between gap-[10px]'}>
                                <Button onClick={() => setPlayer2('pc')} className={'lg:w-[50%] w-full'}>PC</Button>
                                <Button onClick={() => setPlayer2('person')} className={'lg:w-[50%] w-full'}>Person</Button>
                            </div>
                        </div>
                    )
            }
        </Container>
    );
}