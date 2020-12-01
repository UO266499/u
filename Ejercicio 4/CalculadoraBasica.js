class CalculadoraBasica{
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
    document.getElementById('pantalla').value = eval(this.memory);
  }

  mPlus() {
    this.memory += '+' + document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = eval(this.memory);
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
var calculadora = new Calculadora();