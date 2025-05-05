
export default class Lista {
    
    constructor( _c , _s , x , y ) {

        this.x = x
        this.y = y
        

        this.w = 0
        this.h = 0
        
    }

    draw(_c , _s){
        
        let _y =  this.y
        let _x = this.x

        _c.push()
            _s.style( _c , 800 , 22 , 30 , _s.c.tres )
            _c.text('DEGUSTACIÓN Y TIENDA' , _x , _y )
        _c.pop()

        _c.push()
            _y = _y + 60
            _c.fill(245)
            _c.rect( 0  , _y - 10, _c.width , 950)
            
            _c.noStroke()
            _c.textAlign(_c.LEFT , _c.TOP)
            _s.style( _c , 500 , 15 , 25 , _s.c.uno )
            _c.text('ETIQUETA',  _x , _y )
            _c.textAlign(_c.CENTER , _c.TOP)
            _c.text('2oz',  _x + _c.width*.65 , _y)
            _c.text('Cop',  _x + _c.width*.75 , _y)
            _c.text('Bot' , _x +  _c.width*.85 , _y)
            
            _c.stroke(0)
            _c.strokeWeight(.5)
            _c.line(_x - 5 , _y  + 35, _c.width*.9 , _y  + 35 )

            _y = _y + 40

            for(let i=0;i<_s.d.data.length;i++){
                _c.noStroke()
                _c.textAlign(_c.LEFT , _c.TOP)
                _s.style( _c , 600 , 15 , 0 , _s.c.tres )
                _c.text(_s.d.data[i].id,  _x , _y)
                _s.style( _c , 200 , 15 , 0 , _s.c.uno )
                _c.text(_s.d.data[i].name,  _x + 20 , _y )
                _c.textAlign(_c.CENTER , _c.TOP)
                _c.text(_c.round((_s.d.data[i].price/12)*1.5),  _x + _c.width*.65 , _y)
                _c.text(_c.round((_s.d.data[i].price/6)*1.5),  _x + _c.width*.75 , _y)
                _c.text(_s.d.data[i].price,  _x + _c.width*.85 , _y)
                
                _c.stroke(0)
                _c.strokeWeight(.5)
                _c.line(_x - 5 , _y  + 20, _c.width*.9 , _y  + 20 )

                _y = _y + 25
            }

        _c.pop()


    }

    update(_c){
        
    }

    pressed(_c){
        
    }

    up(_c){
        
    }

}
