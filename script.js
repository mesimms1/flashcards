const mainContainer = document.getElementsByClassName("main-container")[0];
const container2 = document.getElementsByClassName('container-2')[0];
const container3 = document.getElementsByClassName('container-3')[0];

//displays new card form if you click new card button
function showContainer2() {
    container2.style.display = "block";
}

//hides new card form if you click the close button within form
let hideContainer2 = () => {
    container2.style.display = "none";
}

//creates a new card
function saveFlashCard() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    let node0 = document.createElement("div");
    let node1 = document.createElement("h2");
    let node2 = document.createElement("h2");

    node1.innerHTML = question;
    node2.innerHTML = answer;

    node2.style.display = "none";
    node2.style.color = "red";

    //attaches the question and answer to the div. 
    node0.appendChild(node1);
    node0.appendChild(node2);

    //allows answer to display on click
    node0.addEventListener('click', function(){
        if (node2.style.display == "none"){
            node2.style.display = "block";
        } else {
            node2.style.display = "none";
        }
    })

    //deletes the flashcard on double click
    node0.addEventListener('dblclick', function(){
        node0.remove();
    })

    //add style elements to the card
    node0.setAttribute("style", "background-color: white; width: 30%; padding: 20px; border: 1px solid forestgreen; margin: 10px; overflow: hidden;")
    
    //inserts card div into container 3
    container3.insertAdjacentElement("beforeend", node0);

    //resets the new flash card fields to empty after creating new card
    document.getElementById("question").value = '';
    document.getElementById("answer").value ='';
    hideContainer2();
}
