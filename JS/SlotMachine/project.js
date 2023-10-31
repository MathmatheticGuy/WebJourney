/* Slot Machine Structure
    * 1. Deposit some $
    * 2. Determine number of Line to Bet On
    * 3. Collect a bet amount
    * 4. Spin the slot machine (most difficult)
    * 5. check if the user won
    * 6. give the user their winning
    * 7. play again
*/

// Deposit $
// declare input variables
const prompt = require("prompt-sync")();
// global variables in UPPERCASE
const ROWS = 3; // 0 1 2 3
const COLS = 3; 

// key map with value
// A -> 2 (like dictionary in python)
const SYMBOL_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8,
};

const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2,
};

//! DEPOSIT MONEY TO PLAY
const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const deposit_money = parseFloat(depositAmount);
        
        if (isNaN(deposit_money) || deposit_money <= 0) {
            console.log("Please enter a positive amount !!!");
        }
        else{
            return deposit_money;
        }
    }
}


//! NUMBER OF LINE TO BET ON
const getNumberOfLines = () => {
    while (true){

        const line = prompt("Enter number of lines (1 to 3): ");
        const number_of_lines = parseInt(line);
        if (isNaN(number_of_lines) || number_of_lines <= 0 || number_of_lines > 3) {
            console.log("Invalid number lines (Only 1 to 3) !!!");
        }
        else{
            return number_of_lines;
        }
    }
}

//! GET TOTAL BET USING BET PER LINE. ( BET * TOTAL_LINES ) MUST < BALANCE 
const getBet = (balance, lines) => {
    while (true){
        // Number of bet per line
        const bet = prompt("Enter number bet per lines: ");
        const number_of_bets = parseFloat(bet);

        if (isNaN(number_of_bets) || number_of_bets <= 0 || lines*number_of_bets > balance) {
            console.log("Invalid Bet, try again ");
        }
        else{
            return number_of_bets;
        }
    }
}

//! spin() -> CREATE THE SLOT MACHINE WITH N COLUMN with N VALUE ([ [], [], [] ]) AND SPIN IT
//? COLUMNS represent TOTAL COLUMN and ROWS represent total COLUMN's values
const spin = () => {
    //! PUSH ALL AVAILABLE SYMBOLS TO THE SLOT MACHINE (like PUSH 2 A, 4 B, 6 C TO 1 ARRAY)
    //? SO WE CAN CHOOSE RANDOMLY 3 VALUES FROM THE ARRAY LATER
    const symbols = [];
    // take key value pairs from SYMBOL_COUNT array
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)){
        // console.log("Take key value pair from SYMBOL_COUNT array: " + symbol, count);
        // push total symbols base on SYMBOL_COUNT
        for (let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    // console.log("Total symbols pushed into new array: " + symbols); 
    
    
    // reels contain 3 reel. Each inner [] represent a Column inside my slot machine
    // reels format [[], [], []]. Elements inside [] represent a Column values
    // Ex: [ [a,b,a] [a,c,c] [b,a,c] ] 1st column with 3 values [a,b,a] 

    const reels = [];

    /*
    symbols = [
        'A', 'A', 'B', 'B', 'B',
        'B', 'C', 'C', 'C', 'C',
        'C', 'C', 'D', 'D', 'D',
        'D', 'D', 'D', 'D', 'D',
    ] 
    */

    //! GET 3 RANDOM VALUES FOR EACH REEL -> []. Note that 3 base on Column value
    // for each array [] Generate the number of rows or number of elements inside each reel 
    for (let i = 0; i < COLS; i++){
        reels.push([]);
        //! GENERATE AVAILABLE SYMBOLS
        // copy the symbols that we have available 
        // to choose for each reel into another array
        const reelSymbols = [...symbols]; //?? why copy symbols array?
        // REMOVE FROM THEM (reelSymbols) AS WE ADD THE SYMBOL INTO EACH REEL
        //? ROWS REPRESENT TOTAL SYMBOLS IN THAT COLUMN 
        for (let j = 0; j < ROWS; j++){
            //! RANDOMLY ADD A SYMBOL TO A REEL AND REMOVE IT FROM SYMBOLS ARRAY (SO IT NOT BE CHOOSE AGAIN)
            // Math.random() -> random 0 to 1 value
            // Math.random * 3 -> random number between 0 and 3 (0.4 * 3 = 1.2)
            // Math.floor(Math....) ->  floor(1.2) to 1. Keep the value between 0 and 2. Bc 3 cause Index out of range Error
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); 
            // console.log("Random index: ", randomIndex);
            const selectedSymbol = reelSymbols[randomIndex]; 
            reels[i].push(selectedSymbol) // push symbol to the current reel
            reelSymbols.splice(randomIndex, 1); // remove 1 element at randomIndex

        }
    }
    return reels;

};

//! TRANSPOSE COLUMN TO ROWS (using REELS) (chuyển đổi)
const transpose  = (reels) => {
    const rows = [];
    for (let i=0; i<ROWS; i++) {
        rows.push([]);
        for (let j=0; j<COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
} 

const printRows = (rows) => {
    for (const row of rows){
        let rowString = ""; // format: A | B | C
        //! For key values pair from row array
        for (const [i, symbol] of row.entries()){
            rowString += symbol;
            if (i != rows.length - 1){ // avoid "|" at the last symbols: ...| C |
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}


const getWinning = (rows, bet, lines) => {
    //! CHECK IF EVERY SYMBOL IN COLUMN == 1st SYMBOL
    let winnings = 0;
    for (let row = 0; row < lines;row++){
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols){
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if (allSame){
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
}

//! Core Logic
const game = () => {
    let balance = deposit(); // let for global value
    
    while (true){
        console.log("Your balance is:", balance, "$");
        const number_of_lines = getNumberOfLines();
        const bet = getBet(balance, number_of_lines);
        console.log("Your bet is:", bet,"$");
        balance -= bet * number_of_lines;
    
        const reels = spin();
        console.log("Column Reels: ", reels);
    
    
        const rows = transpose(reels);
        console.log("Row Reels: ", rows);
        printRows(rows);
    
        const winnings = getWinning(rows, bet, number_of_lines);
        balance += winnings;

        if (balance <= 0) {
            console.log("You Lose !!! You ran out of Money");
            break;
        }
        else{
            console.log("You Won:", winnings, "$");            
        }

        const play = prompt("Keep Playing? (Enter n to stop): ").toLowerCase();
        if (play == "n") console.log("Thank For Playing !!!"); break;
    }
};

game();


