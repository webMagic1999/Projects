'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        '2024-11-18T21:31:17.178Z',
        '2024-12-23T07:42:02.383Z',
        '2024-01-28T09:15:04.904Z',
        '2024-04-01T10:17:24.185Z',
        '2024-05-08T14:11:59.604Z',
        '2024-05-27T17:01:17.194Z',
        '2024-07-11T23:36:17.929Z',
        '2024-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT',
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        '2014-11-01T13:15:33.035Z',
        '2014-11-30T09:48:16.867Z',
        '2014-12-25T06:04:23.907Z',
        '2024-01-25T14:18:46.235Z',
        '2022-02-05T16:33:06.386Z',
        '2021-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
        '2023-12-04T13:15:33.035Z',
        '2023-12-30T09:48:16.867Z',
        '2023-12-19T06:04:23.907Z',
        '2024-03-15T14:18:46.235Z',
        '2024-04-05T16:33:06.386Z',
        '2024-03-07T14:43:26.374Z',
        '2024-03-19T18:49:59.371Z',
        '2024-02-20T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
        '2014-10-01T13:15:33.035Z',
        '2014-10-31T09:48:16.867Z',
        '2014-09-25T06:04:23.907Z',
        '2024-01-25T14:18:46.235Z',
        '2024-02-08T16:33:06.386Z',
        '2024-04-10T14:43:26.374Z',
        '2024-06-27T18:49:59.371Z',
        '2024-07-29T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////

const formatMovementDate = function (currDate) {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), currDate)
    console.log(daysPassed);

    if(daysPassed === 0) return 'Today';
    if(daysPassed === 1) return 'Yesterday';
    if(daysPassed <= 7) return `${daysPassed} days ago`;
    
else {
    const day = `${currDate.getDate()}`.padStart(2, 0);
    const month = `${currDate.getMonth() + 1}`.padStart(2, 0);
    const year = currDate.getFullYear();
    return `${day}/${month}/${year}`;
}

}


// ///////////////////////////////////

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const currDate = new Date(acc.movementsDates[i]);
        const displayDate = formatMovementDate(currDate);


        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">₹${Math.abs(mov)}</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

///////////////////////

const createUsername = function (acc) {
    acc.forEach((acc) =>
        acc.username = acc.owner
            .toLowerCase().split(" ").map(name => name[0]).join('')
    )
}
createUsername(accounts);
// ////////////////////////

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumIn.textContent = `₹${incomes}`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumOut.textContent = `₹${Math.abs(out)}`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(mov => (mov * acc.interestRate) / 100)
        .filter(int => int >= 1)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `₹${interest}`
}
// ////////////////////////////

const calcDisplayBalanace = function (acc) {
    acc.balance = acc.movements
        .reduce((acc, sum) => acc + sum, 0);
    labelBalance.textContent = `₹${acc.balance}`
}

// /////////////////////////////////////

const updateUI = function (acc) {
    displayMovements(acc)

    calcDisplayBalanace(acc)

    calcDisplaySummary(acc)
}
// /////////////////////////////////////

const startLogoutTimer = function(){
    const tick = () => {

        const min = String(Math.trunc(time/ 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        // in each call, print the remaining time to the user interface 
        labelTimer .textContent =`${min}:${sec}`;

        // when 0 seconds , stop timer and logout user
        if(time === 0){
            clearInterval(timer);
            labelWelcome.textContent = 'Log in to get started'
            containerApp.style.opacity = 0;
        }
        // decrease 1 sec
        time = time -1;


    }

    // set the time to 5 minutes
    let time = 120;

    // call the timer every second
    tick();
    const timer = setInterval(tick, 1000);

    return timer;


}

// /////////////////////////////////////
let currentAccount, timer;
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts
        .find(acc => acc.username === inputLoginUsername.value);

    if (currentAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        if(timer) clearInterval(timer);
        timer = startLogoutTimer();

        updateUI(currentAccount);

    }
})
// ////////////////////////////////

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

    inputTransferAmount.value = inputTransferTo.value = '';
    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username) {
        currentAccount.movements.push(-amount)
        receiverAcc.movements.push(amount)

        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString())

        updateUI(currentAccount)

        clearInterval(timer);
        timer = startLogoutTimer();
    }
})
// //////////////////////////////////////////////

btnLoan.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {

        setTimeout(() => {
            currentAccount.movements.push(amount);
    
            currentAccount.movementsDates.push(new Date().toISOString())
    
            updateUI(currentAccount)

            clearInterval(timer);
            timer = startLogoutTimer();

        }, 3000);
    }
    inputLoanAmount.value = '';
})

// //////////////////////////////////////////////

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username)

        accounts.splice(index, 1)
        containerApp.style.opacity = 0
    }
    inputCloseUsername.value = inputClosePin.value = '';

})
// /////////////////////////////////////////////

let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////





