function changeHeart() {
    // func for heart icon
    var heartId = document.getElementById('heart')
    // initializing var heartId to 'heart' id in html file
    if(heartId.src.match("imgs/heart-regular.svg")) {
        // if src of heart img is regular then change to solid
        heartId.src = "imgs/heart-solid.svg";
    }
    else{
        // change back to regular
        heartId.src = "imgs/heart-regular.svg";
    }
}
var postBtn= document.getElementById("postBtn");
// initializing var post to 'post' id in html file
postBtn.addEventListener("click", function(){
    // using an event listener so that whenever I click func is called
    var value= document.getElementById("comment_box").value;
    // initializing var value to return the value the user types
    var li = document.createElement("li");
    // initializing var li to new element 'li'
    var text = document.createTextNode(value);
    // creating a node for every text. text is the node...value is the data
    li.appendChild(text);
    // appending input text to our newly created list (li)
    document.getElementById("unordered_list").appendChild(li);
    // lastly...appending the list to an unordered list
});