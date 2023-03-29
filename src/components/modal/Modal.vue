<script setup lang="ts">
import { ref } from "vue";
import CloseIcon from "../icons/IconClose.vue";
import Canvas from "../canvas/Canvas.vue";

const canvasVal1 = ref(true);
const canvasVal2 = ref(true);

const attendance = ref("Present");
const groupTherapy = ref("Present");

function increment() {
  canvasVal1.value = !canvasVal1.value;
}

function increment2() {
  canvasVal2.value = !canvasVal2.value;
}
defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <div class="modal" :class="{ modal__open: isOpen }">
    <div class="modal__header">
      <div class="modal__header--text">
        <h1 class="modal__header--h1">View Record</h1>
        <span class="modal__header--span">- Mon. Feb 27 2023</span>
      </div>
      <CloseIcon @click="$emit('close-modal')" />
    </div>
    <div class="modal__body">
      <div class="modal__body--content">
        <h1>Attendance</h1>
        <div class="modal__body--content-radio">
          <div>
            <input
              type="radio"
              id="present"
              name="signature"
              value="Present"
              v-model="attendance"
            />
            <label for="present">Present</label>
          </div>
          <div>
            <input
              type="radio"
              id="absent"
              name="signature"
              value="Absent"
              v-model="attendance"
            />
            <label for="absent">Absent</label>
          </div>
        </div>
        <div class="flex flex-col" v-if="attendance === 'Present'">
          <h4 class="modal__body--content-span">Add Signature</h4>
          <button class="modal__body--content-clear" @click="increment">
            Clear
          </button>
          <Canvas v-model="canvasVal1" />
        </div>
      </div>
      <div class="modal__body--content mt-4">
        <h1>Group therapy</h1>
        <div class="modal__body--content-radio">
          <div>
            <input
              type="radio"
              id="present"
              name="signature2"
              value="Present"
              v-model="groupTherapy"
            />
            <label for="present">Present</label>
          </div>
          <div>
            <input
              type="radio"
              id="absent"
              name="signature2"
              value="Absent"
              v-model="groupTherapy"
            />
            <label for="absent">Absent</label>
          </div>
        </div>
        <div class="flex flex-col" v-if="groupTherapy === 'Present'">
          <h4 class="modal__body--content-span">Add Signature</h4>
          <button class="modal__body--content-clear" @click="increment2">
            Clear
          </button>
          <Canvas v-model="canvasVal2" />
        </div>
      </div>
      <button class="modal-button ml-auto mt-5 w-64">Save Updates</button>
    </div>
  </div>
</template>
