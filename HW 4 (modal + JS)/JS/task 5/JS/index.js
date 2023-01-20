const calculator = {
    save: {},
    read: function () {
        const num1 = prompt('Введіть число', '');
        if (num1 === '') {
            alert('No data');
            return;
        }

        if (isNaN(num1)) {
            alert('This is not number. Enter only number.');
            return;
        }

        this.save.numOne = Number(num1);

        const num2 = prompt('Введіть число', '');
        if (num2 === '') {
            alert('No data');
            return;
        }

        if (isNaN(num2)) {
            alert('This is not number. Enter only number.');
            return;
        }

        this.save.numTwo = Number(num2);
    },

    sum: function () {
        return this.save.numOne + this.save.numTwo;
    },

    mul: function () {
        return this.save.numOne * this.save.numTwo;
    },

    div: function () {
        return this.save.numOne / this.save.numTwo;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
alert(calculator.div());