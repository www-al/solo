import BtIco from "./btIco.js"

// Count Von Bottle
export default class VonBotella {
    
    constructor( _c , _s , x , y ) {

        this.x = x
        this.y = y
        

        this.w = 0
        this.h = 0

        this.id = 1

        this.bt_mas = new BtIco(_c ,_s , 6 , x , y + 15 , 10 , this.menos)
        this.bt_menos = new BtIco(_c ,_s , 7 , x + 100 , y + 15 , 10 , this.mas)

        
    }

    draw( _c , _s ){
        
            _c.push()
                _s.style( _c , 600 , 30 , 30 , _s.c.uno )
                _c.text( this.id,  this.x + 50 , this.y)
                _s.style( _c , 200 , 10 , 10 , _s.c.uno )
                if(this.id == 1) _c.text( 'Botella',  this.x + 50 - _c.textWidth('--')  , this.y + 35)
                else _c.text( 'Botellas',  this.x + 50 - _c.textWidth('--')  , this.y + 35)
            _c.pop()

            this.bt_mas.draw(_c , _s)
            this.bt_menos.draw(_c , _s)
            
    }

    mas = ()=>{
        this.id++
    }

    menos= ()=>{
        this.id--
        if(this.id == 0) this.id = 1
    }

    pressed = ( _c , _s ) => {
        this.bt_mas.pressed( _c , _s )
        this.bt_menos.pressed( _c , _s )
    }

    up(_c , _s){
        this.bt_mas.up( _c , _s )
        this.bt_menos.up( _c , _s )
        
    }

}




