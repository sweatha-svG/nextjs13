"use client"
import{useState} from "react"
export default function counter(){
    const[count,setcount]=useState(0);

    return(
        <div>
            <p>you clicked{count} times</p>
            <button onClick={()=>setcount(count +1)}>Click</button>
        </div>
    )
}