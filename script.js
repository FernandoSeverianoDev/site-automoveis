function mudarproduto(imagem, background){
    setTimeout(function(){
        document.getElementById("produtoselecionado").src="/images/"+imagem+".png";
        document.getElementById("body").style.backgroundColor=background; 
    }, 800)
    
        
  
}