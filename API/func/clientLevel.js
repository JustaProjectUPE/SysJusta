function clientLevel(client,i){
    
    let client_sum = 0;

    Object.values(client.extract[i]).forEach((val)=>{

        client_sum += parseInt(val);

    });


    if(client_sum<5000) return 0;
    else if(client_sum>=5000 && client_sum < 20000) return 1;
    else if(client_sum >= 20000 && client_sum<50000) return 2;
    else if(client_sum >= 50000 && client_sum<100000) return 3;
    else if(client_sum >= 100000) return 4;


}


module.exports = clientLevel;