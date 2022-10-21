<script>

import { ref } from 'vue'
import { useQuasar } from 'quasar'



export default {  
  setup () {

    const $q = useQuasar()
    const numberInput = ref('')
    var numbers = ref([])

    const notificar = () => {
      $q.notify({
        message: 'Queda ' + numbers.value.length++ + " opciones",
        color: 'primary'
      })
    }

    const notificar2 = () => {
      $q.notify({
        message: 'Ingresa un número de 3 dígitos',
        color: 'red'
      })
    }

    const notificar3 = () => {
      $q.notify({
        message: 'inserta 3 dígitos, imbecil',
        color: 'red'
      })
    }

    const notificar4 = () => {
      $q.notify({
        message: 'Los dígitos no puede repetirse',
        color: 'red'
      })
    }

        

for (let i = 12; i <= 987; i++) {
if(i.toString().length == 2) {var i3 = "0" + i.toString()}
else { var i3 = i.toString() }
  
  if(i3.charAt(0) == i3.charAt(1) || i3.charAt(0) == i3.charAt(2) || i3.charAt(1) == i3.charAt(2)){
  }
  else if(i.toString().length == 2) {

    numbers.value.push(i3)
  } else {
  numbers.value.push(i3)
  }
}

function validateInput(inputValue) {
  if (
    inputValue.charAt(0) == inputValue.charAt(1) ||
    inputValue.charAt(0) == inputValue.charAt(2) || 
    inputValue.charAt(1) == inputValue.charAt(2)
  ) return false
  return true
}

// numberInput.addEventListener("keydown", (e) => {
//   if(isNaN(e.key) && e.key !== "Backspace") e.preventDefault() 
// })

const reset = () => {

numberInput.value=""    
numbers.value = []

for (let i = 12; i <= 987; i++) {
if(i.toString().length == 2) {var i3 = "0" + i.toString()}
else { var i3 = i.toString() }
  
  if(i3.charAt(0) == i3.charAt(1) || i3.charAt(0) == i3.charAt(2) || i3.charAt(1) == i3.charAt(2)){
  }
  else if(i.toString().length == 2) {

    numbers.value.push(i3)
  } else {
  numbers.value.push(i3)
  }
}

  }

const b1H = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }

if(numberInput.value.length !== 3) {
notificar3()
    return true
  }
  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }
  
  var numberGet = []
  numbers.value.forEach(e => {

    if(e.charAt(0) == numberInput.value.charAt(1) || e.charAt(0) == numberInput.value.charAt(2) ||
    e.charAt(1) == numberInput.value.charAt(0) || e.charAt(1) == numberInput.value.charAt(2) ||
    e.charAt(2) == numberInput.value.charAt(0) || e.charAt(2) == numberInput.value.charAt(1)) numberGet.push(e)
  })
  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
      alert("El número es: " + numbers.value[0])
      return true
    }
 if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}

const b2H = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }
if(numberInput.value.length !== 3) {
notificar3()
    return true
  }

  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }

  
  var numberGet = []
  numbers.value.forEach(e => {
    if((e.charAt(0) == numberInput.value.charAt(1) && (e.charAt(1) == numberInput.value.charAt(0) || e.charAt(2) == numberInput.value.charAt(0))) || (e.charAt(1) == numberInput.value.charAt(0) && e.charAt(2) == numberInput.value.charAt(1)) ||
    (e.charAt(0) == numberInput.value.charAt(2) && (e.charAt(1) == numberInput.value.charAt(0) || e.charAt(2) == numberInput.value.charAt(0))) || (e.charAt(1) == numberInput.value.charAt(2) && e.charAt(2) == numberInput.value.charAt(0)) ||
    (e.charAt(0) == numberInput.value.charAt(1) && e.charAt(1) == numberInput.value.charAt(2)) || (e.charAt(0) == numberInput.value.charAt(2) && e.charAt(2) == numberInput.value.charAt(1)) || (e.charAt(1) == numberInput.value.charAt(2) && e.charAt(2) == numberInput.value.charAt(1))
    ) numberGet.push(e)
  })
  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
    alert("El número es: " + numbers.value[0])
    return true
  }
 if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}

const b3H = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }
 if(numberInput.value.length !== 3) {
notificar3()
    return true
  }

  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }

 
  var numberGet = []

  numbers.value.forEach(e => {
    if((e.charAt(0) == numberInput.value.charAt(2) && e.charAt(1) == numberInput.value.charAt(0) && e.charAt(2) == numberInput.value.charAt(1)) ||
    (e.charAt(0) == numberInput.value.charAt(1) && e.charAt(1) == numberInput.value.charAt(0) && e.charAt(2) == numberInput.value.charAt(2)) ||
    (e.charAt(0) == numberInput.value.charAt(1) && e.charAt(1) == numberInput.value.charAt(2) && e.charAt(2) == numberInput.value.charAt(0))
    ) numberGet.push(e)
  })

  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
      alert("El número es: " + numbers.value[0])
      return true
    }
 if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}

const b1H1M = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }

