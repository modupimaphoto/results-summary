const data = () => {
    const req = new XMLHttpRequest();

    req.onload = () => {
        if(req.status == 200){
            let data = JSON.parse(req.responseText);

            data.map((score) => {

                if(score.category == "Reaction"){
                    const reaction = document.getElementById("reaction");
                    reaction.innerHTML = score.score;
                }else if(score.category == "Memory"){
                    const memory = document.getElementById("memory");
                    memory.innerHTML = score.score;
                }else if(score.category == "Verbal"){
                    const verbal = document.getElementById("verbal");
                    verbal.innerHTML = score.score;
                }else{
                    const visual = document.getElementById("visual");
                    visual.innerHTML = score.score;
                }

            })
        }
    }

    req.open("GET", "./data.json", true);
    req.send();
}
data();