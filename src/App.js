import React , {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey = "fde623652f39c2a17d8aa1c83fd058932e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () =>{

    const [articles,setArticles] = useState([]);
    const [ActiveArticle,setActiveArticle] = useState(-1);

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({command,articles})=>{
                

                if(command === 'newsheadline'){
                    setArticles(articles); 
                    setActiveArticle(-1);
                }
                else if(command==='highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
                }
            }
        })
    },[]);
    return(
        <div>
            <h1 style={
                {display:"flex",justifyContent:"center"}
            }>Your AI news anchor</h1>
            <NewsCards articles={articles} activeArticle = {ActiveArticle}></NewsCards>
        </div>
    );
}

export default App;