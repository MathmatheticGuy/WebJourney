/* Slot Machine Structure
    * 1. Deposit some $
    * 2. Determine number of Line to Bet On
    * 3. Collect a bet amount
    * 4. Spin the slot machine (most difficult)
    * 5. check if the user won
    * 6. give the user their winning
    * 7. play again
*/

const prompt = require("prompt-sync")();
ROWS = 3; // 0, 1, 2, 3 (4 elements)
COLS = 3;

SYMBOL_COUNT = {
    A:4,
    B:3,
    C:5,
    D:6,
}

SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2,
}

const deposit = () => {
    while (true) {
        const balance = prompt("Enter your deposit amount: ");
        if (isNaN(balance) || balance < 0) {
            console.log("Please enter a positive amount");
        }       
        else{
            return balance;
        }
    }
}

const lines = () => {
    while (true) {
        const lines = prompt("Enter total lines to bet (1 to 3): ");
        if (isNaN(lines) || lines < 0 || lines > 3) {
            console.log("Only enter lines from 1 to 3 !!!");
        }       
        else{
            return lines;
        }
    }
}

const bet_per_line = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter bet per line: ");
        if (isNaN(bet) || bet < 0 || bet*lines > balance) {
            console.log(`Invalid bet, you bet: ${bet*lines} while your balance is ${balance}`);
        }       
        else{
            return bet;
        }
    }
}


const spin = () => {
    symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)){
        for (let i=0; i<count;i++){
            symbols.push(symbol);
        }
    }

    reels = [];
    //! Push 3 random element to each reel in Reels 
    for (let i = 0; i<COLS;i++){
        reels.push([]);
        reelsSymbol = [...symbols];
        for (let j=0; j<ROWS;j++){
            randomIndex = Math.floor(Math.random() * reelsSymbol.length);
            const randomSymbol = reelsSymbol[randomIndex];
            reels[i].push(randomSymbol);
            reelsSymbol.splice(randomIndex, 1);
        }
    }

    return reels;
}

const transpose = (reels) => {
    rows = [];
    for (let i=0;i<COLS;i++){
        rows.push([]);
        for (let j=0;j<ROWS;j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}


const printRows = (rows) => {
    for (const row of rows){
        let rowString = "";
        rowString += "     ";

        for (const [i, symbol] of row.entries()){
            rowString += symbol;
            if (i != row.length - 1){
                rowString += " | ";    
            }
        }
        console.log(rowString);
    }
}


const getWinning = (rows, bet, lines) => {
    let Winning = 0;
    let allSame = true;

    // only loop through betted row. 
    for (let row=0; row<lines; row++) {
        symbols = rows[row]; // current row according to number of lines
        for (const symbol of symbols){ // get symbol from current row
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }    
        if (allSame){
            Winning += bet*SYMBOL_VALUES[row[0]];
        }    
    }
    
    return Winning
    // bet per line issue
}

let SlotGame = () => {
    let balance = deposit();
    
    while (true){
        console.log("Your balance is: ", balance, "$");
        const number_of_lines= lines();
        const bet = bet_per_line(balance, number_of_lines);
        balance -= bet*number_of_lines;
        console.log("Total Bet:", bet*number_of_lines, "$");
    
    
        const cols_reel = spin(); 
    
        const rows_reel = transpose(cols_reel);
        console.log(rows_reel);
        console.log("- Reels Interface -")
        printRows(rows_reel);
    
        const won = getWinning(balance, bet, rows_reel); 
        if (won > 0){
            console.log("You Won:", won,"$");
            balance += won;
        }
        else{
            console.log("You Lose, you have", balance,"$ left !!!");
        }

        const decision = prompt("Do you want to continue? (n to stop): ").toLowerCase();
        if (decision == "n"){
            console.log("Congrats, you go home with:", balance,"$");
            break;
        }
    }
}

SlotGame();