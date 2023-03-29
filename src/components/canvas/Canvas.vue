<template>
  <canvas
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseout="isSign = false"
    @mouseup="isSign = false"
  />
</template>

<script lang="ts">
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  data(): {
    canvasCtx: any;
    isSign: boolean;
    previousX: number;
    previousY: number;
  } {
    return {
      canvasCtx: null,
      isSign: false,
      previousX: 0,
      previousY: 0,
    };
  },
  methods: {
    onMouseDown($event: MouseEvent) {
      this.isSign = true;

      if (window.innerWidth > 500) {
        this.previousX = $event.offsetX / 2;
      } else {
        this.previousX = $event.offsetX;
      }

      this.previousY = $event.offsetY;
    },
    onMouseMove($event: MouseEvent) {
      if (this.isSign) {
        let currentX = $event.offsetX;

        if (window.innerWidth > 500) {
          currentX = $event.offsetX / 2;
        }

        const currentY = $event.offsetY;
        this.draw(this.previousX, this.previousY, currentX, currentY);
        this.previousX = currentX;
        this.previousY = currentY;
      }
    },
    draw(strX: number, strY: number, destX: number, destY: number) {
      this.canvasCtx.beginPath();
      this.canvasCtx.moveTo(strX, strY);
      this.canvasCtx.lineTo(destX, destY);
      this.canvasCtx.closePath();
      this.canvasCtx.stroke();

      this.$emit("update:modelValue", true);
    },
  },
  watch: {
    modelValue(model) {
      if (!model) {
        this.canvasCtx.clearRect(0, 0, this.$el.width, this.$el.height);
      }
    },
  },
  mounted() {
    this.canvasCtx = this.$el.getContext("2d");
    this.canvasCtx.strokeStyle = "black";
    this.canvasCtx.lineWidth = 2;
  },
};
</script>
