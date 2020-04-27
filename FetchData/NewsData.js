import { articles_url, news_api, country_code,language } from '../Config/config';

export async function getArticles(category) {

    // let v = cond ?  ( ) : ()
    // await fetch(`${articles_url}/top-headlines?language=en&apiKey=${news_api}`)
    const q = ['Fashion','Travel','Lifestyle']
    category = (category == "Top Headlines")? ("General"):(category)
    try {
         let articles = 
            ( category=='International' || q.indexOf(category) > -1)? 
             
            ( ( category=='International' )?
            
              ( await fetch(`${articles_url}/everything?language=en&sortBy=publishedAt&domains=nytimes.com,bbc.com,cnn.com&apiKey=${news_api}`) ):     
       
              ( await fetch(`${articles_url}/everything?language=en&q=${category}&apiKey=${news_api}`) ) 
            ):
              ( await fetch(`${articles_url}/top-headlines?country=${country_code}&category=${category}&apiKey=${news_api}`))
           
    
        console.log(articles)
        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}



