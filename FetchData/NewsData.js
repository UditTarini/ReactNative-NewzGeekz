import { articles_url, news_api, country_code,language } from '../Config/config';

export async function getArticles(query) {
 
  
  

  // await fetch(`${articles_url}/top-headlines?sources={query}&apiKey={news_api}`)
    const cat = ['Fashion', 'Travel', 'Lifestyle']
    const cat2 = ['','Sports','Business','Science','Entertainment','Technology','General']
    
    query = (query == "Top Headlines") ? ("General") : (query)
  
  
  
  
  try {
          console.log(query)    
         let articles = 
            ( query=='International' || cat.indexOf(query) > -1 || cat2.indexOf(query) > -1)? 
             
             ((query == 'International' || cat.indexOf(query) > -1) ?
               
               (query == 'International') ?
              ( await fetch(`${articles_url}/everything?language=en&sortBy=publishedAt&domains=nytimes.com,bbc.com,aljazeera.com&apiKey=${news_api}`)):
              ( await fetch(`${articles_url}/everything?language=en&q=${query}&apiKey=${news_api}`) ):     
       
              ( await fetch(`${articles_url}/top-headlines?country=${country_code}&category=${query}&apiKey=${news_api}`) ) 
            ):
              (  await fetch(`${articles_url}/top-headlines?sources=${query}&apiKey=${news_api}`))
           
    // http://newsapi.org/v2/top-headlines?sources={query}&apiKey={news_api}
        console.log(articles)
        let result = await articles.json();
        
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}



