// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useEffect, useState} from "react";
import Container from "@/components/ui/container";
import Player from "@/components/player";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

// Creating and exporting home page as default
export default function Home():ReactNode {
    // Defining array of box numbers
    const boxNumbers:number[] = [
        1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 12, 14,
        15, 16, 18, 20, 21, 24,
        25, 27, 28, 30, 32, 35,
        36, 40, 42, 45, 48, 49,
        54, 56, 63, 64, 72, 81,
    ];

    // Defining states of component
    const [player1Boxes, setPlayer1Boxes] = useState<number[]>([]);
    const [player2Boxes, setPlayer2Boxes] = useState<number[]>([]);
    const [latestNumber, setLatestNumber] = useState<number>();
    const [numbersToActivate, setNumbersToActivate] = useState<number[]>(boxNumbers);
    const [turn, setTurn] = useState<1 | 2>(1);

    const multiplyNumbers:{
        number: number,
        multiply: [number, number][]
    }[]= [
        {number: 1, multiply: [[1, 1]]},
        {number: 2, multiply: [[1, 2]]},
        {number: 3, multiply: [[1, 3]]},
        {number: 4, multiply: [[1, 4]]},
        {number: 5, multiply: [[1, 5]]},
        {number: 6, multiply: [[1, 6]]},
        {number: 7, multiply: [[1, 7]]},
        {number: 8, multiply: [[1, 8]]},
        {number: 9, multiply: [[1, 9]]},
        {number: 10, multiply: [[2, 5]]},
        {number: 12, multiply: [[2, 6], [3, 4]]},
        {number: 14, multiply: [[2, 7]]},
        {number: 15, multiply: [[3, 5]]},
        {number: 16, multiply: [[4, 4], [8, 2]]},
        {number: 18, multiply: [[3, 6], [2, 9]]},
        {number: 20, multiply: [[4, 5]]},
        {number: 21, multiply: [[3, 7]]},
        {number: 24, multiply: [[3, 8], [4, 6]]},
        {number: 25, multiply: [[4, 5]]},
        {number: 27, multiply: [[3, 7]]},
        {number: 28, multiply: [[3, 8], [4, 6]]},
        {number: 30, multiply: [[6, 5]]},
        {number: 32, multiply: [[4, 8]]},
        {number: 35, multiply: [[7, 5]]},
        {number: 36, multiply: [[6, 6], [9, 4]]},
        {number: 40, multiply: [[8, 5]]},
        {number: 42, multiply: [[6, 7]]},
        {number: 45, multiply: [[9, 5]]},
        {number: 48, multiply: [[6, 8]]},
        {number: 49, multiply: [[7, 7]]},
        {number: 54, multiply: [[9, 6]]},
        {number: 56, multiply: [[8, 7]]},
        {number: 63, multiply: [[9, 7]]},
        {number: 64, multiply: [[8, 8]]},
        {number: 72, multiply: [[9, 8]]},
        {number: 81, multiply: [[9, 9]]}
    ];

    useEffect(() => {
        // Setting numbers to activate
        const mutiplyOfCurrentNumber = multiplyNumbers.find(item => item.number === latestNumber)?.multiply;

        mutiplyOfCurrentNumber?.forEach((numberArray) => {
            const firstNumber = numberArray[0];
            const secondNumber = numberArray[1];

            const multiplyFirst:number[] = [firstNumber * 1, firstNumber * 2, firstNumber * 3, firstNumber * 4, firstNumber * 5, firstNumber * 6, firstNumber * 7, firstNumber * 8, firstNumber * 9];
            const multiplySecond:number[] = [secondNumber * 1, secondNumber * 2, secondNumber * 3, secondNumber * 4, secondNumber * 5, secondNumber * 6, secondNumber * 7, secondNumber * 8, secondNumber * 9];

            const concattedArray = multiplyFirst.concat(multiplySecond);
            setNumbersToActivate(concattedArray);
        })
    }, [player1Boxes, player2Boxes]);

    // Returning JSX
    return (
        <Container size={'sm'}>
            <div className={'flex items-center gap-[10px] justify-between flex-wrap'}>
                <Player turn={turn} number={1} />
                <Player turn={turn} number={2} />
            </div>
            <Button
                className={'w-full my-[20px]'}
                onClick={() => {
                    setPlayer1Boxes([]);
                    setPlayer2Boxes([]);
                    setLatestNumber(0)
                    setNumbersToActivate(boxNumbers)
                    setTurn(1)
                }}
            >
                Reset
            </Button>
            <div className={'grid grid-cols-6 lg:grid-rows-[calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)_calc(700px/6)] grid-rows-[calc(500px/6)_calc(500px/6)_calc(500px/6)_calc(500px/6)_calc(500px/6)_calc(500px/6)]'}>
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
                                        : (numbersToActivate.includes(item))
                                            ? 'dark:bg-white/20 bg-black/20'
                                            : 'bg-transparent'
                            )}
                            onClick={() => {
                                if (turn === 1) {
                                    if (
                                        !player1Boxes.includes(item) &&
                                        !player2Boxes.includes(item) &&
                                        numbersToActivate.includes(item)
                                    ) {
                                        const array = [...player1Boxes];
                                        array.push(item);

                                        setPlayer1Boxes(array);
                                        setTurn(2);
                                        setLatestNumber(item);
                                    }
                                } else {
                                    if (!player1Boxes.includes(item) && !player2Boxes.includes(item) && numbersToActivate.includes(item)) {
                                        const array = [...player2Boxes];
                                        array.push(item);

                                        setPlayer2Boxes(array);
                                        setTurn(1);
                                        setLatestNumber(item);
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