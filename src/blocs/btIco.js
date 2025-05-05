
export default class BtIco {
    
    constructor( _c , _s , t , x , y , size = 10 , _cback , _color=_s.c.uno) {
        
        
        this.x = x
        this.y = y
        this.t = t
        this.color = _color
        

        this.size = size
        this.factor = 3
        this.w = size * this.factor
        this.h = size * this.factor

        this.cback = _cback

    }

    draw(_c , _s){
        
        _c.push()
            _c.fill(255)
            _c.noStroke()
            _c.rect( this.x - this.size , this.y - this.size , this.w , this.h )
            _s.ico( this.t , _c , this.size , this.x , this.y , this.color)
        _c.pop()

    }

    pressed(_c , _s){
        if(_c.mouseX > this.x - this.size && _c.mouseY > this.y - this.size  && _c.mouseX < this.x + (this.size * 2) && _c.mouseY < this.y + (this.size * 2) ){
            // this.color =  _s.c.tres
        }

        
    }

    up(_c , _s){
        if(_c.mouseX > this.x - this.size && _c.mouseY > this.y - this.size  && _c.mouseX < this.x + (this.size * 2) && _c.mouseY < this.y + (this.size * 2) ){
            this.cback()
        }
        // this.color =  _s.c.uno
        
    }

}
