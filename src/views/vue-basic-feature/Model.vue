<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Model</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Model</ion-title>
                </ion-toolbar>
            </ion-header>
            <div class="padding">
                <p>{{ name }}</p>
                <p>{{ address }}</p>
                <ion-input label="Nama" v-model="name" label-placement="floating" fill="solid"
                    placeholder="Masukan Nama"></ion-input>
                <br>
                <ion-input label="Nama" v-model="name" label-placement="floating" fill="solid"
                    placeholder="Masukan Nama"></ion-input>
                <br>
                <ion-input label="Alamat" v-model="address" label-placement="floating" fill="solid"
                    placeholder="Masukan Alamat"></ion-input>
            </div>
            <!-- <form action="">
        </form> -->
        </ion-content>
    </ion-page>
</template>
  
<script setup>
import { ref, onMounted, onActivated, onUpdated, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

const router = useRouter()

const name = ref('')
const address = ref()

const back = () => {
    router.back()
}

</script>
  
<style>
.padding {
    padding: 10px 5px;
}</style>