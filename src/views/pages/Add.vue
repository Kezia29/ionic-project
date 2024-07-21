<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Input Contact</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Input Data Contact</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-input label="Nama" v-model="name" label-placement="floating" fill="solid"
                            placeholder="Masukan Nama"></ion-input>
                        <ion-input label="Email" v-model="email" label-placement="floating" fill="solid"
                            placeholder="Masukan Email"></ion-input>
                        <ion-input label="Telephone" v-model="phone" label-placement="floating" fill="solid"
                            placeholder="Masukan Telephone"></ion-input>
                        <ion-radio-group v-model="gender">
                            <ion-item fill="solid">
                                <ion-radio :value="1" justify="start" label-placement="end">Laki-laki</ion-radio>
                            </ion-item>
                            <ion-item fill="solid">
                                <ion-radio :value="2" justify="start" label-placement="end">Perempuan</ion-radio>
                            </ion-item>
                        </ion-radio-group>
                        <ion-select label="Tipe" v-model="isFav" placeholder="Tipe Kontak" fill="solid">
                            <ion-select-option value="false">Biasa</ion-select-option>
                            <ion-select-option value="true">Favorite</ion-select-option>
                        </ion-select>
                        <ion-textarea label="Alamat" v-model="address" label-placement="floating" fill="solid"
                            placeholder="Masukan Alamat"></ion-textarea>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>
        <ion-footer>
            <ion-button @click="simpan" expand="block">
                <ion-icon slot="start" :icon="save"></ion-icon>
                Simpan
            </ion-button>
        </ion-footer>
    </ion-page>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { data } from "../../services/contacts";
import { useRouter, useRoute } from "vue-router";
import { arrowBackOutline, save } from "ionicons/icons";

const isEdit = ref(false);
const id = ref();
const name = ref("");
const email = ref("");
const address = ref("");
const phone = ref("");
const gender = ref(1);
const isFav = ref(false);

const router = useRouter();
const route = useRoute();

onMounted(() => {
    const _id = route.params?.id;
    if (_id) {
        const val = data.value.find((item) => item.id === _id);
        console.log("data yang di edit", val);
        isEdit.value = true;
        id.value = val.id;
        name.value = val.name;
        email.value = val.email;
        address.value = val.address;
        phone.value = val.phone;
        gender.value = val.gender;
        isFav.value = val.isFav;
    }
});

const back = () => {
    router.back();
};

const simpan = () => {
    if (isEdit.value) {
        // perintah edit
        const contact = {
            id: id.value,
            name: name.value,
            email: email.value,
            address: address.value,
            phone: phone.value,
            gender: gender.value,
            isFav: isFav.value,
        };
        const index = data.value.findIndex((item) => item.id === contact.id);
        data.value[index] = contact;
    } else {
        // perintah add
        const contact = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            address: address.value,
            phone: phone.value,
            gender: gender.value,
            isFav: isFav.value,
        };
        data.value.push(contact);
    }
    router.back();
};
</script>
  
<style></style>