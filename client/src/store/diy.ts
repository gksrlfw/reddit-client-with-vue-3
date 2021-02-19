import { ref } from "vue";

export let count = ref(0);

export function setC(page: any) {
    count = page;
}

