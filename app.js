let vm = Vue.createApp({
    data(){
        return{
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    methods: {
        resetValues(){
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        async copyValues(){
            let text = `transform: ${this.styles.transform};`
            await navigator.clipboard.writeText(text);
            
            alert('css copied to clipboard');
        }
    },
    computed: {
        styles(){
            return{
                transform: `
                    perspective(${this.perspective}px) 
                    rotateX(${this.rotateX}deg) 
                    rotateY(${this.rotateY}deg) 
                    rotateZ(${this.rotateZ}deg)
                `
            }
        }
    }
}).mount('#app')