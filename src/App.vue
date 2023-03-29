<script setup lang="ts">
import { ref } from "vue";
import Modal from "./components/modal/Modal.vue";

const modalOpen = ref(false);

function openModal() {
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
}
</script>

<template>
  <header>
    <div class="wrapper">Signature app</div>
  </header>

  <main>
    <button class="modal-button" @click="openModal">Signature Model</button>
    <Modal :isOpen="modalOpen" @close-modal="closeModal" />
  </main>
</template>
