<script>

  import { ref } from 'vue'
  
  export default {
    setup () {
      const text = ref('xD')
      return {
          text
      }
      }
    }
  
  
  
  </script>
  
  <template>
      <q-page class="q-pl-sm">
         <h1 class="text-center"> Row </h1>

        <div class="q-gutter-md q-pb-sm">

          <q-btn color="primary">Uno</q-btn>
          <q-btn color="primary">Dos</q-btn>
          <q-btn color="primary">Tres</q-btn>

        </div> 

         <div class="row">
  
          <p class="col-12 col-sm-6 col-md-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur numquam fugiat doloremque asperiores sint esse nobis unde nam! Explicabo animi, blanditiis commodi eaque ab porro fugit. Voluptatibus earum consectetur nihil!</p>
          <p class="col-12 col-sm-6 col-md-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur numquam fugiat doloremque asperiores sint esse nobis unde nam! Explicabo animi, blanditiis commodi eaque ab porro fugit. Voluptatibus earum consectetur nihil!</p>
          <p class="col-12 col-md-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur numquam fugiat doloremque asperiores sint esse nobis unde nam! Explicabo animi, blanditiis commodi eaque ab porro fugit. Voluptatibus earum consectetur nihil!</p>
  
         </div>

         <div class="row items-center bg-primary text-white text-center">

          <p class="col bg-positive">Lorem, ipsum dolor.</p>
          <p class="col bg-positive">Lorem, ipsum dolor.</p>
          <p class="col bg-positive">Lorem, ipsum dolor.</p>

         </div>
      </q-page>
      
  </template>