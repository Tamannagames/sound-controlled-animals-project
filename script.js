function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        
            classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mS04XL3hA/model.json', modelReady);
 
            function modelReady() {
                console.log("Model is ready!");
                
                classifier.classify(gotResults);
            }
 
            function gotResults(error, results) {
                if (error) {
                    console.error(error);
                } else {
                    
                    console.log(results);
                }
            }
        };

