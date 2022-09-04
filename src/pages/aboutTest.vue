<script>

import { ref } from 'vue'

export default {
  setup () {
    const text = ref('')
    return {
        text
    }
    }
  }

</script>

<template>
    <q-page class="q-pl-sm">
        <h6  class="holis text-indigo-10"> Hello World </h6>
        <h6  class="holis text-indigo-10 bg-red-10"> Hello World </h6>
        <h6  class="holis text-positive"> Hello World </h6>
        <h6  class="holis text-warning"> Hello World </h6>
        <h6  class="holis text-indigo-10"> Hello World </h6>
        <p class="holis2 text-white bg-dark q-px-xl  q-py-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio sint totam laudantium aliquam velit libero. Illum veniam ratione repellendus adipisci repellat velit quasi, tempora, pariatur corrupti, fugit voluptas odio.</p>
        <p class="holis2 text-white bg-dark q-px-xl  q-my-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi beatae placeat odio, ut nam incidunt perferendis ab maiores fugit officiis dignissimos. Cum iste consectetur repellat repellendus porro? Deleniti, dolores!</p>
        <p class="holis" >{{text}}</p>
        <q-input outlined v-model="text" placeholder="Type here" />

    </q-page>
    
</template>

<style lang="scss">
  .holis{ 
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
    font-weight: 400;
}
.holis2{ 
    font-family: "Times New Roman", Times, serif;
    font-size: 16px;
}
   
  </style>