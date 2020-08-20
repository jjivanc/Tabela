$(document).ready(function(){

    //input de quantidade
    var  qtd = $("#qtd")

    //input de quantidade Vendida
    var qtd_v = $("#qtd_v")

    //input de sobra   
    var sobra = $("#sobra")

    //input de valor unitário
    var val_u = $("#val_u")

    //input do total
    var total = $("#total")

    //input de quantidade de cobertura
    var  qtd_c = $("#qtd_c")

    //input de quantidade Vendida de cobertura
    var qtd_v_c = $("#qtd_v_c")

    //input de sobra  de cobertura
    var sobra_c = $("#sobra_c")

    //input de valor unitário de cobertura
    var val_u_c = $("#val_u_c")

    //input do total de cobertura
    var total_c = $("#total_c")


    //quando digita no input valor Unitário comum
    val_u.on("keyup", function(){
       
        //calcula o total
         var multiplica = val_u.val() * qtd_v.val();
       
       //insere o resultado do cálculo no input do total
       total.val(multiplica);
   });
   //quando digita no input valor Unitário cobertura
   val_u_c.on("keyup", function(){
       
    //calcula o total
     var multiplica_c = val_u_c.val() * qtd_v_c.val();
   
   //insere o resultado do cálculo no input do total
   total_c.val(multiplica_c);
});

    //quando digita no input a sobra
    sobra.on("keyup", function(){

        //calcula a diferença entre quantidade e sobra
        var diferenca =  qtd.val() - sobra.val();
        
        //insere o resultado do cálculo no input da diferença
        qtd_v.val(diferenca);
    });

    //quando digita no input a sobra cobertura
    sobra_c.on("keyup", function(){

        //calcula a diferença entre quantidade e sobra
        var diferenca_c =  qtd_c.val() - sobra_c.val();
        
        //insere o resultado do cálculo no input da diferença
        qtd_v_c.val(diferenca_c);
    });
    
})