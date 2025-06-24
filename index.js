let fileInput = document.getElementById("file");
let jsonEditor = document.getElementById("jsontxt");
let downloadLink = document.getElementById("save");
// console.log(fileInput.files);

fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];//gets file that we dropped in html
    //as array store hanxa so indexing [0]
    // console.log("This is the file \n" ,file);

    const reader = new FileReader();//build in 

    reader.addEventListener("load", (kraneel) => {
        try {
            // console.log(kraneel);
            const json = JSON.parse(kraneel.target.result);//turns json to javascript obj

            jsonEditor.value = JSON.stringify(json);
        //turns js obj to json string 
        } catch (err) {
            alert("Invalid JSON file.");
        }
    });

    if (file !== undefined && file !== null) {
    reader.readAsText(file);
}
});

function saveJSON() {
    try {
        const editedJson = JSON.parse(jsonEditor.value);
        console.log(editedJson);
        console.log(JSON.stringify(editedJson));

        
        const blob = new Blob([JSON.stringify(editedJson)], { type: "application/json" });//used blob as i haven't learned node js but will start as soon as this project completes
        console.log(downloadLink);
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "naya.json";
        downloadLink.textContent = "Click here to download your edited JSON file";

    } catch (err) {
        alert("Invalid JSON format.");
    }
}