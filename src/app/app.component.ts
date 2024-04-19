import { Component, EventEmitter, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { generate } from 'rxjs';
import posts from './postsExport';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consystreetknowledge';
}
  

//espera DOM
window.onload = init;
function init(){

const searchResult = document.getElementById("searchResult");

var submitInput = (<GlobalEventHandlers>document.getElementById("input"));
submitInput.onkeyup = filter;

function constructor(){
  posts.forEach((post, i) => {
    const postContent = document.createElement('div');
    postContent.classList.add('post');
    postContent.setAttribute('id', i.toString())

    const divImg = document.createElement('div');
    divImg.classList.add('thumbImg');
    
    const link = document.createElement('a');
    link.setAttribute('href', posts[i].link);
    link.innerHTML = posts[i].title;
    link.setAttribute('target', "_blank");

    const img = document.createElement('img');
    img.setAttribute('src', posts[i].imgURL);
    
    const linkImg = document.createElement('a');
    linkImg.setAttribute('href', posts[i].link);
    linkImg.setAttribute('target', "_blank");
    linkImg?.appendChild(img);
    
    const title = document.createElement('h2');
    title.classList.add('postTitle')
    title?.appendChild(link)

    const description = document.createElement('p');
    description.classList.add('contentPreview');
    description.innerHTML = posts[i].description;
    
    searchResult?.appendChild(postContent);
    
    postContent?.appendChild(divImg);
    divImg?.appendChild(linkImg);
    postContent?.appendChild(title);
    postContent?.appendChild(description);
  });  
}
constructor();

function clean(){
  while(searchResult?.firstChild){
    searchResult?.removeChild(searchResult.firstChild)
  }
}



function filter(){
  let inputValue = (<HTMLInputElement>document.getElementById("input")).value;

  clean();
  constructor();
  
  posts.forEach((post, i) => {
    let currentTrue = document.getElementById(i.toString());
    if (inputValue == ""){
      clean();
      constructor();
    }
    else if(!posts[i].tags.includes(inputValue)){
      currentTrue?.remove();
    }
  });
  
  
}





  
  






}

