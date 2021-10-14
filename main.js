const app = Vue.createApp({
   data() {
      return {
         cart: 0,
         name: "Vue Socks",
         type: "Devs",
         specs: ["150% Wool", "98% Cashmere", "70% Cotton"],
         selectedVariant: 0,
         variants: [
            {
               id: 123,
               color: "blue",
               image: "./images/socks_blue.jpg",
               quantity: 90,
            },
            {
               id: 456,
               color: "green",
               image: "./images/socks_green.jpg",
               quantity: 15,
            },
         ],
      };
   },
   methods: {
      addToCart() {
         this.cart += 1;
      },
      updateVariant(index) {
         this.selectedVariant = index;
      },
   },

   computed: {
      productName() {
         return `${this.name} for ${this.type}`;
      },
      image() {
         return this.variants[this.selectedVariant].image;
      },
   },
});
