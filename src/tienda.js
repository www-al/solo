export default class Tienda {
    constructor(q) {

        this.view = 't'
        this.id = 0

        this.name = ['CABERNET SAUVIGNON' , 'TINTO ROJO' , 'ENSAMBLE CUATRO', 'MALENA']
        this.sub = ['CASA MADERO, 2017' , 'ANONIMO, 2022' , 'MONTE XANIC, 2020' , 'LLANO COLORADO, 2015']
        this.info = ["18.4%  |  18 meses  |  Valle de Guadalupe\nDulce, con notas a algo, de sabor medio algo que te recuerda otra cosa que no sabes que sabes que necesitas.",
            "16.2%  |  12 meses  |  Queretaro\nAmargo, con notas a algo, de sabor medio algo otra cosa que no sabes que sabes que necesitas.",
            "15.9%  |  25 meses  |  Valle de Guadalupe\nSeco, , de sabor medio algo que te recuerda otra cosa que no sabes que sabes que necesitas.",
            "17.6%  |  3 meses  |  Zacatecas\nRojo, otra cosa que no sabes que sabes que ce recuerda otra cosa que no sabes que sabes que necesitas."
        ]
        
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tienda = ( q , s , _x , _y ) => {

        this.image = [s.b1 , s.b2 , s.b3 , s.b4 ]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(this.view=='t'){

            q.push()
                s.style( q , 800 , s.h(.05) , s.h(.04) , s.c.uno )
                q.text( this.name[this.id],  _x , s.h(.65))
                q.image(this.image[this.id], s.w(1)/2 - (282/3)/2, s.h(.15) , 282/3 , 956/3 )
                s.style( q , 800 , s.h(.03) , s.h(.04) , s.c.uno )
                q.text( this.sub[this.id],  _x , s.h(.7))
                s.style( q , 100 , s.h(.025) , s.h(.03) , s.c.uno )
                q.text( this.info[this.id],  _x , s.h(.75) , 50)
                s.style( q , 800 , s.h(.052) , s.h(.04) , s.c.tres )
                q.text( 'AGREGAR',  s.w(.05) , s.h(.9))
                q.image(s.arrow, s.w(.05) + q.textWidth('AGREGAR ') , s.h(.91) , s.h(.05) , s.h(.05) )
                s.style( q , 600 , s.h(.05) , s.h(.04) , s.c.uno )
                q.text( this.id,  s.w(.75) , s.h(.895))
                s.style( q , 200 , s.h(.015) , s.h(.04) , s.c.uno )
                q.text( 'Botella',  s.w(.75) - q.textWidth('bl') , s.h(.945))
                s.style( q , 100 , s.h(.05) , s.h(.04) , s.c.uno )
                q.text( '-',  s.w(.65) , s.h(.895))
                q.text( '+',  s.w(.85) , s.h(.895))
            q.pop()

            q.push()
                q.noStroke()
                if(q.mouseIsPressed){
                    if(q.mouseX > s.w(.8) && q.mouseY > s.h(.2) && q.mouseX < (s.w(.8)+30) && q.mouseY < (s.h(.2)+30)){
                        q.image(s.arrowl, s.w(.1) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.image(s.arrow, s.w(.8) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.tint(0, 0, 0, 255);
                        q.image(s.burger, s.w(.1) , s.h(.2) , 30 , 30 )
                    }else if(q.mouseX > s.w(.1) && q.mouseY > s.h(.2) && q.mouseX < (s.w(.1)+30) && q.mouseY < (s.h(.2)+30)){
                        q.image(s.arrowl, s.w(.1) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.image(s.arrow, s.w(.8) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.tint(0, 0, 0, 255);
                        q.image(s.bag, s.w(.8) , s.h(.2) , 30 , 30 )
                    }else if(q.mouseX > s.w(.1) && q.mouseY > s.h(.5) && q.mouseX < s.w(.2) && q.mouseY < s.h(.6)){
                        q.image(s.arrow, s.w(.8) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.tint(0, 0, 0, 255);
                        q.image(s.burger, s.w(.1) , s.h(.2) , 30 , 30 )
                        q.image(s.bag, s.w(.8) , s.h(.2) , 30 , 30 )
                    }else if(q.mouseX > s.w(.8) && q.mouseY > s.h(.5) && q.mouseX < s.w(.9) && q.mouseY < s.h(.6)){
                        q.image(s.arrowl, s.w(.1) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.tint(0, 0, 0, 255);
                        q.image(s.burger, s.w(.1) , s.h(.2) , 30 , 30 )
                        q.image(s.bag, s.w(.8) , s.h(.2) , 30 , 30 )    
                    }else{
                        q.image(s.arrowl, s.w(.1) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.image(s.arrow, s.w(.8) , s.h(.5) , s.h(.05) , s.h(.05) )
                        q.tint(0, 0, 0, 255);
                        q.image(s.burger, s.w(.1) , s.h(.2) , 30 , 30 )
                        q.image(s.bag, s.w(.8) , s.h(.2) , 30 , 30 )   
                    }
                }else{
                    q.image(s.arrowl, s.w(.1) , s.h(.5) , s.h(.05) , s.h(.05) )
                    q.image(s.arrow, s.w(.8) , s.h(.5) , s.h(.05) , s.h(.05) )
                    q.tint(0, 0, 0, 255);
                    q.image(s.burger, s.w(.1) , s.h(.2) , 30 , 30 )
                    q.tint(s.c.tres);
                    q.image(s.bag, s.w(.8) , s.h(.2) , 30 , 30 )
                }
            pop()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }else if(this.view=='menu'){
            
            q.push()
                s.style( q , 800 , s.h(.115) , s.h(.04) , 0 )
                q.text('SOLOVINO' , s.w(.02) , 0 )
                s.style( q , 800 , s.h(.05) , s.h(.1) , s.c.tres )
                q.text( "TODO\nLO NUEVO\nBLANCO\nTINTO\nNARANJA\nROSADO\nESPUMOSO",  s.w(.35) , s.h(.19))
                q.image(s.arrowl, s.w(.1) , s.h(.2) , 30 , 30 )
            q.pop()

        }else if(this.view=='kart'){

            q.push()
                q.image(s.arrow, s.w(.8) , s.h(.2) , 30 , 30 )
                s.style( q , 200 , s.h(.025) , s.h(.04) , s.c.uno )
                q.text("Nicole Rosado\nLaberinto Nebbiolo\nCielo Abierto Blanco\nBlend Trivarietal" , s.w(.05) , s.h(.3))
                q.textAlign(q.CENTER , q.TOP)
                q.text("x  1\nx  2\nx  1\nx  2",  s.w(.6) , s.h(.3))
                q.text("$ 420\n$ 790\n$ 580\n$ 950",  s.w(.8) , s.h(.3))
                s.style( q , 200 , s.h(.035) , s.h(.05) , s.c.uno )
                q.text("$ 2,740",  s.w(.8) , s.h(.46))
                q.textAlign(q.LEFT , q.TOP)
                s.style( q , 200 , s.h(.03) , s.h(.09) , 0 )
                q.text( "CONFIRMA TU PEDIDO POR",  s.w(.05) , s.h(.68))
                s.style( q , 800 , s.h(.05) , s.h(.09) , s.c.tres )
                q.text( "TELÉFONO",  s.w(.05) , s.h(.75))
                q.text( "SMS",  s.w(.05) , s.h(.85))
                // q.text( "E-MAIL",  s.w(.05) , s.h(.85))
                q.image(s.arrow, s.w(.05) + q.textWidth("TELÉFONO ") , s.h(.76) , 30 , 30 )
                q.image(s.arrow, s.w(.05) + q.textWidth("SMS ") , s.h(.86) , 30 , 30 )
                // q.image(s.arrow, s.w(.05) + q.textWidth("E-MAIL ") , s.h(.86) , 30 , 30 )
            q.pop()
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    mas = ()=>{
        this.id ++
        if(this.id ==4 ) this.id = 0
    }
    menos = ()=>{
        this.id--
        if(this.id < 0 ) this.id = 3
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}



























