<script>

  import { useQuasar, QSpinnerGears } from 'quasar'
  import { onMounted, ref, watch } from 'vue'
  import TableVue from '../components/TableVue.vue'
  
  export default {
    setup() {

        const personas = ref([])

        const $q = useQuasar();
        const no = ref(false);
        const accept = ref(false);
        const apodos = ref(null);
        const nombres = ref(null);
        const opciones = ref(["Andrea", "Katherene", "Jeremy"]);
        const formu = () => {
            console.log("lol--------------", $q);
            console.log("NOMBRES ----------", nombres.value);
            console.log("APODOS ----------", apodos.value);
            if (!no.value) {
                console.log("PRONDO ---------------------");
                $q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "Rellena los campos"
                });
            }
            else if (!accept.value) {
                console.log("PRONDO ---------------------");
                $q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "Acepta los terminos"
                });
            }
            else {
                $q.notify({
                    spinner: QSpinnerGears,
                    message: "Working...",
                    timeout: 2000
                });
                setTimeout(function lol() {
                    $q.notify({
                        color: "green-10",
                        textColor: "white",
                        icon: "print",
                        message: "Realizado con éxito"
                    });
                }, 3000);

                fetch('https://quasarajrm.herokuapp.com/graphql', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        query: `
                            mutation {
                                createTask(nombre: "${nombres.value}", apodo: "${apodos.value}") {
                                    nombre
                                    apodo
                                }
                            }
                        `
                    })
                }).then(res => res.json()).then(data => {
                    console.log("DATITAAA", data.data)
                    console.log(personas.value)
                    montar()
                })

                reset()
            }
        };
        const reset = () => {
            apodos.value = null;
            nombres.value = null;
            accept.value = false;
        };
        watch(apodos, () => {
            (!apodos.value || !nombres.value) ? no.value = false : no.value = true;
        });
        watch(nombres, () => {
            (!apodos.value || !nombres.value) ? no.value = false : no.value = true;
        });

        onMounted(() => {
            montar()
        })

        function montar() {
            fetch('https://quasarajrm.herokuapp.com/graphql', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        query: `
                            query{
                                getAllTask {
                                    nombre
                                    apodo
                                }
                            }
                        `
                    })
                }).then(res => res.json()).then(data => {
                    console.log("DATITAAA", data.data.getAllTask)
                    personas.value = data.data.getAllTask
                    console.log(personas.value)
                })

            
        }
        return {
            personas,
            nombres,
            accept,
            apodos,
            opciones,
            formu,
            reset
        };
    },
    components: { TableVue }
}
  
  
  
  </script>
  
  <template>
      <q-page class="q-pl-sm">

        <h4>Hacer amikos :></h4>
        <pre>{{apodos}} - {{nombres}} - {{accept}}</pre>
        <q-form class="row q-col-gutter-md" @submit.prevent="formu" @reset="reset">

          <div class="col-12 col-sm-6">

            <q-input 
            outlined 
            label="Apodo" 
            v-model="apodos" 
            />

          </div>

          <div class="col-12 col-sm-6">

            <q-select 
            outlined v-model="nombres" 
            :options="opciones" 
            label="Outlined"  
            transition-show="flip-up" 
            transition-hide="flip-down"        
            :rules="[ val => val && val.length > 0 || 'Please type something']"/>            

          </div>
          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div class="col-12">

            <q-btn label="Submit" icon="check_box" color="primary" :push="true" type="submit"/>
            <q-btn class="q-ml-md" icon="cached" label="Reset" color="red" :push="true" type="reset"/>
            
          </div>
          

        </q-form>

        <TableVue :personas="personas"/>

      </q-page>
      
  </template>