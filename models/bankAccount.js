class bankAccount{
    constructor(amount, id) {
        this._amount = amount;
        this._id = id;
    }

    get amount(){
        return this._amount;
    }

    get id(){
        return this._id;
    }

    set amount(amount){
     this._amount = amount;
    }
    
    set id(id){
      this._id=id;
    }
}