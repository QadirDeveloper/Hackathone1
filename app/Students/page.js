"use client"
import {useState} from "react"
import {addDoc, collection, getDoc} from "firebase/firestore"
import {db} from "@/config/firebase"

export default function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setphone] = useState("")

  const onSubmitHanlder = async () =>{
    let student = {
      name: userName,
      email,
      phone,
    }
    try {
      const collectionName = collection(db,"form")
    
      await addDoc(collectionName, student )
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <div>
      

      {/* <form> */}
       <div className="form">
      
        <h1>
        Student registeration
      </h1>
       
      <input type="text" placeholder="Enter name" className="input" onChange={(e)=> setUserName(e.target.value)}  />
       <input type="email" placeholder="Enter email" className="input"  onChange={(e)=> setEmail(e.target.value)}  />
       <input type="text" placeholder="Enter course name" className="input"   onChange={(e)=> setphone(e.target.value)}  />
       <button onClick={onSubmitHanlder} type="button" class="btn btn-light" style={{width:"100px",height:"30px"}}>Submit</button>
       {/* <button onClick={onSubmitHanlder}>Submit</button> */}
      {/* </form> */}
     
      </div>
    </div>
  )
}