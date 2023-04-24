const fs = require('fs');

async function extract(client_token, month, extract_type){

    const data = fs.readFileSync('db/db.json','utf-8');
    const obj = JSON.parse(data);
    let extract_type_string;
    let total_extract = 0;
    //Converte o tipo de extrato em uma string
    switch(extract_type){
        case 0: 
            extract_type_string = "boleto";    
            break;

        case 1: 
            extract_type_string = "cartão";    
            break;

        case 2: 
            extract_type_string = "transferência";    
            break;

        case 3: 
            extract_type_string = "antecedência";    
            break;
    }

    //Faz a soma do extrato mensal no período selecionado
    month.forEach( (month) => {
        let extract = parseFloat(obj.extract[client_token][month][extract_type][extract_type_string]);
        total_extract += extract;
        // console.log(total_extract);
    });
    
}


module.exports = extract;