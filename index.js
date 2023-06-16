const testimonials = [
    {
        name: "Anica",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
        text: "Apple was worth a fortune to my company. It's really wonderful. Apple impressed me on multiple levels."
    },
    {
        name: "Carmel E",
        photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        text: "Apple impressed me on multiple levels. Wow what great service, I love it!"
    },
    {
        name: "Rickard I",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        text: "I STRONGLY recommend apple to EVERYONE interested in running a successful online business! Really good"
    }
]

const imgEl = document.querySelector("img");
const textEl =document.querySelector(".text");
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const{name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 5000)
}