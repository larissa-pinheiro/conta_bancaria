import readlinesync = require('readline-sync');
import { Conta } from './src/model/Conta';
import { colors } from './src/util/Colors';

export function main() {

  let opcao: number;

  const conta: Conta = new Conta(1, 2, 1, 'Larissa Pinheiro', 8000);
  conta.visualizar();
  conta.sacar(10000);
  conta.visualizar();
  conta.depositar(6000);
  conta.visualizar();


  while (true) {

    console.log(colors.bg.black + colors.fg.whitestrong +
                "*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    console.log("Entre com a opção desejada:" + colors.reset);
    opcao = readlinesync.questionInt("")

    if (opcao === 9) {
      console.log(colors.fg.cyanstrong +
                  "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, 
          "\n\nCriar Conta\n\n", colors.reset);
      
        keyPress()
        break;
      case 2:
        console.log(colors.fg.whitestrong, 
          "\n\nListar todas as Contas\n\n", colors.reset);

        keyPress()
        break;
      case 3:
        console.log(colors.fg.whitestrong, 
          "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

        keyPress()
        break;
      case 4:
        console.log(colors.fg.whitestrong, 
          "\n\nAtualizar dados da Conta\n\n", colors.reset);

        keyPress()
        break;
      case 5:
        console.log(colors.fg.whitestrong, 
          "\n\nApagar uma Conta\n\n", colors.reset);

        keyPress()
        break;
      case 6:
        console.log(colors.fg.whitestrong, 
          "\n\nSaque\n\n", colors.reset);

        keyPress()
        break;
      case 7:
        console.log(colors.fg.whitestrong, 
          "\n\nDepósito\n\n", colors.reset);

        keyPress()
        break;
      case 8:
        console.log(colors.fg.whitestrong, 
          "\n\nTransferência entre Contas\n\n", colors.reset);

        keyPress()
        break;
      default:
        console.log(colors.fg.whitestrong, 
          "\nOpção Inválida!\n", colors.reset);

        keyPress()
        break;
    }
  }
}

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: ");
  console.log("Larissa Pinheiro - email@email.com");
  console.log("github.com/larissa-pinheiro");
  console.log("*****************************************************"); 
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();