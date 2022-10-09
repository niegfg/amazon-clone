firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("sign_in.html")
    }else{
        location.replace("index.html")
    }
})


function logout(){
    firebase.auth().signOut()
}