if(numberInput.value.length !== 3) {
notificar3()
    return true
  }

  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }


  
  var numberGet = []

  numbers.value.forEach(e => {
    if(e.charAt(0) == numberInput.value.charAt(0) && (e.charAt(2) == numberInput.value.charAt(1) || e.charAt(1) == numberInput.value.charAt(2)) ||
      e.charAt(1) == numberInput.value.charAt(1) && (e.charAt(2) == numberInput.value.charAt(0) || e.charAt(0) == numberInput.value.charAt(2)) ||
      e.charAt(2) == numberInput.value.charAt(2) && (e.charAt(1) == numberInput.value.charAt(0) || e.charAt(0) == numberInput.value.charAt(1))
    ) numberGet.push(e)
  })

  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
      alert("El número es: " + numbers.value[0])
      return true
    }
 if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}

const b2H1M = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }

if(numberInput.value.length !== 3) {
notificar3()
    return true
  }

  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }


  
  var numberGet = []

  numbers.value.forEach(e => {
    if((e.charAt(0) == numberInput.value.charAt(0) && e.charAt(1) == numberInput.value.charAt(2) && e.charAt(2) == numberInput.value.charAt(1)) ||
      (e.charAt(0) == numberInput.value.charAt(2) && e.charAt(1) == numberInput.value.charAt(1) && e.charAt(2) == numberInput.value.charAt(0)) ||
      (e.charAt(0) == numberInput.value.charAt(1) && e.charAt(1) == numberInput.value.charAt(0) && e.charAt(2) == numberInput.value.charAt(2))
    ) numberGet.push(e)
  })

  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
      alert("El número es: " + numbers.value[0])
      return true
    }
 if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}

const b1M = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }

if(numberInput.value.length !== 3) {
notificar3()
    return true
  }

  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }


  
  var numberGet = []

  numbers.value.forEach(e => {
    if(
       e.charAt(0) == numberInput.value.charAt(0) ||
       e.charAt(1) == numberInput.value.charAt(1) ||
       e.charAt(2) == numberInput.value.charAt(2)
    ) numberGet.push(e)
  })

  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
      alert("El número es: " + numbers.value[0])
      return true
    }
 if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}

const b2M = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }


  if(numberInput.value.length !== 3) {
notificar3()
    return true
  }

  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }


  var numberGet = []

  numbers.value.forEach(e => {
    if(
       (e.charAt(0) == numberInput.value.charAt(0) && e.charAt(1) == numberInput.value.charAt(1)) ||
       (e.charAt(0) == numberInput.value.charAt(0) && e.charAt(2) == numberInput.value.charAt(2)) ||
       (e.charAt(1) == numberInput.value.charAt(1) && e.charAt(2) == numberInput.value.charAt(2))
    ) numberGet.push(e)
  })

  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
      alert("El número es: " + numbers.value[0])
      return true
    }
  if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}

const Nada = () => {
  if(numberInput.value == "") {
    notificar2()
    return true
  }

  if(numberInput.value.length !== 3) {
notificar3()
    return true
  }

  if(!validateInput(numberInput.value)) {
    notificar4()
    return true
  }

  var numberGet = []
  numbers.value.forEach(e => {

    if(e.charAt(0) !== numberInput.value.charAt(0) && e.charAt(0) !== numberInput.value.charAt(1) && e.charAt(0) !== numberInput.value.charAt(2) &&
    e.charAt(1) !== numberInput.value.charAt(0) && e.charAt(1) !== numberInput.value.charAt(1) && e.charAt(1) !== numberInput.value.charAt(2) &&
    e.charAt(2) !== numberInput.value.charAt(0) && e.charAt(2) !== numberInput.value.charAt(1) && e.charAt(2) !== numberInput.value.charAt(2)) numberGet.push(e)
  })
  console.log(numberGet)
  numbers.value = numberGet
  if(numbers.value.length == 1) {
      alert("El número es: " + numbers.value[0])
      return true
    }
 if(!numbers.value) {
      alert("Algo ha salido mal. Colocaste un número mal, o el sistema ha fallado, por favor contactar a soporte (El negro Alejandro)")
      return true
    }
  notificar()
}



    return {
        numberInput,
        b1H,
        b2H,
        b3H,
        b1H1M,
        b2H1M,
        b1M,
        b2M,
        Nada,
        reset,
        numbers
    }
    }
  }

</script>

<template>
 <q-page class="q-pl-sm">

  <h1 v-if="numbers.length < 50">HOLIS</h1>

  <div class="col-12 col-sm-6">

    <q-input outline v-model="numberInput" mask="###" label="Ingresa un número de 3 dígitos" class="q-pl-sm q-pt-xl" style="max-width: 300px"/>
    <q-btn label="1 Herido" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="b1H"/>
    <q-btn label="2 Herido" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="b2H"/>
    <q-btn label="3 Herido" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="b3H"/>

  </div>  

  <div class="col-12 col-sm-6">

    <q-btn label="1 Herido y 1 Muerto" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="b1H1M"/>
    <q-btn label="2 Herido y 1 Muerto" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="b2H1M"/>

  </div>  

  <div class="col-12 col-sm-6">

    <q-btn label="1 Muerto" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="b1M"/>
    <q-btn label="2 Muerto" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="b2M"/>

  </div>  

    <q-btn label="Nada" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="Nada"/>

  <div class="col-12 col-sm-6">

    <q-btn label="Reiniciar" color="primary"  class="q-pl-sm q-mt-xl q-ml-sm" @click="reset"/>

  </div>  
  

</q-page>

</template>