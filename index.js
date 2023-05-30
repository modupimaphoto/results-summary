const data = () => {
    const req = new XMLHttpRequest();

    req.onload = () => {
        if(req.status == 200){
            let data = JSON.parse(req.responseText);

            data.map((score) => {

                if(score.category == "Reaction"){
                    const reaction = document.getElementById("reaction");
					const reaction_icon = document.getElementById("reaction-icon");
					
					reaction_icon.src = score.icon;
					reaction_icon.alt = score.category + " icon";
                    reaction.innerHTML = score.score;
                }else if(score.category == "Memory"){
                    const memory = document.getElementById("memory");
					const memory_icon = document.getElementById("memory-icon");
					
					memory_icon.src = score.icon;
					memory_icon.alt = score.category + " icon";
                    memory.innerHTML = score.score;
                }else if(score.category == "Verbal"){
                    const verbal = document.getElementById("verbal");
					const verbal_icon = document.getElementById("verbal-icon");
					
					verbal_icon.src = score.icon;
					verbal_icon.alt = score.category + " icon";
                    verbal.innerHTML = score.score;
                }else{
                    const visual = document.getElementById("visual");
					const visual_icon = document.getElementById("visual-icon");
					
					visual_icon.src = score.icon;
					visual_icon.alt = score.category + " icon";
                    visual.innerHTML = score.score;
                }

            })
        }
    }

    req.open("GET", "./data.json", true);
    req.send();
}
data();