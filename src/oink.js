export default class Solovino {
    constructor(q) {

        this.c = { bg : [255,255,255] , uno : [0,0,0] , dos : [142,190,117] , tres : [236,102,120] }

        this.list1 = "ETIQUETA\n\nGran Reserva\nNebbiolo\nMalbec\nMerlot\nSyrah\nBlend Trivarietal\nMezcla Bordelesa\nMerlot Rosado\nCosecha Tardía\nBlanc De Blancs\nSauvignon Blanc\nCQ Reserva Chardonnay 2023\nCQ Reserva Blend\nCQ Reserva Nebbiolo\nCQ Reserva Syrah\nLaberinto Blend\nLaberinto Malbec\nLaberinto Nebbiolo\nLaberinto Sauvignon Blanc\nLaberinto Gewürztraminer\nLaberinto Rosado\nLaberinto Rosado Wedding\nNicole Rosado\nNicole Espumoso Brut\nCielo Abierto Blanco\nCielo Abierto Tinto\nLata Laberinto Sauvignon Blanc\nLata Nicole Dulce Low Alcohol\nLata Nicole Rosado Semidulce\nGran Reserva\nNebbiolo\nMalbec\nMerlot\nSyrah\nBlend Trivarietal\nMezcla Bordelesa"
        this.list2 = "2oz\n\n38\n40\n40\n42\n42\n39\n40\n48\n50\n40\n55\n42\n38\n40\n40\n42\n42\n39\n40\n48\n50\n40\n55\n42\n38\n40\n40\n42\n42\n38\n40\n40\n42\n42\n39\n40"
        this.list3 = "COP\n\n95\n100\n100\n110\n110\n98\n100\n140\n150\n100\n180\n110\n95\n100\n100\n110\n110\n98\n100\n140\n150\n100\n180\n110\n95\n100\n100\n110\n110\n95\n100\n100\n110\n110\n98\n100"
        this.list4 = "BOT\n\n390\n420\n420\n450\n450\n400\n420\n530\n550\n420\n620\n450\n390\n420\n420\n450\n450\n400\n420\n530\n550\n420\n620\n450\n390\n420\n420\n450\n450\n390\n420\n420\n450\n450\n400\n420"
        this.t1 = "CATA 3, 5, 8, 12,  ..36"
        this.t2 = "Te ofrecemos una docena de posibilidades, elije cuantos vinos deseas probar para conocer el estilo y la filosofía de la elaboración vinícola."
        this.t3 = "En nuestro lugar, en tú lugar, en otro lugar, con sommelier ó sin sommelier, grupos pequeños ó barras para 120 personas."
        this.t4 = "CONTÁCTANOS PARA CONOCER\nNUESTRO CATALOGO DE SERVICIOS"
        this.t5 = "4 VINOS 4 APERITIVOS"
        this.t6 = "Degustación de 4 Copas de vino a elegir entre nuestro catalogo, acompañado de cuatro aperitivos.\nPara grupos de 6 a 12 personas, nuestro salon privado es el lugar ideal para celebrar cualquier ocasión."
        this.t7 = "CONTÁCTANOS PARA VER DISPONIBILIDAD"
        
        this.w = (_n = q.width ) => {
            if(_n == q.width) return _n
            else return q.width * _n
        }
        this.h = (_n = q.height ) => {
            if(_n == q.height) return _n
            else return q.height * _n
        }
        this.style = ( q , _tw , _ts , _tl , _c) => {
            q.textWeight(_tw)
            q.textSize(_ts)
            q.textLeading(_tl)
            q.fill(_c)
        }
        
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    logo = ( q , _x , _y ) => {
        this.style( q , 800 , this.h(.115) , this.h(.04) , this.c.uno )
        q.text('SOLOVINO' , _x , _y )
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    home = ( q , _x , _y ) => {
        q.push()
            q.image(this.solo, this.w(.95)-(400 * .6)  , this.h(.9)-(300 * .6) , 400 * .6 , 300 * .6 )
            this.style( q , 800 , this.h(.08) , this.h(.04) , this.c.tres )
            q.text('TEPOZTLÁN' , _x , _y )
            this.style( q , 800 , this.h(.05) , this.h(.04) , this.c.tres )
            q.text('DEGUSTACIÓN\nY TIENDA' , _x , _y + this.h(.16) )
            if(q.mouseIsPressed && q.mouseX > this.w(.02) && q.mouseY > this.h(.3) && q.mouseX < this.w(.6) && q.mouseY < this.h(.4)){
                this.style( q , 800 , this.h(.05) , this.h(.04) , [255,255,255,100] )
                q.text('DEGUSTACIÓN\nY TIENDA' , _x , _y + this.h(.16) )
            }
            q.image(this.arrow, _x + q.textWidth('Y TIENDA ') , _y + this.h(.21) , this.h(.05) , this.h(.05) )
            this.style( q , 800 , this.h(.05) , this.h(.04) , this.c.tres )
            q.text('BODAS\nY EVENTOS' , _x , _y + this.h(.26) )
            if(q.mouseIsPressed && q.mouseX > this.w(.02) && q.mouseY > this.h(.41) && q.mouseX < this.w(.6) && q.mouseY < this.h(.51)){
                this.style( q , 800 , this.h(.05) , this.h(.04) , [255,255,255,100] )
                q.text('BODAS\nY EVENTOS' , _x , _y + this.h(.26) )
            }
            q.image(this.arrow, _x + q.textWidth('Y EVENTOS '), _y + this.h(.31) , this.h(.05) , this.h(.05) )
            this.style( q , 500 , this.h(.03) , this.h(.03) , this.c.uno )
            q.text('Ignacio Zaragoza 19, Santisima Trinidad\nTepoztlán, Morelos, México.',  _x , _y + this.h(.08))
            _y = this.h(.52)
            this.style( q , 800 , this.h(.06) , this.h(.04) , this.c.tres )
            q.text('EN CASA' , _x , _y )
            q.image(this.arrow, _x + q.textWidth('EN CASA '), _y + this.h(.015) , this.h(.05) , this.h(.05) )
            if(q.mouseIsPressed && q.mouseX > this.w(.02) && q.mouseY > this.h(.52) && q.mouseX < this.w(.6) && q.mouseY < this.h(.58)){
                this.style( q , 800 , this.h(.06) , this.h(.04) , [255,255,255,100] )
                q.text('EN CASA' , _x , _y )
            }
            this.style( q , 500 , this.h(.03) , this.h(.03) , this.c.uno )
            q.text('TEPOZTLÁN\nCUERNAVACA' , _x , _y + this.h(.07) )
            this.style( q , 500 , this.h(.02) , this.h(.03) , this.c.uno )
            q.text('30 - 60 min.\n     60 - 120 min.' ,  _x + textWidth('TEPOZTLAN             ') , _y + this.h(.078) )
        q.pop()
        q.push()
            _y = this.h(.9)
            q.image(this.phone, 10 , _y , this.h(.09) , this.h(.09) )
            this.style( q , 800 , this.h(.03) , this.h(.04) , this.c.uno )
            q.text('LUNES A DOMINGO' , this.h(.11) , _y + this.h(.05) )
            this.style( q , 200 , this.h(.03) , this.h(.04) , this.c.uno )
            q.text('hola@solovino.mx' , this.h(.11) + q.textWidth('55 3736 027            ') , _y + this.h(.015))
            this.style( q , 500 , this.h(.03) , this.h(.04) , this.c.uno )
            q.text('10 am - 8 pm' , this.h(.11) + textWidth('LUNES A DOMINGO  ') , _y + this.h(.05))
            this.style( q , 800 , this.h(.04) , this.h(.4) , this.c.uno )
            q.text('55 3736 0277' , this.h(.11) , _y + this.h(.005) )
        q.pop()
        
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    local = ( q , _x , _y ) => {
        q.push()
            this.style( q , 200 , this.h(.018) , this.h(.02) , this.c.uno )
            q.text(this.list1,  _x , _y)
            q.textAlign(q.CENTER , q.TOP)
            q.text(this.list2,  this.w(.7) , _y)
            q.text(this.list3,  this.w(.8) , _y)
            q.text(this.list4,  this.w(.9) , _y)
        q.pop()
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    evento = (q , _x , _y ) => {
        q.push()
            this.style( q , 800 , this.h(.05) , this.h(.04) , this.c.uno )
            q.text( this.t1 ,  _x , this.h(.15))
            this.style( q , 200 , this.h(.026) , this.h(.035) , this.c.uno )
            q.text( this.t2 ,  _x , this.h(.22), 46)
            q.text( this.t3 ,  _x , this.h(.37), 46)
            this.style( q , 800 , this.h(.026) , this.h(.035) , this.c.tres )
            q.text( this.t4 ,  _x , this.h(.51))
            q.image(this.phone, _x + q.textWidth("CONTÁCTANOS PARA CONOCER         ") , this.h(.48) , this.h(.11) , this.h(.11) )
            this.style( q , 800 , this.h(.05) , this.h(.04) , this.c.uno )
            q.text( this.t5 ,  _x , this.h(.61))
            this.style( q , 200 , this.h(.026) , this.h(.04) , this.c.uno )
            q.text( this.t6 ,  _x , this.h(.68), 46)
            this.style( q , 800 , this.h(.025) , this.h(.02) , this.c.tres )
            q.text( this.t7 ,  _x , this.h(.93))
        q.pop()
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}








