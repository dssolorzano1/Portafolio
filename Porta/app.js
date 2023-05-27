//lógica de la aplicación
Vue.component('componente', {
    props: ['image', 'title', 'text'],
    data() {
      return {
        showInfo: false
      };
    },
    template: `
      <div class="componente">
        <div class="image-container">
          <img width="215" :src="image" :alt="title" @mouseover="showInfo = true" @mouseout="showInfo = false" />
        </div>
        <div class="content-container">
          <h2>{{title}}</h2>
          <div class="text-component" v-if="showInfo">
            {{ text }}
          </div>
        </div>
      </div> 
    `,
    methods: {
      toggleInfo() {
        this.showInfo = !this.showInfo;
      }
    },
    mounted() {
      const style = `
        .componente {
            display: flex;
            align-items: flex-start;
            padding: 10px;
        }
  
        .image-container {
            margin-right: 20px;
        }
  
        .image-container img {
            border-radius: 50%;
        }
  
        .componente h2 {
            font-size: 18px;
            color: #333;
            margin-top: 0;
            margin-bottom: 10px;
        }
  
        .text-component {
            white-space: pre-line;
            font-size: 14px;
            color: #666;
        }
      `;
      const styleElement = document.createElement('style');
      styleElement.innerHTML = style;
      document.head.appendChild(styleElement);
    }
  });

new Vue({
    el: '#app'
})

const template = document.createElement('template');
template.innerHTML = `<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
    .w3-row-padding img {margin-bottom: 12px}
      </style>}`;


// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}


window.customElements.define('my-rating', Rating);