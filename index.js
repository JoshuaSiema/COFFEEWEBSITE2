let name=document.querySelector(".name");
let phone=document.querySelector(".phone");
let email=document.querySelector(".email");
let seat_number=document.querySelector(".seat_number");
let message=document.querySelector(".message");
let info=document.querySelector(".moda_info");
let modal=document.querySelector(".modal");
let date=document.querySelector(".date")


let posts=document.querySelector(".posts");
let url="https://jsonplaceholder.typicode.com/posts";






async function fetchData(){
    posts.innerHTML = "Loading posts.......";
    try{
      let request=await fetch(url);
      let response=await request.json();
      console.log(response)  
      let output=" ";
      response.forEach((post,index)=>{
        output +=`
        <div style="color:white;">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        

        <div>`
      })

      posts.innerHTML=output;
    }catch(e){
        posts.innerHTML="An error occured";
    }

    }

    function booknow(){
        let ouput = `

        `
        info.innerHTML=output
    }

    function closeModal(){
         modal.style.display="none";
        //modal.classList.add("hidden");
        info.innerHTML=" ";
    }

    function booknow(){
        let output = "";
        if (name.value=="") {
            output=`
                <h4>Error</h4>
                <p>A name is required!!!!!</p>
                `;

        }else if(email.value==""){
            output=`
                <h4>Error</h4>
                <p>An email is required!!!!!</p>
                `;
        }else if(phone.value==""){
        output=`
            <h4>Error</h4>
            <p>A phone number is required!!!!!</p>
            `;
        }else if(seat_number.value==""){
            output=`
                <h4>Error</h4>
                <p>A seat number is required!!!!!</p>
                `;
        }else if(date.value==""){
            output=`
                <h4>Error</h4>
                <p>A date is required!!!!!</p>
                `;
        }

        
        else{
            output=`
        <h4>successfull book reservation</h4>
        <p>seat:${seat_number.value}</p>
        <p>name:${name.value}</p>
        <p>date:${date.value}</p>
        `;
        }
        
        modal.style.display="flex";
        info.innerHTML=output;
    }