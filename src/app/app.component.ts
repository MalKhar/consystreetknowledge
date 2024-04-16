import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { generate } from 'rxjs';

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






const example1 = ` <div class="contentImage">
  <div class="image"><img src="https://placehold.co/300x200" alt=""></div>
  <h2>Lorem ipsum</h2>
  <p class="contentPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint minus magnam necessitatibus possimus sequi ipsa pariatur quisquam dolor eos corporis vero, tempore ratione. Eaque deserunt repellat laboriosam eum velit?</p>
  </div>`

  const example2 = ` <div class="contentImage">
  <div class="image"><img src="https://placehold.co/300x200" alt=""></div>
  <h2>Lorem ipsum</h2>
  <p class="contentPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint minus magnam necessitatibus possimus sequi ipsa pariatur quisquam dolor eos corporis vero, tempore ratione. Eaque deserunt repellat laboriosam eum velit?</p>
  </div>`

  const example3 = ` <div class="contentImage">
  <div class="image"><img src="https://placehold.co/300x200" alt=""></div>
  <h2>Lorem ipsum</h2>
  <p class="contentPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint minus magnam necessitatibus possimus sequi ipsa pariatur quisquam dolor eos corporis vero, tempore ratione. Eaque deserunt repellat laboriosam eum velit?</p>
  </div>`

  const example4 = ` <div class="contentImage">
  <div class="image"><img src="https://placehold.co/300x200" alt=""></div>
  <h2>Lorem ipsum</h2>
  <p class="contentPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint minus magnam necessitatibus possimus sequi ipsa pariatur quisquam dolor eos corporis vero, tempore ratione. Eaque deserunt repellat laboriosam eum velit?</p>
  </div>`

  const example5 = ` <div class="contentImage">
  <div class="image"><img src="https://placehold.co/300x200" alt=""></div>
  <h2>Lorem ipsum</h2>
  <p class="contentPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint minus magnam necessitatibus possimus sequi ipsa pariatur quisquam dolor eos corporis vero, tempore ratione. Eaque deserunt repellat laboriosam eum velit?</p>
  </div>`
  
const posts = [example1, example2, example3, example4, example5];

//espera DOM
window.onload = init;
function init(){

const searchResult = document.getElementById("searchResult");
console.log(searchResult);

function constructor(){
  posts.forEach(post => {
    const postContent = document.createElement('div');
    postContent.classList.add('post');
    console.log(postContent);
    postContent.innerHTML = post;
    searchResult?.appendChild(postContent);
    
  });

  
}

constructor();

}