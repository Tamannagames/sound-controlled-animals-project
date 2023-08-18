function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mS04XL3hA/model.json', modelReady);
        });

    function modelReady() {
        classifier.classify(gotResults);
    }

    function gotResults(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results);

            const red = Math.floor(Math.random() * 255) + 1;
            const green = Math.floor(Math.random() * 255) + 1;
            const blue = Math.floor(Math.random() * 255) + 1;

            document.getElementById("animalCount").textContent = `Number of Times Detected: ${dog + cat + lion + cow /* + ... */}`;
            document.getElementById("currentAnimal").textContent = `Current Animal: ${results[0].label}`;

            document.getElementById("animalCount").style.color = `rgb(${red}, ${green}, ${blue})`;
            document.getElementById("currentAnimal").style.color = `rgb(${red}, ${green}, ${blue})`;

            const animalImage = document.getElementById("animalImage");

            if (results[0].label === "barking") {
                animalImage.src = "dogg.gif";
                dog += 1;
            } else if (results[0].label === "meowing") {
                animalImage.src = "peach-cat-animated.gif";
                cat += 1;
            } else if (results[0].label === "roaring") {
                animalImage.src = "lion.gif";
                lion += 1;
            } else if (results[0].label === "mooing") {
                animalImage.src = "cow.gif";
                cow += 1;
            } else {
                animalImage.src = "listen.gif";
            }
        }
    }
}
