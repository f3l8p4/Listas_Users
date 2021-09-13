<?php
    include 'teste.php';
    $conect = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    $nome = $obj['nome'];
    $salario = $obj['salario'];
    $cpf = $obj['cpf'];
    $funcao = $obj['funcao'];
    $horas_mensais = $obj['horas_mensais'];
    $vinculo = $obj['vinculo'];

    $Sql_Query = "insert into funcionarios (nome,salario,cpf,funcao,horas_mensais,vinculo) values ('$nome','$salario','$cpf','$funcao','$horas_mensais','$vinculo')";

    if(mysqli_query($conect,$Sql_Query)){        
       $MSG = 'Record Successfully Inserted Into MySQL Database.' ; 
       $json = json_encode($MSG);
        echo $json ;
        
        }
        else{   
        echo 'Try Again';
        }
        mysqli_close($conect);
       ?>
?>