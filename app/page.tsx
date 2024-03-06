// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useEffect, useState} from "react";
import Container from "@/components/ui/container";
import Player from "@/components/player";
import {cn} from "@/lib/utils";

// Creating and exporting home page as default
export default function Home():ReactNode {
    // Defining states of component
    const [player1Boxes, setPlayer1Boxes] = useState<number[]>([]);
    const [player2Boxes, setPlayer2Boxes] = useState<number[]>([]);
    const [turn, setTurn] = useState<1 | 2>(1);

    // Defining array of box numbers
    const boxNumbers:number[] = [
        1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 12, 14,
        15, 16, 18, 20, 21, 24,
        25, 27, 28, 30, 32, 35,
        36, 40, 42, 45, 48, 49,
        54, 56, 63, 64, 72, 81,
    ];

    // Returning JSX
    return (
        <Container size={'sm'}>
            <div className={'flex items-center gap-[10px] justify-between flex-wrap mb-[20px]'}>
                <Player turn={turn} number={1} />
                <Player turn={turn} number={2} />
            </div>
            <div className={'grid grid-cols-6 grid-rows-[calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)]'}>
                {
                    boxNumbers.map((item, index) => (
                        <div
                            key={index}
                            className={cn(

                                'border dark:border-white border-black cursor-pointer flex items-center justify-center text-[15px] font-normal dark:text-white text-black',
                                (player1Boxes.includes(item))
                                    ? 'bg-red-600'
                                    : (player2Boxes.includes(item))
                                        ? 'bg-blue-600'
                                        : 'bg-transparent'
                            )}
                            onClick={() => {
                                if (turn === 1) {
                                    if (!player1Boxes.includes(item) && !player2Boxes.includes(item)) {
                                        const array = [...player1Boxes];
                                        array.push(item);

                                        setPlayer1Boxes(array);
                                        setTurn(2);
                                    }
                                } else {
                                    if (!player1Boxes.includes(item) && !player2Boxes.includes(item)) {
                                        const array = [...player2Boxes];
                                        array.push(item);

                                        setPlayer2Boxes(array);
                                        setTurn(1);
                                    }
                                }
                            }}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
            {
                (player1Boxes[0] !== undefined)
                    ? (
                        <div className={'grid grid-cols-2 gap-[10px] mt-[20px]'}>
                            <ul className={'list-disc dark:[&>li]:text-white [&>li]:text-black ml-4'}>
                                {
                                    player1Boxes.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                            <ul className={'list-disc dark:[&>li]:text-white [&>li]:text-black ml-4'}>
                                {
                                    player2Boxes.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ) : false
            }
        </Container>
    );
}