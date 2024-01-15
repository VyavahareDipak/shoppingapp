import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Products from "../components/Product";
function Home(){
    const API_URL ="https://fakestoreapi.com/products" ;
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState([]);
    async function fetchData(){
       setLoading(true);

       try{
             const result = await fetch(API_URL);
             const output = await result.json() ;
             setPosts(output);
             console.log(output);
       }
       catch(error){
          console.log(error);
       }
       setLoading(false);
    }
    
    useEffect(()=>{
       fetchData() ;
    },[]);

    return (
           <div className="home-wrap">
            {loading?
            (<Loading/>):(
                
                    posts.length >0?
                    (<div className="home">
                       {posts.map((post)=><div><Products key={post.id} post = {post}/></div>)} 
                    </div>):
                    (<div className="not-found">
                        no data founnd
                    </div>)
                
            )
            }
            </div> 
    )
       
    
}

export default Home ;