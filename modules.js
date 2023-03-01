// with simple function

  function contact(){
    let user={
        name: "saleem raza",
        id: 33,
        address: "karachi"
    }
    console.log("name: "+user.name + "\n"+ "user Id: "+user.id+"\n"+"user address: " + user.address) 
}


export default contact;

// with arrow function

export const contact1=()=>{
    let user={
        name: "Ali raza",
        id: 88,
        address: "lahore"
    }
    console.log("name: "+user.name + "\n"+ "user Id: "+user.id+"\n"+"user address: " + user.address) 

}
