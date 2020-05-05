var button = document.querySelector("button");

button.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;

    if (curColour === 'blue') {
        document.body.style.backgroundColor = "green";
    }

    else if (curColour === 'green') {
        document.body.style.backgroundColor = "grey";
    }

    else if (curColour === 'grey') {
        document.body.style.backgroundColor = "yellow";
    }

    else if (curColour === 'yellow') {
        document.body.style.backgroundColor = "black";
    }

    else if (curColour === 'black') {
        document.body.style.backgroundColor = "red";
    }

    else if (curColour === 'red') {
        document.body.style.backgroundColor = "pink";
    }

    else if (curColour === 'pink') {
        document.body.style.backgroundColor = "white";
    }

       else {
        document.body.style.backgroundColor = "blue";
    }
});
