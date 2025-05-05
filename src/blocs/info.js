
export default class Info {
    
    constructor( _c , _s , x , y ) {

        this.x = x
        this.y = y
        

        this.w = 0
        this.h = 0

        this.tel = '55 3736 0277'
        this.mail = 'hola@solovino.mx'
        
    }

    draw(_c , _s){
        
        _c.push()
            _s.style( _c , 800 , 40 , 40 , _s.c.tres )
            _c.text('TEPOZTLÁN' , this.x , this.y )
            _s.style( _c , 500 , 20 , 20 , _s.c.tres )
            _c.text('LUNES A DOMINGO  10:00 - 20:00' , this.x, this.y + 60 )
            _s.style( _c , 500 , 20 , 20 , _s.c.uno )
            _c.text('Ignacio Zaragoza 19, Santisima Trinidad\nTepoztlán, Morelos, México.',  this.x , this.y + 100)
        _c.pop()


    }

    update(_c){
        
    }

    pressed(_c){
        
    }

    up(_c){
        
    }

}
