let create = document.querySelector("#create");
let modal = document.querySelector("#create-student")
let update_model = document.querySelector("#update-student")
let close = document.querySelector("#close")
let edit = document.querySelector("#edit")
let update_close = document.querySelector("#update_close")



create.addEventListener("click", () =>
{
    modal.style.display = "flex"
});

close.addEventListener("click", () =>
{
    modal.style.display = "none";
})

edit.addEventListener("click", () =>
{
    update_model.style.display = "flex";
})

update_close.addEventListener("click", () =>
{
    update_model.style.display = "none";
})


//Create a Student
datapost = {
    "name":"joel",
    "age":"30",
    "country":"france",
}
const save = document.getElementById("save")
save.addEventListener("click", async function (e) {
const url = 'http://localhost/ProjetCrud/php/register.php'

try {
    const resp = await fetch(url, {
        method : "POST",
        headers : {
            content: "content-type : application/json"
        },
        body: JSON.stringify(datapost)
    })
    const data = await resp.json()
    console.log(data);

} catch (error) {
    
}
finally{
    // Réinitialiser les champs d'entrée
document.getElementById('name').value = ''; 
document.getElementById('age').value = ''; 
document.getElementById('country').value = ''; 

}
    
})