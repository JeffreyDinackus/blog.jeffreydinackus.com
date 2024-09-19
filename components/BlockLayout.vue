<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  path: {
    type: String,
    required: true
  }
});

console.log('Path:', props.path); // Add this line to debug
</script>
