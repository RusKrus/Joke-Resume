const slider = document.querySelector('.slider');
const anchor = document.querySelectorAll('header a');
const header = document.querySelector('header')
const tableTds = document.querySelectorAll('table td')
let dark = false;

const changeTheme = event =>
{
    if (dark === false)
    {
        dark = true;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        for (a of anchor){
            a.style.color = 'white';
        }
        header.style.borderColor = "white"
        for (td of tableTds){
            td.style.borderColor = "white";
        }
    }
    else
    {
        dark = false;
        document.body.style.backgroundColor = "rgb(254, 255, 237)";
        document.body.style.color = "black";
        for (a of anchor){
            a.style.color = 'black';
        }
        header.style.borderColor = "black"
        for (td of tableTds){
            td.style.borderColor = "black";

    }
}
}

slider.onclick = changeTheme;



const photo = document.querySelector(".Me") ;
const figcaption = document.querySelector("#about em");
let kitten = false;
const changePhoto = event =>
{
    if (kitten === false)
    {
        kitten = true;
        photo.src = "Res/kitten.avif";
        figcaption.innerHTML = "It is the Kitten!";

    }
    else
    {
        kitten = false;
        photo.src = "Res/me.jpg"
        figcaption.innerHTML = "It's me again! Do you want to see the Kitten one more time?"

    }


}


photo.onclick = changePhoto