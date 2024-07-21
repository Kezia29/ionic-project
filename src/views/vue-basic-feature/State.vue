<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>State</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">State</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-label>
                <h2>{{ nama }}</h2>
            </ion-label>
            <ion-button @click="gantiNama" expand="block" fill="solid">
                Ganti Nama
            </ion-button>
            <br />
            <br />
            <br />
            <ion-label>
                <h2>{{ alamat }}</h2>
            </ion-label>
            <ion-button @click="gantiAlamat" expand="block" fill="solid">
                Ganti Alamat
            </ion-button>
        </ion-content>
    </ion-page>
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

const router = useRouter()

const back = () => {
    router.back()
}

// Variable biasa : tidak akan update tampilan ketika nilainya di rubah
let nama = 'bambang'

// merubah nilai nama
const gantiNama = () => {
    console.log(nama)
    nama = 'sutini'
    console.log(nama)
}

// Variable dengan ref: akan update tampilan ketika nilainya di rubah
const alamat = ref('Madiun')

// merubah nilai alamat
const gantiAlamat = () => {
    alamat.value = 'Ponorogo'
}
</script>
  
<style></style>
  