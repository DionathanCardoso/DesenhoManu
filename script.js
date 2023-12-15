const images = [
    { 'id': '1', 'url': './img/cuteNoob2.png' },
    { 'id': '2', 'url': './img/cuteNoob3.png' },
    { 'id': '3', 'url': './img/cuteNoob4.png' },
    { 'id': '4', 'url': './img/cuteNoob5.png' },
    { 'id': '5', 'url': './img/cuteNoob6.png' },
    { 'id': '6', 'url': './img/cuteNoob7.png' },
    { 'id': '7', 'url': './img/cuteNoob8.png' },
    { 'id': '8', 'url': './img/cuteNoob9.png' },
    { 'id': '9', 'url': './img/cuteNoob10.png' },
    { 'id': '10', 'url': './img/cuteNoob11.png' },
    { 'id': '11', 'url': './img/cuteNoob12.png' },
    { 'id': '12', 'url': './img/cuteNoob13.png' },
    { 'id': '13', 'url': './img/cuteNoob14.png' },
    { 'id': '14', 'url': './img/cuteNoob15.png' },
    { 'id': '15', 'url': './img/cuteNoob16.png' },
    { 'id': '16', 'url': './img/cuteNoob17.png' },
    { 'id': '17', 'url': './img/cuteNoob18.png' },
    { 'id': '18', 'url': './img/cuteNoob19.png' },
    { 'id': '19', 'url': './img/cuteNoob20.png' },
    { 'id': '20', 'url': './img/cuteNoob21.png' },
    { 'id': '21', 'url': './img/cuteNoob22.png' },
    { 'id': '22', 'url': './img/cuteNoob23.png' },
    { 'id': '23', 'url': './img/cuteNoob24.png' },

];

const ContainerImg = document.getElementById("containte");
const button = document.getElementById("iniciar");
let contador = 0;
let interval = null;

const recarregar = (image, ContainerImg) => {
    ContainerImg.innerHTML =
        `<img  src = "${image[contador].url}" id="foto">`;

    function Ligar() {
        if (button.innerText == "Ligar") {
            interval = setInterval(
                () => {
                    contador = contador < images.length ? ++contador : 0;
                    ContainerImg.innerHTML =
                        `<img  src = "${image[contador].url}" id="foto">`;
                }, 100
            )
            button.innerText = "Desligar";
        } else {
            clearInterval(interval)
            button.innerText="Ligar";
        }
    }

    button.addEventListener("click", Ligar)

}

ContainerImg.addEventListener('load', recarregar(images, ContainerImg));