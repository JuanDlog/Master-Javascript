let articles = document.querySelector(".layout__articles");

let posts = [

    {
        title: "Articulo de prueba 1",
        date: "30/12/2028",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eius ex? Hic beatae expedita commodi impedit ex voluptas voluptate tempora recusandae? Veniam, ipsum? Repellendus vero unde nam eaque iste nihil!"
    },

    {
        title: "Articulo de prueba 2",
        date: "10/12/2028",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eius ex? Hic beatae expedita commodi impedit ex voluptas voluptate tempora recusandae? Veniam, ipsum? Repellendus vero unde nam eaque iste nihil!"
    },

    {
        title: "Articulo de prueba 3",
        date: "01/01/2029",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eius ex? Hic beatae expedita commodi impedit ex voluptas voluptate tempora recusandae? Veniam, ipsum? Repellendus vero unde nam eaque iste nihil!"
    },

    {
        title: "Articulo de prueba 4",
        date: "30/10/2029",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eius ex? Hic beatae expedita commodi impedit ex voluptas voluptate tempora recusandae? Veniam, ipsum? Repellendus vero unde nam eaque iste nihil!"
    },

    {
        title: "Master en React de Victor Robles",
        date: "10/10/2029",
        body: "El mejor curso para aprender react que existe en español"
    },


];

posts.forEach(article => {

    articles.innerHTML += `
                <article class="articles__article">
                <h3 class="article__title">${article.title}</h3>

                <span class="article__date">${article.date}</span>

                <p class="article__body">
                    ${article.body}
                </p>

                <a href="#" class="article__btn">Leer más</a>
            </article>


    `

});