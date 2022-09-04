<script>

const columns = [
    {
    name: "nombre",
    label: "Nombre",
    align: "left",
    field: "nombre",
    sortable: true
    },
    {
    name: "apodo",
    label: "Apodo",
    align: "left",
    field: "apodo",
    sortable: true
    }
]

const rows = [ 
    {
        nombre:"Alejandro",
        apodo:"negro"
    }
]

import setup from "debug/src/common";
export default {

    props: {
        personas: Array
    },

    setup() {
        return {
            columns,
            rows
        }
    }
}

</script>

<template>

    <q-table class="q-mt-lg" 
        title="Amikos"
        no-data-label="No hay amikos :<"
        :columns="columns"
        :rows="personas"
    />

</template>