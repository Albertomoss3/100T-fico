import getData from '../utils/getData';

const Home = async() => {
    const characters = await getData();
    const View = `
        <div class="characters">
            ${characters.results.map(character => `
                <article class="characters-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return View;
}
export default Home;