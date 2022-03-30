const form = `
    <form id="form">
        <input type="text" value="hello2">
    </form>
`


function loadEvent(){

    const rootElement = document.getElementById('root')

    rootElement.insertAdjacentHTML('beforeend', form)

    const formElement = document.getElementById('form') //2 fontos esemeny van ami az inputhoz kotodik: 1.) change: valtozott e a tartalma 2.) input: barmilyen interakcio hozzaadodhat

    //event.target =  csak az esemenyeken belul van
    
    const inputElement = formElement.querySelector('input')
    console.log(inputElement.value);


    inputElement.addEventListener('input', event =>{        
        console.log("ez az inputElement valtozoba mentett input erteke: ", inputElement.value);
        console.log("event target erteke: ",event.target.value);
    })



}
window.addEventListener("load", loadEvent)