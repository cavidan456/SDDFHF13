const inp = document.getElementById("inp")
const inpEmail = document.getElementById("inpEmail")
const inpPass = document.getElementById("inpPass")
const btn = document.getElementById("btn")



function postData() {
    axios.post("https://655dd2b79f1e1093c599f093.mockapi.io/forms",{
        username:inp.value,
        email:inpEmail.value,
        password:inpPass.value,
    }).then((res)=>{
        console.log(res);
    })

}

btn.addEventListener("click" , postData)