<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Todo Apps</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-list>
                <ion-list-header>
                    <ion-label>Judul Arip</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-label>
                        <h2>Arip</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores inventore odio.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Arip</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores inventore odio.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Arip</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores inventore odio.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Arip</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores inventore odio.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Arip</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores inventore odio.</p>
                    </ion-label>
                </ion-item>
            </ion-list>
            <ion-fab slot="fixed" horizontal="end" vertical="bottom">
                <ion-fab-button color="success">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>
  
<script setup>
import { logoIonic, add } from 'ionicons/icons';

</script>
  
<style>
ion-content {
    height: 90%;
}
</style>