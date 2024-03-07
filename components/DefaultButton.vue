<script setup>
const props = defineProps({
  hasPrependIcon: Boolean,
  isDisabled: Boolean,
  isPrimary: Boolean,
  label: String,
});

const emits = defineEmits(["click"]);

const handleClick = () => {
  emits("click");
};
</script>

<template>
  <button
    @click="handleClick"
    :disabled="isDisabled"
    class="bg-purple-medium text-rose-lighter uppercase font-bold text-lg rounded-lg p-3 drop-shadow-xl hover:bg-purple-dark hover:text-white transition-transform transform-gpu active:scale-95"
  >
    <span v-if="hasPrependIcon">
      <slot v-if="hasPrependIcon" name="prepend-icon" />
    </span>
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<style></style>
