    const color = ["#4A772F" , "#61ba49" ,"#337aad" ,"#b2a533" ,"#c227b7"];
    const text = ["ON THE FLOOR BABY"," HIT IT HARD BABY","ROCK THE PARTY BABY","","VARTA MAMAE DURR","BYE BYE BYE", "SUPERSTAR da"];
    
    const title = document.querySelector("#anir");
    const bg = document.querySelector("#ani");
    let i =0;
    setInterval(()=>{
    switch(i)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            {
            title.innerHTML = text[i];
            bg.setAttribute("style", `background: ${color[i]}; opacity:0.8;`);
            i++;
            break;
            }
            default:
                {
                    i=0;
                }
    }
    },400);
