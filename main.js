//income inputs
const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra-1'),
      incomeExtra2 = document.getElementById('income-extra-2');

//costs inputs
const costsFlat = document.getElementById('costs-flat'),
      costHouseServices = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transport'),
      costsCredit = document.getElementById('costs-credit');

//total inputs
const totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

//mpney box
const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation'),
      spend = document.getElementById('spend');

let accumulation = 0;
let totalPercents = 0;

const inputs = document.querySelectorAll('.input');

let input;

for(input of inputs) {
    input.addEventListener('input', () => {
    countingAvailableMoney();
    calculationPercent();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) + strToNum(costHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);

    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
    const totalPercentEl = document.getElementById('total-percents');
    totalPercents = e.target.value;
    totalPercentEl.innerHTML = totalPercents;
    calculationPercent();
});

const calculationPercent = () => {
    accumulation = ((totalMonth * totalPercents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;

    console.log(spend.value);

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation *12;
    totalYearInput.value = totalYear;
}