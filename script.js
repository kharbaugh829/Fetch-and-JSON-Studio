window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            //something about ording let hoursInSpaceOrder = [];
            // for (let i =0; i < json.length; i++) {
            //     hoursInSpace[i] = json[i].hoursInSpace;
            //     let hours.sort = hoursInSpaceOrder;
            // };
            for (let i=0; i < json.length; i++) {

                container.innerHTML += `
                <div class="astronaut">
                     <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].housInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>

            `;
            }
            
        });

    });
    
    
});
