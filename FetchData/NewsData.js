import { articles_url, news_api, country_code,language } from '../Config/config';

export async function getArticles(query) {
 
  
  


    const cat = ['Fashion', 'Travel', 'Lifestyle']
    const cat2 = ['','Sports','Business','Science','Entertainment','Technology','General']
    const paper = ['news18.com','indianexpress.com','asianage.com','hindustantimes.com','wired.com']
    query = (query == "Top Headlines") ? ("General") : (query)
  
  
  
  
  try {  
    let articles = ""
    if (query == 'International'){
      articles = await fetch(`${articles_url}/everything?language=en&sortBy=publishedAt&domains=nytimes.com,bbc.com,aljazeera.com&apiKey=${news_api}`)
    }
    else if (cat.indexOf(query) > -1) {
      articles = await fetch(`${articles_url}/everything?language=en&q=${query}&apiKey=${news_api}`)
    }
    else if (cat2.indexOf(query) > -1) {
      articles = await fetch(`${articles_url}/top-headlines?country=${country_code}&category=${query}&apiKey=${news_api}`)
    }
    else if (paper.indexOf(query) > -1) {
      articles = await fetch(`${articles_url}/everything?language=en&domains=${query}&apiKey=${news_api}`)
    }
    else {
      articles = await fetch(`${articles_url}/top-headlines?sources=${query}&apiKey=${news_api}`)
    }
        
        
        let result = await articles.json();
        
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}



