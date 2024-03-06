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
        1 , 2 , 3 , 4 , 5 , 6 ,
        7 , 8 , 9 , 10, 11, 12,
        13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36
    ];

    // Using useEffect to find winner
    useEffect(() => {
        function checkPatterns(choices: number[]):boolean {
            const patterns = [
                [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
                [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12],
                [13, 14, 15, 16], [14, 15, 16, 17], [15, 16, 17, 18],
                [19, 20, 21, 22], [20, 21, 22, 23], [21, 22, 23, 24],
                [25, 26, 27, 28], [26, 27, 28, 29], [27, 28, 29, 30],
                [31, 32, 33, 34], [32, 33, 34, 35], [33, 34, 35, 36],
                [1, 7, 13, 19], [7, 13, 19, 25], [2, 8, 14, 20], [8, 14, 20, 26],
                [3, 9, 15, 21], [9, 15, 21, 27], [4, 10, 16, 22], [10, 16, 22, 28],
                [5, 11, 17, 23], [11, 17, 23, 29], [6, 12, 18, 24], [12, 18, 24, 30],
                [1, 8, 15, 22], [8, 15, 22, 29], [6, 11, 16, 21], [11, 16, 21, 26]
            ];

            return patterns.some(pattern => pattern.every(num => choices.includes(num)));
        }

        const player1Win = checkPatterns(player1Boxes);
        const player2Win = checkPatterns(player2Boxes);

        if (player1Win || player2Win) {
            setPlayer1Boxes([]);
            setPlayer2Boxes([]);
        }
    }, [player1Boxes, player2Boxes])

    // Returning JSX
    return (
        <Container size={'sm'}>
            <div className={'flex items-center gap-[10px] justify-between flex-wrap mb-[20px]'}>
                <Player turn={turn} number={1} />
                <Player turn={turn} number={2} />
            </div>
            <div
                className={'grid grid-cols-6 grid-rows-[calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)]'}>
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
        </Container>
    );
}