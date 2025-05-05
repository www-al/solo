
export default class Bt {
    
    constructor( _c , _s , x , y ,  t1 , t2='' , _cback) {
        
        
        this.x = x
        this.y = y
        this.t1 = t1
        this.t2 = t2
        this.color = _s.c.tres

        _s.style( _c , 800 , 22 , 30 , this.color )
        this.w =  _c.textWidth(t1) + 40
        this.h = 70
        if(this.t2=='') this.h = 50

        this.cback = _cback

    }

    draw(_c , _s){
        
        _c.push()
            _s.style( _c , 800 , 22 , 30 , this.color )
            _c.rect( this.x  , this.y , _c.textWidth(this.t1) + this.x + 40 , this.h)
            this.w = (this.x +  _c.textWidth(this.t1) + 60)
            _s.style( _c , 600 , 22 , 30 , 255 )
            _c.text(this.t1 , this.x  + 20 , this.y + 10 )
            _s.style( _c , 500 , 12 , 28 , 255 )
            _c.text(this.t2 ,  this.x + 20 , this.y + 40 )
        _c.pop()

        _c.push()
            _s.style( _c , 800 , 22 , 30 , this.color )
            let _x = (this.x +  _c.textWidth(this.t1) + 30)
            let _y = this.y + 20
            _s.ico( 1 , _c , 10 , _x , _y , 255)
        _c.pop()

    }

    pressed(_c , _s){
        if(_c.mouseX > this.x && _c.mouseY > this.y  && _c.mouseX < this.w && _c.mouseY < this.y + this.h ){
            this.color =  _s.c.uno
        }
    }

    up(_c , _s){
        if(_c.mouseX > this.x && _c.mouseY > this.y  && _c.mouseX < this.w && _c.mouseY < this.y + this.h ){
            this.cback()
        }
        this.color =  _s.c.tres
    }

}
