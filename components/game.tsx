// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useEffect, useState} from "react";
import Player from "@/components/player";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import {game} from "@/types/components";

// Creating and exporting game itself as default
export default function Game({player2}: game): ReactNode {
// Defining array of box numbers
    const boxNumbers: number[] = [
        1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 12, 14,
        15, 16, 18, 20, 21, 24,
        25, 27, 28, 30, 32, 35,
        36, 40, 42, 45, 48, 49,
        54, 56, 63, 64, 72, 81,
    ];

    // Defining toasts
    const {toast} = useToast()

    // Defining states of component
    const [player1Boxes, setPlayer1Boxes] = useState<number[]>([]);
    const [player2Boxes, setPlayer2Boxes] = useState<number[]>([]);
    const [latestNumber, setLatestNumber] = useState<number>();
    const [numbersToActivate, setNumbersToActivate] = useState<number[]>(boxNumbers);
    const [turn, setTurn] = useState<1 | 2>(1);
    const [winner, setWinner] = useState<1 | 2>();

    const multiplyNumbers: {
        number: number,
        multiply: [number, number][]
    }[] = [
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

    // Defining a function to reset
    function reset(): void {
        setPlayer1Boxes([]);
        setPlayer2Boxes([]);
        setLatestNumber(undefined);
        setNumbersToActivate(boxNumbers);
        setTurn(1);
        setWinner(undefined);
    }

    useEffect(() => {
        // Setting numbers to activate
        const mutiplyOfCurrentNumber = multiplyNumbers.find(item => item.number === latestNumber)?.multiply;

        mutiplyOfCurrentNumber?.forEach((numberArray) => {
            const firstNumber = numberArray[0];
            const secondNumber = numberArray[1];

            const multiplyFirst: number[] = [firstNumber * 1, firstNumber * 2, firstNumber * 3, firstNumber * 4, firstNumber * 5, firstNumber * 6, firstNumber * 7, firstNumber * 8, firstNumber * 9];
            const multiplySecond: number[] = [secondNumber * 1, secondNumber * 2, secondNumber * 3, secondNumber * 4, secondNumber * 5, secondNumber * 6, secondNumber * 7, secondNumber * 8, secondNumber * 9];

            const concattedArray = multiplyFirst.concat(multiplySecond);
            setNumbersToActivate(concattedArray);
        })

        // Finding the winner
        function checkWin(choices:number[]):boolean {
            // Define winning patterns for horizontal, vertical, and diagonal sequences
            const winningPatterns = [
                [1, 2, 3, 4, 5], [2, 3, 4, 5, 6], // Horizontal
                [7, 8, 9, 10, 12], [8, 9, 10, 12, 14], // Horizontal
                [15, 16, 18, 20, 21], [16, 18, 20, 21, 24], // Horizontal
                [25, 27, 28, 30, 32], [27, 28, 30, 32, 35], // Horizontal
                [36, 40, 42, 45, 48], [40, 42, 45, 48, 49], // Horizontal
                [54, 56, 63, 64, 72], [56, 63, 64, 72, 81], // Horizontal
                [1, 7, 15, 25, 36], [7, 15, 25, 36, 54], // Vertical
                [2, 8, 16, 27, 40], [8, 16, 27, 40, 56], // Vertical
                [3, 9, 18, 28, 42], [9, 18, 28, 42, 63], // Vertical
                [4, 10, 20, 30, 45], [10, 20, 30, 45, 64], // Vertical
                [5, 12, 21, 32, 48], [12, 21, 32, 48, 72], // Vertical
                [6, 14, 24, 35, 49], [14, 24, 35, 49, 81], // Vertical
                [1, 8, 18, 30, 45], [2, 9, 20, 32, 48], [3, 10, 21, 35, 49], // Diagonal
                [7, 16, 28, 42, 64], [8, 18, 30, 45, 72], [15, 27, 40, 56, 81], // Diagonal
                [5, 10, 18, 27, 36], [12, 20, 28, 40, 54], [21, 30, 42, 56, 63], // Diagonal
                [2, 9, 20, 32, 49], [1, 10, 21, 35, 56], [8, 18, 30, 45, 64] // Diagonal
            ];

            // Check each winning pattern
            for (const pattern of winningPatterns) {
                const intersection = choices.filter((num:number) => pattern.includes(num));
                if (intersection.length >= 4) {
                    return true; // Found a winning pattern
                }
            }

            return false; // No winning pattern found
        }

        if (player1Boxes.length !== 0 && player2Boxes.length !== 0) {
            const is1Winner = checkWin(player1Boxes.sort());
            const is2Winner = checkWin(player2Boxes.sort());

            if (is1Winner) {
                toast({title: 'Player 1 won'});
                reset();
            } else if (is2Winner) {
                toast({title: 'Player 2 won'});
                reset();
            }
        }
    }, [player1Boxes, player2Boxes]);

    // Using useEffect hook to play while mode is set to pc
    useEffect(() => {
        if (turn === 2 && player2 === 'pc') {
            const availibleBoxes = numbersToActivate.filter(item => !player1Boxes.includes(item) && !player2Boxes.includes(item));
            const randomNumber = availibleBoxes[Math.floor(Math.random() * availibleBoxes.length)];
            const player2choicesCopy = [...player2Boxes];

            player2choicesCopy.push(randomNumber);
            setPlayer2Boxes(player2choicesCopy);
            setTurn(1);
        }
    }, [turn]);

    // Returning JSX
    return (
        <div>
            <div className={'flex items-center gap-[10px] justify-between flex-wrap'}>
                <Player turn={turn} number={1}/>
                <Player turn={turn} number={2}/>
            </div>
            <Button
                className={'w-full my-[20px]'}
                onClick={() => reset()}
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
                                    if (
                                        player2 === 'person' &&
                                        !player1Boxes.includes(item) &&
                                        !player2Boxes.includes(item) &&
                                        numbersToActivate.includes(item)
                                    ) {
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
        </div>
    );
}