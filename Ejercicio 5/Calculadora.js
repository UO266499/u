class Calculadora{
    constructor(){
      this.str = "";
      this.pantalla = 1;
    }
  
    calculate(operator){
        var value = 0;
        if (this.pantalla === 1){
            return document.getElementById(this.pantalla).value;
        }
        if(operator === '+'){
            for (let i= 1; i < this.pantalla + 1; i++) {
                value += parseInt(document.getElementById(i).value);
                
            }
        }

        if(operator === '-'){
            for (let i= 1; i < this.pantalla + 1; i++) {
                if (i === 1){
                    value = document.getElementById(i).value;
                }
                else
                    value -= document.getElementById(i).value;
            }
        }

        if(operator === '*'){
            for (let i= 1; i < this.pantalla + 1; i++) {
                if (i === 1){
                    value = document.getElementById(i).value;
                }
                else
                    value = value * document.getElementById(i).value;
            }
        }

        if(operator === '/'){
            value++;
            for (let i= 1; i < this.pantalla + 1; i++) {
                if (i === 1){
                    value = document.getElementById(i).value;
                }
                else
                    value = document.getElementById(i).value;
            }
        }
        return value;
    }
    
    getSeven() {
        document.getElementById(this.pantalla).value += 7;
        
    }
  
    getEight() {
        document.getElementById(this.pantalla).value += 8;
        
    }
  
    getNine() {
        document.getElementById(this.pantalla).value += 9;
        
    }
  
    getFour() {
        document.getElementById(this.pantalla).value += 4;
        
    }
  
    getFive() {
        document.getElementById(this.pantalla).value += 5;
        
    }
  
    getSix() {
        document.getElementById(this.pantalla).value += 6;
        
    }
    
    getOne() {
        document.getElementById(this.pantalla).value += 1;
        
    }
  
    getTwo() {
        document.getElementById(this.pantalla).value += 2;
        
    }
  
    getThree() {
        document.getElementById(this.pantalla).value += 3;
        
    }
 
    getZero() {
        document.getElementById(this.pantalla).value += 0;
        
    }

    getDot() {
        document.getElementById(this.pantalla).value += '.';
    }

    clear() {
        for (let index = 1; index < 6; index++) {
            document.getElementById(index).value ='';
        }
        this.pantalla = 1;
    }

    enter() {
        if (document.getElementById(this.pantalla).value != '')
        {
            this.pantalla++;
        }
    }
  
    clearAboveFirst(){
        for (let index = 2; index < 6; index++) {
            document.getElementById(index).value ='';
        }
        this.pantalla = 2;
    }

    divide() {
        document.getElementById(1).value = this.calculate('/');
        this.clearAboveFirst();
    }

    multiply() {
        document.getElementById(1).value = this.calculate('*');
        this.clearAboveFirst();
    }

    minus() {
        document.getElementById(1).value = this.calculate('-');
        this.clearAboveFirst();
    }

    plus() {
        document.getElementById(1).value = this.calculate('+');
        this.clearAboveFirst();
    }




  }
  var calculadora = new Calculadora();