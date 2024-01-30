// console.log('Hello World!');
// const title = document.getElementById('title');
// const image = document.getElementById('cocktail-image');
// const instructions = document.getElementById('instructions');
// const alcoholIndicator = document.getElementById('alcohol-indicator');


// fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
//     .then((response)=>{
// // console.log(response);
// return response.json();
// })
//     .then((secondResponse)=>{
//         console.log(secondResponse.drinks[0].strAlcoholic);

// // -tikriname s1lyga, ar alkoholinis?-----is consoleloginame, verciame i boolean reiksme
//         const isAlcoholic = secondResponse.drinks[0].strAlcoholic === 'Alcoholic' ? true : false;
//         // console.log(isAlcoholic); 
//// ---------- dedame indikatoriaus salyga

// const indicatorStyle = isAlcoholic ? "alcoholic" : "non-alcoholic";
// // priklausomai nuo klases priskiriama stiliaus klase, sukuriant nauja, kad ne overraidintu senosios

// alcoholIndicator.classList.add(indicatorStyle);
// // --------------------
//         title.innerText = secondResponse.drinks[0].strDrink;

//         image.src = secondResponse.drinks[0].strDrinkThumb;

//         instructions.innerText = secondResponse.drinks[0].strInstructions;



//     })
//         .catch((err)=>{
//     console.log(err);
//         });

// ------------------------------------------------------------------------------------
// fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
//     .then((response)=>{
// console.log(response);
// return response.json();
// })
//     .then((data)  =>{
//         document.getElementById("wrapper").innerHTML = data.drinks[0].strInstructions;
//         console.log(data)
//     });
    // ////////////////-------------------------/////////////////////

// const title = document.getElementById("title");
// const ingridient1 = document.getElementById("cocktailIngridient1");
// const ingridient2 = document.getElementById("cocktailIngridient2");
// const ingridient3 = document.getElementById("cocktailIngridient3");

// const image = document.getElementById("cocktail-image");
// const indicator = document.getElementById("alcohol-indicator");
//  const cocktailCard =  document.getElementById("wrapper");

//     fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
//     .then((response)=>{
//     // console.log(response);
//     return response.json(response);
//     })

//     .then((secondResponse)  =>{
//         console.log(secondResponse.drinks[0])

// title.innerText = secondResponse.drinks[0].strDrink;

// ingridient1.innerText = secondResponse.drinks[0].strIngredient1;
// ingridient2.innerText = secondResponse.drinks[0].strIngredient2;
// ingridient3.innerText = secondResponse.drinks[0].strIngredient3;

// image.src = secondResponse.drinks[0].strDrinkThumb;

// const isAlcoholic = secondResponse.drinks[0].strAlcoholic === "Alcoholic" ? true : false;

// console.log(isAlcoholic);

// const indicatorStyle = isAlcoholic ? "alcoholic"
// : "Non-alcoholic";

// indicator.classList.add(indicatorStyle);

//     })

//     .catch((err)=>{
//             console.log(err);
//                 });

// wrapper.append(title, ingridient1, ingridient2, ingridient3, image, indicator);

//  document.getElementById("wrapper").addEventListener("click", ()=>{
//      console.log(title);
//  });

// const fetchRandomCocktail = async () => {
//     const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");
  
//     const data = await response.json();
  
//   console.log(response);
//   };
//   fetchRandomCocktail();

// //   ///////////////////////////-------------------///////////////////////////

// fetch fetchCoctails = await () => {
//     const response = await fetch(
//     "https://thecocktaildb.com/api/json/v1/1/random.php"+
//     new URLSearchParams ({

//     })
//     )

//     fetchCoctails();

// -----------------------------------------
const currencyName = document.getElementById("currencyName");
const currencyPrice = document.getElementById("currencyPrice");
const currencyRank = document.getElementById("currencyRank");
const wrapper = document.getElementById("wrapper");

fetch('https://api.coincap.io/v2/assets')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    // const sortedData = data.data.filter((element) => element.name <= 19)
    // .sort((a, b) => a.name - b.name);

    data.data.forEach((element) => {
      if (element.rank <= 19) {
        const currencyNameElement = document.createElement("div");
        const currencyPriceElement = document.createElement("div");
        const currencyRankElement = document.createElement("div");
        
        const currencyCard = document.createElement("div");
        currencyCard.classList.add("currencyCard");

        currencyNameElement.innerText = element.name;
        currencyPriceElement.innerText = element.priceUsd;
        currencyRankElement.innerText = element.rank;

        currencyCard.append(currencyNameElement, currencyPriceElement, currencyRankElement);
        wrapper.append(currencyCard);

currencyPriceElement >100 ? currencyCard.classList.add("gold") : currencyCard.classList.add("silver");



        currencyCard.addEventListener("click", () => {
          console.log(element.name);
        });
      }
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

        //  .catch((err)=>{
        //             console.log(err);
        //                 });  

//   [09:41] Robertas Ankudovičius
//   TASKS
//   1. Naudojantis coin api dokumentacija parfetchint 20 populiariausių kriptovaliutų. Jų kainos turi būt atvaizduotos "eur"; (veiksmą atlikt per thunder client);
//   2. Tą patį veiksmą atlikt naudojant JS, gautus duomenis išvest consolėj;
//   // https://api.coincap.io/v2/assets
//   3. Turimas valiutas atvaizduoti į puslapį, kiekvienai kriptovaliutai sukurti kortelę kurioje turi būt: 
//   - Kriptovaliutos pavadinimas;
//   - Dabartinė kainą;
//   4. Paspaudus ant kriptovaliutos kortelės - consolėj turi būt atvaizduotas tos kriptovaliutos pavadinimas;
//   5. Jeigu kriptovaliutos vieneto kaina yra didesnė uz 100eur - kriptovaliutos border turi būt auksinės spalvos, jei pigenė už 100, sidabrinės spalvos;
//   6. Prieš atvaizduojant kriptovaliutas - jas išrikiuot abecelės tvarka;