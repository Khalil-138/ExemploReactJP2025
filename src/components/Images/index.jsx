import './style.css'

function Images() {
    return {
     < section >
          <h2> Imagens e Vídeos </h2>
          <h3>Imagem</h3>
          <figure>

            <img src="https://blog.softcare.com.br/wp-content/uploads/2022/12/04-Cachorro-na-praia-pode-ou-nao-pode-571x300.jpg"
              alt="Imagem de um cão na praia" width="571" height="300" />
          </figure>
          <h3>Vídeo</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JpYVZpuMPYM?si=sEN_AyE77s_1CVnT"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section >
    }
}

export default Images