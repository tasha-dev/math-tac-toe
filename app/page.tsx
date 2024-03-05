// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import Container from "@/components/ui/container";

// Creating and exporting home page as default
export default function Home():ReactNode {
    // Defining states of component
    const [player1Boxes, setPlayer1Boxes] = useState<number[] | []>([]);
    const [player2Boxes, setPlayer2Boxes] = useState<number[] | []>([]);
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

    // Returning JSX
    return (
        <Container size={'sm'}>
            <ul className={'list-disc'}>
                {
                    player1Boxes.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
            <div
                className={'grid grid-cols-6 grid-rows-[calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)]'}>
                {
                    boxNumbers.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                if (turn === 1) {
                                    setTurn(2);
                                } else {
                                    setTurn(1);
                                }
                            }}
                            className={'border dark:border-white border-black cursor-pointer flex items-center justify-center text-[15px] font-normal dark:text-white text-black'}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
        </Container>
    );
}