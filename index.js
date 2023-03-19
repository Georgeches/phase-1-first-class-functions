function receivesAFunction(callback){
    callback()
}

function returnsAnAnonymousFunction(){
    return () => ""
}

function returnsANamedFunction(){
    return fn = () => ''
}
