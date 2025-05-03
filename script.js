const countriesContainer = document.querySelector(".countries-container");
const Filterbutton = document.querySelector('.select-button')
const SearchallContainer=document.querySelector('.search-container input')

let allCountriesData= fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then((data)=>{
  allCountriesData=data;
})

fetch("https://restcountries.com/v3.1/all")
  .then((req) => req.json())
  .then(renderedCountries
   );

Filterbutton.addEventListener('change', (e)=>{
  fetch(`https://restcountries.com/v3.1/region/${Filterbutton.value}`)
  .then((req) => req.json())
  .then((renderedCountries)
    
   
  );
})

function renderedCountries(data){
  countriesContainer.innerHTML=''
  data.forEach((country) => {
    // console.log(country);
    
    const countryCard = document.createElement("a");
    countryCard.href=`/country.html?name=${country.name.common}`
    countryCard.classList.add("countries-card");

    countryCard.innerHTML = ` 
     <img src="${country.flags.svg}" alt="${country.name.common}flag">
      <div class="countries-text">
    <h3 class="card-title">${country.name.common}</h3>
   <p><b>Population</b> ${country.population}</p>
   <p><b>Region</b> ${country.region}</p>
   <p><b>Capital</b> ${country.capital}</p>
  `

    countriesContainer.append(countryCard);
  })
  
  

}

SearchallContainer.addEventListener('input', (e)=>{
 const filteredCountries= allCountriesData.filter((country)=>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  )
  console.log(filteredCountries);
  renderedCountries(filteredCountries)
})


