const countryName=(new URLSearchParams(window.location.search).get ('name'));
const flagImage = document.querySelector('.my-flag')
const countryHead=document.querySelector('.country-details h1')
const nativeName=document.querySelector('.native-name')
const populationName=document.querySelector('.population')
const regionName=document.querySelector('.region')
const subregionName=document.querySelector('.sub-region')
const capitalName=document.querySelector('.capital')
const tldName=document.querySelector('.tld')
const currencyName=document.querySelector('.currency')
const languageName=document.querySelector('.language')
const borderCountryAnchor=document.querySelector('.border-country')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=> res.json())
.then(([country])=>{
    console.log(country);
    flagImage.src=country.flags.svg
    countryHead.innerText=country.name.common
    if(country.name.nativeName){
        nativeName.innerText=Object.values(country.name.nativeName)[0].common
      } else{
        nativeName.innerText=country.name.common
      }
      populationName.innerText=country.population
      regionName.innerText=country.region
      subregionName.innerText=country.subregion
      capitalName.innerText=country.capital[0]
      tldName.innerText=country.tld[0]
      currencyName.innerText=Object.values(country.currencies)[0].name
      languageName.innerText=Object.values(country.languages).join(', ')
      
    if(country.borders){
      country.borders.forEach((border)=>{
        // console.log(border);
        fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=> res.json())
        .then(([borderCountry])=>{
          // console.log(borderCountry);
          const borderCountryTag=document.createElement('a')
          borderCountryTag.innerText=borderCountry.name.common
          // console.log(borderCountryTag);
            borderCountryTag.href=`country.html?name=${borderCountry.name.common}`
          borderCountryAnchor.append(borderCountryTag)
        })
      })
    }

})