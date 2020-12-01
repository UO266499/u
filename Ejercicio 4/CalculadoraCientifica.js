class Calculadora{
    constructor(){
      this.str = "";
      this.memory = "";
      this.memoryClicks = 0;
    }
  
    mrc() {
      if (this.memoryClicks == 0){
        this.memory = document.getElementById('pantalla').value;
        this.memoryClicks++;
      }else if (this.memoryClicks == 1){
        this.memory = "0"
        this.memoryClicks--;
      }
      alert(this.memory);
    }
  
    mMinus() {
      this.memory += '-' + document.getElementById('pantalla').value;
    }
  
    mPlus() {
      this.memory += '+' + document.getElementById('pantalla').value;
    }
  
    divide() {
      this.str += document.getElementById('pantalla').value + '/';
      document.getElementById('pantalla').value = '';
    }
  
    getSeven() {
      document.getElementById('pantalla').value += '7';
    }
  
    getEight() {
      document.getElementById('pantalla').value += '8';
    }
  
    getNine() {
      document.getElementById('pantalla').value += '9';
    }
  
    multiply() {
      this.str += document.getElementById('pantalla').value +'*';
      document.getElementById('pantalla').value = '';
    }
  
    getFour() {
      document.getElementById('pantalla').value += '4';
    }
  
    getFive() {
      document.getElementById('pantalla').value += '5';
    }
  
    getSix() {
      document.getElementById('pantalla').value += '6';
    }
  
    minus() {
      this.str += document.getElementById('pantalla').value +'-';
      document.getElementById('pantalla').value = '';
    }
  
    getOne() {
      document.getElementById('pantalla').value += '1';
    }
  
    getTwo() {
      document.getElementById('pantalla').value += '2';
    }
  
    getThree() {
      document.getElementById('pantalla').value += '3';
    }
  
    plus() {
      this.str += document.getElementById('pantalla').value +'+';
      document.getElementById('pantalla').value = '';
    }
  
    getZero() {
      document.getElementById('pantalla').value += '0';
    }
    getDot() {
      document.getElementById('pantalla').value += '.';
    }
    clear() {
      document.getElementById('pantalla').value = '';
      this.str = ""
    }
    equals() {
      this.str += document.getElementById('pantalla').value
      document.getElementById('pantalla').value = eval(this.str);
      this.str = ""
    }
  
  }
class CalculadoraCientifica extends Calculadora{
    constructor(){
        super();
        this.oldCalc = "";
    }
    plus(){
        super.plus();
        this.oldCalc = this.str;
        document.getElementById('calculo').value = this.str;
    }
    minus(){
        super.minus();
        this.oldCalc = this.str;
        document.getElementById('calculo').value = this.str;
    }
    divide(){
        super.divide();
        this.oldCalc = this.str;
        document.getElementById('calculo').value = this.str;
    }
    multiply(){
        super.multiply();
        this.oldCalc = this.str;
        document.getElementById('calculo').value = this.str;
    }
    clear(){
        super.clear();
        document.getElementById('calculo').value = '';
        this.oldCalc = "";
    }
    equals(){
        this.oldCalc = this.str + document.getElementById('pantalla').value+'=';
        super.equals();
        document.getElementById('calculo').value = this.oldCalc;

    }
    getLeftParenthesis(){
        document.getElementById('pantalla').value += '(';
    }

    getRightParenthesis(){
        document.getElementById('pantalla').value += ')';
    }

    del(){
        var calc = document.getElementById('pantalla').value;
        var removed = calc.substring(0,calc.length-1);
        document.getElementById('pantalla').value = removed;
    }

    pi(){
        document.getElementById('pantalla').value += Math.PI;
    }

    factorial(){
        var fac = document.getElementById('pantalla').value;
        var calc = 1;

        for (let index = fac; index >0; index--) {
            calc = index * calc;
        }

        if (fac.length == 0)
            fac = 0;
        document.getElementById('calculo').value = fac + '!='
        document.getElementById('pantalla').value = calc;
    }

    sin(){
        document.getElementById('pantalla').value += 'Math.sin(';
    }

    cos(){
        document.getElementById('pantalla').value += 'Math.cos(';
    }

    tan(){
        document.getElementById('pantalla').value += 'Math.tan(';
    }

    changeSign(){
        var sign = document.getElementById('pantalla').value;

        if (sign.substring(0,1) === '-'){
            document.getElementById('pantalla').value = ('+' + sign.substring(1,sign.length));
        }else if (sign.substring(0,1) === '+'){
            document.getElementById('pantalla').value = ('-' + sign.substring(1,sign.length));
        }else{
            document.getElementById('pantalla').value = ('-' + sign);
        }
    }

    divx(){
        document.getElementById('pantalla').value = '1/' + document.getElementById('pantalla').value;
    }

    ce(){
        document.getElementById('pantalla').value = '';
        this.str = this.oldCalc;
    }

    exp(){
        document.getElementById('pantalla').value += Math.E;
    }

    log(){
        document.getElementById('pantalla').value += 'Math.log10(';
    }

    tenToX(){
        document.getElementById('pantalla').value += '(10)**';
    }

    squareRoot(){
        document.getElementById('pantalla').value += 'Math.sqrt(';
    }

    mod(){
        document.getElementById('pantalla').value += 'mod';
    }

    xSquared(){
        document.getElementById('pantalla').value += '**2';
    }

    xElevY(){
        document.getElementById('pantalla').value += '**';
    }

    mc(){
        this.memory = 0;
    }

    mr(){
        document.getElementById('pantalla').value = eval(this.memory);
    }

    ms(){
        this.memory = document.getElementById('pantalla').value;
    }
}

var calculadora = new CalculadoraCientifica();