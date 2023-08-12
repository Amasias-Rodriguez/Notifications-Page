const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.not-read').classList.remove('not-read');
        updateNotifications()
    })
})
markAll.addEventListener('click', () => {
    const notReadElements = document.querySelectorAll('not-red');
    notReadElements.forEach(notReadElements => {
        notReadElements.classList.remove('not-read')
    })

    updateNotifications();

})
const updateNotifications = () => {
    const notReadElementsActual = document.querySelectorAll('.not-read');
    numberElement.innerText = notReadElementsActual.length;
}
