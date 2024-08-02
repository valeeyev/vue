const app = Vue.createApp({
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      mouseon: "Mouse is over the element",
      mouseleft: "Mouse has left the element",
      dblclick: "Element was double-clicked",
    };
  },
  methods: {
    handleMouseOver() {
      console.log(this.mouseon);
    },
    handleMouseLeave() {
      console.log(this.mouseleft);
    },
    handleDoubleClick() {
      console.log(this.dblclick);
    },
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      console.log(`Mouse position: X=${this.mouseX}, Y=${this.mouseY}`);
    },
  },
});

app.mount("#template");
