let cartBody = document.getElementById('cart');
window.addEventListener('click', (event) => {
    if(event.target.classList.contains('button-buy')){
        console.log('клік на кнопку');
        addItems(event.target);
    }
});
function addItems(elment){
    console.log('додавання товару');

    let li = document.createElement('li');

    li.innerHTML = element.dataset.img
                    + element.dataset.name
                    + element.dataset.price
                    + '<div class="delet-items"> X </div>';
                    cartBody.appendChild(li);
                    
}