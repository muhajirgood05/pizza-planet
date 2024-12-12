import { onMounted, ref } from 'vue'
import { query, orderBy, getDocs } from 'firebase/firestore'
import { dbOrdersRef } from '@/firebase'

export default function useOrders() {
  const allOrders = ref([])

  async function getOrders() {
    try {
      const queryData = query(dbOrdersRef, orderBy('createdAt'))
      const docs = await getDocs(queryData)

      docs.forEach(function (doc) {
        const order = {
          id: doc.id, // ID dokumen
          ...doc.data(),
        }
        allOrders.value.push(order)
      })
      console.log(allOrders.value)
    } catch (error) {}
  }
  onMounted(getOrders)
  return { allOrders }
}
