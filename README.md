# goit-js-hw-11

## Tasks Search for images
Create the front-end part of the application for searching and viewing images by keyword. Add design of interface elements. Watch a demo video of the application.

#### Search form
The form is initially contained in an HTML document. The user will enter a search string in the text field, and after submitting the form, an HTTP request must be performed.
```html
<form class="search-form" id="search-form">
   <input
     type="text"
     name="searchQuery"
     autocomplete="off"
     placeholder="Search images..."
   />
   <button type="submit">Search</button>
</form>
```

#### HTTP requests
For the backend, use the public API of the Pixabay service. Register, get your unique access key and read the documentation.

Gallery and image card
The div.gallery element is initially contained in the HTML document, and the markup of the image cards must be rendered into it. When searching for a new keyword, you must clear the gallery content completely to avoid mixing up the results.
```html
<div class="gallery">
   <!-- Image Cards -->
</div>
```
Single image gallery card layout template.
```html
<div class="photo-card">
   <img src="" alt="" loading="lazy" />
   <div class="info">
     <p class="info-item">
       <b>Likes</b>
     </p>
     <p class="info-item">
       <b>Views</b>
     </p>
     <p class="info-item">
       <b>Comments</b>
     </p>
     <p class="info-item">
       <b>Downloads</b>
     </p>
   </div>
</div>
```

Pagination
The Pixabay API supports pagination and provides page and per_page parameters. Make it so that 40 objects come in each answer (20 by default).
