const tagItems = document.querySelectorAll(".tag");
let output_jan = document.querySelector("#jan-story");
let output_en = document.querySelector("#en-story");
let btn = document.querySelector("#n-create");
let storyType = "Normal";
let saveBtn;
let regenerateBtn;

tagItems.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".tag.active")?.classList.remove("active");
    this.classList.add("active");
    storyType = this.innerText;
  });
});

const kanjicontainer = document.querySelector(".output");
const Kanji = document.querySelector("#n-kanji");

// // Thêm class vào body
// const fetchData = async (kanji, type) => {
//   try {
//     const response = await fetch(
//       `http://localhost:3000/api/v1/multipleKanji/generateStory`,
//       {
//         body: JSON.stringify({
//           {
//           kanji: kanji,
//           type: type
//          },
//         }),
//       }
//     );

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

const fetchData = async (kanji, type) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/multipleKanji/generateStory",
      {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kanji: kanji,
          type: type,
        }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const load = document.querySelector(".loader");
btn.addEventListener("click", async function () {
  load.style.display = "flex";
  let kanji_list = Kanji.value.split(",");
  try {
    const data = await fetchData(kanji_list, storyType);

    console.log(data);
    const rendercmt = (input) => {
      const kanjiHtmlItem = `
          <div class="output-jan-story">
          <p id="jan-story">${data.story}</p>
      </div>
      <div class="output-en-story">
          <p id="en-story">${data.translate}</p>
          <p id="Type">${data.storyType}</p>
      </div>
      <div class="save-reload">
          <i class="fa-regular fa-bookmark"></i>
          <i class="fa-solid fa-arrows-rotate"></i>
      </div>`;
      kanjicontainer.innerHTML = kanjiHtmlItem;
    };
    rendercmt(data);
    // Add save btn event
    saveBtn = document.querySelector(".fa-bookmark");
    saveBtn.addEventListener("click", () => {
      const parentHasClass = saveBtn.closest(".output");
      console.log(parentHasClass);
      let result = {};
      const jan_story = parentHasClass.querySelector("#jan-story").innerText;
      const translate = parentHasClass.querySelector("#en-story").innerText;
      const storytype = parentHasClass.querySelector("#Type").innerText;
      result = {
        story: jan_story,
        translate: translate,
        kanji: kanji_list,
        storyType: storytype,
      };
      console.log(result);
      postKanjiToDB(result);
    });
    load.style.display = "none";
  } catch (error) {
    console.log(error);
  }
});

const postKanjiToDB = async (data) => {
  const rawResponse = await fetch(
    "http://localhost:3000/api/v1/multipleKanji/saveStory",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    }
  );
  const content = await rawResponse.json();

  console.log(content);
};

// const regenerateStory = async (data) => {
//   const rawResponse = await fetch(
//     "http://localhost:3000/api/v1/singleKanji/regenerateStory",
//     {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...data,
//       }),
//     }
//   );
//   const content = await rawResponse.json();

//   console.log(content);
// };
