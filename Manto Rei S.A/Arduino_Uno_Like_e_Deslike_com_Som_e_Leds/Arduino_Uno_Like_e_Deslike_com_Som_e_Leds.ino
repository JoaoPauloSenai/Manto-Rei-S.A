
#include <Wire.h> //Biblioteca utilizada gerenciar a comunicação entre dispositicos através do protocolo I2C
#include <LiquidCrystal_I2C.h> //Biblioteca controlar display 16x2 através do I2C

#define col  16 //Define o número de colunas do display utilizado
#define lin   2 //Define o número de linhas do display utilizado
#define ende  0x27 //Define o endereço do display

LiquidCrystal_I2C lcd_1(ende, col, lin); //Cria o objeto lcd passando como parâmetros o endereço, o nº de colunas e o nº de linhas

int botao1, botao2, like = 0, deslike = 0;

void setup()
{
  lcd_1.init();
  lcd_1.setBacklight(1);
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  pinMode(12, INPUT_PULLUP);
  pinMode(11, INPUT_PULLUP);
  pinMode(5, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(3, OUTPUT);
  lcd_1.print("Bem-vindo");
  lcd_1.setCursor(0, 1);
  lcd_1.print("A nossa loja");
  delay(5000);
  lcd_1.clear();
  lcd_1.setCursor(0, 0);
  lcd_1.print("Avalie o nosso");
  lcd_1.setCursor(0, 1);
  lcd_1.print("Atendimento."); 
}
void loop()
{
  botao2 = digitalRead(11);
  if (botao2 == 0)
  { 
    digitalWrite(3,1);
    digitalWrite(4,1);
    delay(60);
    digitalWrite(3,0);
    digitalWrite(4,0);
    like++;
    lcd_1.clear();
    lcd_1.setCursor(0, 1);
    Serial.print(like);
    lcd_1.print("Insatisfeito ");
    lcd_1.print(like);
    lcd_1.setCursor(0, 0);
    lcd_1.print("satisfeito ");
    lcd_1.print(deslike);
    Serial.print(deslike);
    while(digitalRead (11) == 0);
    delay(100);
  }
  
  botao1 = digitalRead(12);
  if (botao1 == 0)
  {
    digitalWrite(3,1);
    digitalWrite(5,1);
    delay(60);
    digitalWrite(3,0);
    digitalWrite(5,0);
    deslike++;
    lcd_1.clear();
    lcd_1.setCursor(0, 1);
    Serial.print(like);
    lcd_1.print("Insatisfeito ");
    lcd_1.print(like);
    lcd_1.setCursor(0, 0);
    lcd_1.print("satisfeito ");
    lcd_1.print(deslike);
    Serial.print(deslike);
    while(digitalRead(12) == 0);
    delay(100);
  }
}
