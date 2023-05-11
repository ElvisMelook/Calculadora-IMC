let nome = document.querySelector ('input.nome')
let altura = document.getElementById( 'altura')
let peso = document.querySelector('input.peso')
let res = document.getElementById('res')
const span = document.querySelectorAll('.spans')

function setError (index){

span[index].style.display = 'block'


}

function setTrue (index){
    span[index].style.display = 'none'
}








function calcularimc(){
    
    
    
    if (peso.value.length <= 1 || altura.value.length <= 1 || nome.value.length <= 2){
        
        window.alert('Preencha todos os campos corretamente!')
    }else {
        let n = nome.value
        let p = Number (peso.value)
        let a = Number (altura.value)
        var a1 = ( p/ (a**2) ) .toFixed(1)
        
        if(a1 <= 18.5  ) {
        
        res.innerHTML = `${n} Seu IMC é <font color="orange">${a1}</font>. Você está abaixo do peso.  `
    }else if (a1 >18.5 && a1 <= 25.0 ){
        res.innerHTML = `${n} Seu IMC é <font color="green">${a1}</font>. Seu peso está ideal.  `
        
    }else if( a1 >25 &&a1 <= 30.0){
        res.innerHTML = `${n} Seu IMC é <font color="yellow">${a1}</font>. Você está acima do peso.  `
        
    }else if ( a1 >30.0 && a1 <=40.0 ){
        
        res.innerHTML = `${n} Seu IMC é <font color="orange">${a1}</font>.Você está em estado de obdesidade.  `
    }else  {
        res.innerHTML = `${n} Seu IMC é <font color="red">${a1}</font>. Você está em estado de obesiade grave, procure um médico.  `
        
    }
 }
}


res.innerHTML += ''
    

    


function namevalidate(){
    let n = nome.value
    
    if(n.length <= 2){
        setError (0)
        nome.style.border = ' 2px solid rgba(241, 39, 13, 0.911)'
    }else {
        setTrue(0)
        nome.style.border = ' 2px solid rgb(23, 230, 12)'
    }
}

function alturavalidate(){
    
    var a = (altura.value)
    if(a.length <= 1){
        setError(1)
        altura.style.border = ' 2px solid rgba(241, 39, 13, 0.911)'
    }else{
        altura.style.border = ' 2px solid rgb(23, 230, 12)'
        setTrue(1)
    }
}

function pesovalidate(){
    var p =  (peso.value)

    if(p.length <= 1){
        peso.style.border = ' 2px solid rgba(241, 39, 13, 0.911)'
        setError(2)

    }else{
        peso.style.border = ' 2px solid rgb(23, 230, 12)'
        setTrue(2)
    }

}

