<template>
<q-layout view="lHh Lpr lff" >
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item clickable v-ripple to="/form" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="style" />
              </q-item-section>

              <q-item-section>
                Form
              </q-item-section>
            </q-item>

             <q-item clickable v-ripple to="/row" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Row
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/about" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                About
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/" active-class="my-menu-link" exact>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/game" active-class="my-menu-link" exact>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                NumberGame
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../../public/VUE.jpg">
            </q-avatar>
            <div class="text-weight-bold">Alejandro Rojas</div>
            <div>Orinoco.io</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const drawer = ref(false)
    const lol = 15

    return {
     drawer
    }
  }
}
</script>

<style lang="scss">
  .my-menu-link{ 
    color: white;
    background: #173590}
   
  </style>