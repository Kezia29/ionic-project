<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Transaksi</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="toggleCamera">
                        <ion-icon slot="icon-only" :icon="cameraOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Transaksi</ion-title>
                </ion-toolbar>
            </ion-header>
            <div class="camera" v-if="isCameraOn">
                <qrcode-stream @detect="onDetect" :formats="['qr_code', 'code_128', 'upc_a', 'ean_13']">
                </qrcode-stream>
            </div>
            <ion-card>
                <ion-card-content>
                    <ion-input label="Nama Pelanggan" label-placement="floating" fill="solid"
                        placeholder="Nama Pelanggan"></ion-input>
                    <ion-input label="Keterangan" label-placement="floating" fill="solid"
                        placeholder="Masukan Keterangan"></ion-input>
                </ion-card-content>
            </ion-card>
            <ion-list>
                <ion-card v-for="(item, index) in cart.stuffs">
                    <ion-card-header>
                        <ion-card-title>{{ item?.name }}</ion-card-title>
                        <ion-card-subtitle>{{ item?.price }}</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        {{ item?.desc }}
                    </ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col style="text-align: right;">
                                <ion-button @click="addItem(index)" fill="clear">
                                    <ion-icon slot="icon-only" :icon="add"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col>
                                <ion-input v-model="item.count" label="Solid input" label-placement="floating" fill="solid"
                                    placeholder="Enter text"></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-button @click="removeItem(index)" fill="clear">
                                    <ion-icon slot="icon-only" :icon="remove"></ion-icon>
                                </ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card>
            </ion-list>
        </ion-content>
        <ion-footer>
            <ion-button color="danger" expand="block" fill="solid" shape="round">
                Simpan
            </ion-button>
        </ion-footer>
    </ion-page>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline, save, cameraOutline, add, remove } from "ionicons/icons";
import { cart } from "../../services/cart";
import { stuff } from "../../services/stuff";

import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

const isCameraon = ref<boolean>(false)

const onDetect = (res: any = '') => {
    const kode = res[0].rawValue
    const barang = stuff.value.find(val => kode == val?.id)
    if (barang) {
        cart.value.stuffs?.push({
            id: barang.id,
            name: barang.name,
            price: barang.price,
            count: 1,
            unit: barang.unit,
        })
    }
}

const addItem = (index: number) => {
    cart.value.stuffs[index].count = cart.value.stuffs[index].count + 1
}

const removeItem = (index: number) => {
    cart.value.stuffs[index].count = cart.value.stuffs[index].count - 1
    if (cart.value.stuffs[index].count <= 0) {
        cart.value.stuffs.splice(index, 1);
    }
}

const router = useRouter()

const back = () => {
    router.back()
}

const toggleCamera = () => {
    isCameraOn.value = !isCameraOn.value
}

function paintBoundingBox(detectedCodes: any, ctx: any) {
    for (const detectedCode of detectedCodes) {
        const {
            boundingBox: { x, y, width, height }
        } = detectedCode
        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
    }
}
</script>