const {createApp} = Vue;

createApp({
    data(){
        return{
            message: "Vue.js",
            luogo: "Faro",
            classiRiccardo:"mt-3 text-white shadow bg-dark py-2 mb-4",
            scelto: true,
            immagine: "img/img.jpg"
        }
    }
}).mount("#app");