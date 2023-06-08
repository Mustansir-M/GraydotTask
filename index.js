    const draggable = document.querySelector('.draggable');
    const droppable = document.querySelector('.droppable');

    let draggedItem = null;

    draggable.addEventListener('dragstart', function(event) {
      draggedItem = event.target;
      event.target.classList.add('dragging');
    });

    draggable.addEventListener('dragend', function(event) {
      event.target.classList.remove('dragging');
    });

    droppable.addEventListener('dragover', function(event) {
      event.preventDefault();
    });

    droppable.addEventListener('drop', function(event) {
      event.preventDefault();
      droppable.appendChild(draggedItem);
      draggedItem = null;
      
    });

    function allowDrop(event) {
      event.preventDefault();
    }

    function reset() {
      droppable.innerHTML = '';
      draggable.innerHTML = `
      <div class="item-text" draggable="true">
      <h3>Drag ME: I am a text!</h3>
    </div>
    <div class="item-img" draggable="true">
      <img class="first_img" src="./assets/the-paris-photographer-iApVQeGr06o-unsplash.jpg"/>
    </div>
    <div class="item-text" draggable="true">
        <p>Drag ME: I am a Heart Icon</p> 
        <i class="fa fa-heart"></i>
    </div>
    <div class="item-img" draggable="true">
      <img class="second_img" src="./assets/josh-hild-m9aGgc8UW6o-unsplash.jpg"/>
    </div>
    <div class="item-text" draggable="true">
      <h3>Drag ME: Once again!</h3>
    </div>
      `;
    }