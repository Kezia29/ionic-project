export type TCart = {
    no: string
    name: string
    desc: string
    stuffs: Array<any>
}

import { useStorage } from '@vueuse/core'

export const cart = useStorage<TCart>('cart-data', {
    no: '',
    name: '',
    desc: '',
    stuffs: [],
})