import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";

import { doc,getFirestore,addDoc,collection,updateDoc,deleteDoc,getDocs,onSnapshot,query, orderBy,  } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"; 

//
const firebaseConfig = {
   apiKey: "AIzaSyAY1pmOsCBhyCV72-Wt3KNM0O6O6XUUwnY",
   authDomain: "todo-list-d3204.firebaseapp.com",
   projectId: "todo-list-d3204",
   storageBucket: "todo-list-d3204.appspot.com",
   messagingSenderId: "936075870665",
   appId: "1:936075870665:web:c08c8f1cdc2d0373786818",
   measurementId: "G-4PE9SK8L5V"
 };

 const app = initializeApp(firebaseConfig);

 const db = getFirestore();

 

let val = document.getElementById("val")
let printe = document.getElementById("print-messge")

const docref= collection(db, "meri piyari todo")
let send =async()=>{

   if(val.value !== ""){
   // console.log(doc.id);
   await addDoc( docref,{
      value: val.value,
      timestamp: new Date().getMinutes()
   });
    console.log( docref.id);
   

   val.value=""
}
else{
   alert("plzz enter the messge")
}
   };





// console.log(meri_piyari_todo.id);

// console.log(`${doc.data().value}`);
window.send =send

// let body = document.getElementById("body").addEventListener("load",()=>{

// })
let emty = []
let todo_load =async()=>{
 
   const querySnapshot = await getDocs(collection(db, "meri piyari todo"));
   querySnapshot.forEach((doc) => {
      emty.push(doc.id)
      printe.innerHTML+=`
      <h2>${doc.data().value} <button onclick="delet('${doc.id}')">delete</button> 
      <button onclick="editt('${doc.id}','${doc.data().value}')">edit</button></h2>`
   })
}

window.todo_load=todo_load

todo_load()

 





//

let delet=async(id)=> {
   event.target.parentNode.remove()

   await deleteDoc(doc(db, "meri piyari todo", id));

}

window.delet =delet



let editt =async(id,Value,)=>{

//  console.log()
    let edit = prompt("enter edit name",Value)
    event.target.parentNode.firstChild.nodeValue=edit
    await updateDoc(doc(db, "meri piyari todo",id),{
       value: edit
      });
      


}

window.editt = editt

let delel_all =()=>{
   printe.innerHTML =""
   emty.forEach(async(id)=>{
console.log(id);
      await deleteDoc(doc(db, "meri piyari todo",id))
   })

  }

  window.delel_all=delel_all

