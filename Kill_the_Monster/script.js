let count=0;
let log=[];
function attack(){
    let x = Math.floor(Math.random()*50) + 1;
    let y = Math.floor(Math.random()*50) + 1;
    let monster = document.getElementById("monster_health");
    let your = document.getElementById("your_health");
    monster.value -= x;
    your.value -= y;
    count=0;
    update(x,y);
    if(monster.value <= 0 || your.value <= 0)
    {
        ResultCheck(monster.value, your.value);
    }
}
function sp_attack(){
    let monster = document.getElementById("monster_health");
    let your = document.getElementById("your_health");
    if(your.value > monster.value*(0.8)){
        alert("YOU CAN'T APPLY THIS ATTACK WITH YOUR CURRENT HEALTH");
    }
    else{
        let x = Math.floor(Math.random()*50) + 20;
        let y = Math.floor(Math.random()*20) + 1;
        monster.value -= x;
        your.value -= y;
        count=0;
        update(x,y);
        if(monster.value <= 0 || your.value <= 0)
        {
            ResultCheck(monster.value, your.value);
        }
    }
}
function heal(){
    let your = document.getElementById("your_health");
    if(count == 2)
    {
        alert("You need to attack now");
    }
    else if(your.value == 100){
        alert("Your health is already full");

    }
    else{
        count ++;
        let x = Math.floor(Math.random()*20) +10;
        if(your.value+x > 100)
        {
            x = 100 - your.value;
            your.value = 100;
        }
        else{
            your.value += x;
        }
        update(x,-1);
    }
}
function giveUP(){
    ResultCheck(1,0);
}
function update(m_loss, y_loss){
    let log_item="";
    if(y_loss == -1){
        log_item = '<br><p><span class="player">Player</span>' + ' heals himself for <span class="gain">' +  m_loss  + "</span></p>";
    }
    else
    {
        log_item = '<br><p><span class="mons_span">Monster</span>' + ' attacks and deals <span class="loss">' +  y_loss  + "</span></p>";
        log_item += '<br><p><span class="player">Player</span>' + ' attacks and deals <span class="loss">' +  m_loss  + "</span></p>";
    }
    log.push(log_item)
    let logs = document.getElementById("logs");
    logs.innerHTML='<span class="general_titles">Battle Log</span><br>';
    for(let i=0; i<log.length;i++)
    {
        logs.innerHTML += log[i];
    }
}
function ResultCheck(m_res,y_res){
    let x = document.getElementById("buttons");
    let y = document.getElementById("result");
    x.style.display="none";
    y.style.display = "block";
    let res="";
    if(m_res == y_res)
    {
        res = "It's a Draw";
    }
    else if(m_res > y_res){
        res = "You Lost!";
    }else{
        res = "You Won!";
    }
    document.getElementById("result_text").innerText = res;
}

function start_New(){
    let monster = document.getElementById("monster_health");
    let your = document.getElementById("your_health");
    monster.value = 100;
    your.value = 100;
    count = 0;
    let x = document.getElementById("buttons");
    let y = document.getElementById("result");
    x.style.display="flex";
    y.style.display = "none";
    document.getElementById("logs").innerHTML='<span class="general_titles">Battle Log</span>';
    log.length=0;
}