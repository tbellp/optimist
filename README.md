# optimist
Micropython ESP32
La idea de este proyecto es controlar un sistema de enfriamiento de zonas utilizando un microcontroller ESP32 programado con Micropython remoto midiendo los sensores de humedad y temperaturas en un cierto punto. De esta manera se podrá controlar las variables con una bomba de alta presión.
Para controlar las diferentes zona se conectará cada módulo a una solenoide y a un servidor que controlará la bomba.

Los microcontroladores estarán firmado con micro Python ESPNOW, generando una micro Red de controladores de variables climáticas como la temperatura y la humedad. 

