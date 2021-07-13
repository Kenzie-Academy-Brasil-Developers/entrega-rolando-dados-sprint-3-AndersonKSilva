function randonnum(num){
    return randoms = Math.floor(Math.random()*(6)+1);
}
const button1 = document.querySelector('.button1');
const dado1 = document.querySelector('#pdado1');
const button2 = document.querySelector('.button2');
const dado2 = document.querySelector('#pdado2');
const rolarDois = document.querySelector('.rolBoth');
const divresul = document.querySelector('.resultados2')
const divcontainer = document.querySelector('.frequencia_dados')
let frequencia = [0,0,0,0,0,0,0,0,0,0,0]



// Evento para rolar dado 1
button1.addEventListener('click', function(){
    let numdado = randonnum();
    dado1.innerText = numdado;
});

// Evento para rolar dado 2
button2.addEventListener('click', function(){
    let numdado = randonnum();
    dado2.innerText = numdado;
});
// Evento para rolar ambos os dados
let varia = true;
rolarDois.addEventListener('click', function(){
    // Verificação para zerar a frequência
    if(varia != true){
        divresul.innerText = '';
        divcontainer.innerText = '';
        for(let i =0;i<frequencia.length;i++){
            frequencia[i]=0;
        }
    }
    // Loop para rolar 1000 vezes os dados
    for(let i =0;i<1000;i++){
        let res=0
        let numdado = randonnum();
        res +=numdado;
        dado1.innerText = numdado;
        numdado = randonnum();
        res+=numdado;
        dado2.innerText = numdado;
        // Loop para armazenar os valores rolados
        for(let i = 0;i<frequencia.length;i++){
            if((res-2) === i){
                frequencia[i]++
            }
        }
    }
    // Loop para mostrar na tela a frequência de dados rolados
    for(let i =0;i<frequencia.length;i++){
        let novop = document.createElement('p')
        novop.innerText = (i+2)+ ': ' + frequencia[i]
        divresul.appendChild(novop)

        // ciação do grafico
        let novadiv = document.createElement('div')
        novadiv.style.height = 20+'px';
        novadiv.innerText = frequencia[i] 
        novadiv.style.width = frequencia[i]+'px';
        
        if(i%2===0){
            novadiv.style.background = "lightgray"
        }else{
            novadiv.style.background = 'tomato'
        }
        divcontainer.appendChild(novadiv)
    }
    varia = false;
});
