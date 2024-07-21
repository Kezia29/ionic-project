import { ref } from "vue";
import { useStorage } from '@vueuse/core'

type Contact = {
  id?: any,
  name?: string
  phone?: string
  email?: string
  address?: string
  gender?: number
  isFav?: boolean
}

export const data = useStorage<Contact[]>('app-contacts', [])

// export const_data = ref<Contact[]>([
// {
//   name: 'Arif',
//   phone: '081234567',
//   email: 'arif@ganteng.com',
//   address: '',
//   gender: 1,
//   isFav: true,
// }
// ])