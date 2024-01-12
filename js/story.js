const tagItems = document.querySelectorAll('.tag')
let output = document.querySelector('#output-kanji-ne')
let btn = document.querySelector('#create')
let output_frame = document.querySelector(".output")   
let storyType = 'Normal'
tagItems.forEach((item) => {
    item.addEventListener('click', function () {
        document
            .querySelector('.tag.active')
            ?.classList.remove('active')
        this.classList.add('active')
        storyType = this.innerText
    })
})

const kanjicontainer = document.querySelector('.output-container');
const Kanji = document.querySelector('#kanji');
// Thêm class vào body
const fetchData = async (Kanji, storyType) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/v1/singleKanji/${Kanji}/${storyType}`
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}


btn.addEventListener("click", async function (){
    try {
        const data = await fetchData(Kanji.value, storyType)
        let value = data.kanjiInfo
        let kanji_list = Kanji.value;
         const rendercmt = (input) => {
            let kanjiHTMLarray = '';
            
           
               value.forEach( 
                    (cmt) => {
                        const kanjiHtmlItem = `
                        <div class="output">
                        <div class="output-kanji">
                            <div class="output-kanji-up">
                                <div class="output-kanji-up-left">
                                    <p id="output-kanji-ne" class="output-kanji-up-left-text">${cmt.kanji.character}</p>
                                </div>
                                <div class="output-kanji-up-right">
                                    <div class="output-kanji-up-right-title">
                                        <h3>Meaning:</h3>
                                        <h3>Kunyomi:</h3>
                                        <h3>Onyomi:</h3>
                                        <h3>Radical:</h3>
                                    </div>
                                    <div class="output-kanji-up-right-mean">
                                        <p id="mean"> ${cmt.kanji.meaning.english}</p>
                                        <p id="kun"> ${cmt.kanji.kunyomi.hiragana}</p>
                                        <p id="on"> ${cmt.kanji.onyomi.katakana}</p>
                                        <p id="radical">${cmt.radical.character} (${cmt.radical.meaning.english})</p>
                                    </div>
                                </div>
                            </div>
                            <div class="output-kanji-down">
                                    <p id="story">
                                    ${cmt.story}
                                    </p>
                            </div>
                        </div>
                        <div class="save-reload">
                            <i class="fa-regular fa-bookmark"></i>
                            <i class="fa-solid fa-arrows-rotate"></i>
                        </div>
                    </div>
                        `;
                        kanjiHTMLarray +=`${kanjiHtmlItem} \n`;
                    }
                );

                kanjicontainer.innerHTML = kanjiHTMLarray;

        }
        rendercmt(kanji_list);
    } catch (error) {
        console.error(error)
    }
    
})

