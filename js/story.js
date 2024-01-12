// Thêm class vào body
document.body.classList.add('custom-font');


const KANJI = [
    {
        kanji: '⼀',
        stroke: '1',
        mean: ['one', 'horizontal stroke'],
        reading: 'いち'
    },
    {
        kanji: '⼁',
        stroke: '1',
        mean: ['vertical stroke'],
        reading: 'たてぼう'
    },
    { kanji: '⼂', stroke: '1', mean: ['dot'], reading: 'てん' },
    {
        kanji: '⼃',
        stroke: '1',
        mean: ['diagonal sweeping stroke'],
        reading: 'の'
    },
    { kanji: '⼄', stroke: '1', mean: ['the second'], reading: 'おつ' },
    { kanji: '⺃', stroke: '1', mean: ['the second'], reading: 'おつ' },
    { kanji: '⼇', stroke: '2', mean: ['lid', 'top'], reading: 'なべぶた' },
    { kanji: '⼈', stroke: '2', mean: ['person'], reading: 'ひと' },
    {
        kanji: '⺅',
        stroke: '2',
        mean: ['person'],
        reading: 'にんべん',
        other_reading: 'へん'
    },
    {
        kanji: '𠆢',
        stroke: '2',
        mean: ['person'],
        reading: 'ひとやね',
        other_reading: 'かんむり'
    },
    {
        kanji: '⼉',
        stroke: '2',
        mean: ['human legs'],
        reading: 'ひとあし',
        other_reading: 'あし'
    },
    { kanji: '⼊', stroke: '2', mean: ['to enter'], reading: 'いる' },
    { kanji: '⼋', stroke: '2', mean: ['eight'], reading: 'はち' },
    {
        kanji: '⼌',
        stroke: '2',
        mean: ['to enclose'],
        reading: 'けいがまえ',
        other_reading: 'かまえ, けいがまえ'
    },
    {
        kanji: '⼍',
        stroke: '2',
        mean: ['cover', 'crown'],
        reading: 'わかんむり',
        other_reading: 'かんむり'
    },
    {
        kanji: '⼎',
        stroke: '2',
        mean: ['ice'],
        reading: 'にすい',
        other_reading: 'へん'
    },
    {
        kanji: '⼏',
        stroke: '2',
        mean: ['table'],
        reading: 'きにょう',
        other_reading: 'つくり'
    },
    {
        kanji: '⺇',
        stroke: '2',
        mean: ['wind'],
        reading: 'かぜかんむり',
        other_reading: 'かんむり'
    },
    {
        kanji: '⼐',
        stroke: '2',
        mean: ['container', 'open box'],
        reading: 'かんにょう',
        other_reading: 'にょう'
    },
    { kanji: '⼑', stroke: '2', mean: ['knife', 'sword'], reading: 'かたな' },
    {
        kanji: '⺉',
        stroke: '2',
        mean: ['knife', 'sword'],
        reading: 'りっとう',
        other_reading: 'つくり'
    },
    { kanji: '⼒', stroke: '2', mean: ['power'], reading: 'ちから' },
    {
        kanji: '⼓',
        stroke: '2',
        mean: ['to wrap'],
        reading: 'つつみがまえ',
        other_reading: 'かまえ, つつみがまえ'
    },
    {
        kanji: '⼔',
        stroke: '2',
        mean: ['spoon'],
        reading: 'さじ',
        other_reading: 'つくり'
    },
    {
        kanji: '⼕',
        stroke: '2',
        mean: ['box'],
        reading: 'はこがまえ',
        other_reading: 'かまえ, はこがまえ'
    },
    {
        kanji: '⼖',
        stroke: '2',
        mean: ['to conceal', 'hide'],
        reading: 'かくしがまえ',
        other_reading: 'かまえ, はこがまえ'
    },
    { kanji: '⼗', stroke: '2', mean: ['ten'], reading: 'じゅう' },
    {
        kanji: '⼼',
        stroke: '4',
        mean: ['heart', 'mind', 'spirit'],
        reading: 'こころ'
    },
    {
        kanji: '⺗',
        stroke: '4',
        mean: ['heart', 'mind', 'spirit'],
        reading: 'したごころ',
        other_reading: 'あし'
    },
    { kanji: '⼽', stroke: '4', mean: ['spear', 'weapon'], reading: 'ほこ' },
    { kanji: '⼾', stroke: '4', mean: ['door'], reading: 'と' },

    { kanji: '⼿', stroke: '4', mean: ['hand'], reading: 'て' },
    { kanji: '⽀', stroke: '4', mean: ['branch'], reading: 'しにょう' },
    {
        kanji: '⽁',
        stroke: '4',
        mean: ['activity', 'to strike', 'hit'],
        reading: 'ぼくづくり',
        other_reading: 'つくり'
    },
    {
        kanji: '⺙',
        stroke: '4',
        mean: ['activity', 'to strike', 'hit'],
        reading: 'ぼくづくり',
        other_reading: 'つくり'
    },
    {
        kanji: '⽂',
        stroke: '4',
        mean: ['literature', 'letters'],
        reading: 'ぶん'
    },
    {
        kanji: '⽃',
        stroke: '4',
        mean: ['big dipper', 'ladle', '18 liters'],
        reading: 'ますづくり'
    }
]

const kanjicontainer = document.querySelector('.output-kanji-up-right-mean')
        const inputKanji = document.querySelector('#kanji')
        const rendercmt = (input) => {
            const filteredKanji = KANJI.filter(cmt => cmt.kanji === input)
            const cmtHTML = filteredKanji.map(
                (cmt) => `
                    <p id="mean"> ${cmt.mean}</p>
                    <p id="kun"> ${cmt.stroke}</p>
                    <p id="on"> ${cmt.reading}</p>
                    <p id="composition">${cmt.other_reading}</p>
                `
            )
            kanjicontainer.innerHTML = cmtHTML.join('')
        }

        let Kanji = document.querySelector('#kanji')
        let output = document.querySelector('#output-kanji-ne')
        let btn = document.querySelector('#create')
        let output_frame = document.querySelector(".output")       

        btn.addEventListener("click", function() {
            event.preventDefault();
            const inputVal = Kanji.value.trim(); // Trim to remove leading/trailing whitespaces
            if (inputVal.length > 0) {
                output_frame.style.display = "flex";
                rendercmt(inputVal);
            } else {
                kanjicontainer.innerHTML = ''; // Clear container if input is empty
            }
            let input_kanji = Kanji.value;
            output.innerText = input_kanji;
        });

        let tag_btn1 = document.querySelector(".normal")
        let tag_btn2 = document.querySelector(".fun")
        let tag_btn3 = document.querySelector(".drama")
        let tag_btn4 = document.querySelector(".sad")

        tag_btn1.addEventListener('click', () => {
            tag_btn1.classList.add('active')
            tag_btn2.classList.remove('active')
            tag_btn3.classList.remove('active')
            tag_btn4.classList.remove('active')
        })

        tag_btn2.addEventListener('click', () => {
            tag_btn2.classList.add('active')
            tag_btn1.classList.remove('active')
            tag_btn3.classList.remove('active')
            tag_btn4.classList.remove('active')
        })

        tag_btn3.addEventListener('click', () => {
            tag_btn3.classList.add('active')
            tag_btn2.classList.remove('active')
            tag_btn1.classList.remove('active')
            tag_btn4.classList.remove('active')
        })

        // tag_btn4.addEventListener('click', () => {
        //     tag_btn4.classList.add('active')
        //     tag_btn2.classList.remove('active')
        //     tag_btn3.classList.remove('active')
        //     tag_btn1.classList.remove('active')
        // })
