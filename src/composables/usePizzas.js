import { onMounted, ref } from 'vue'
import { getDocs } from 'firebase/firestore'
import { dbPizzasRef } from '../firebase'

export default function usePizzas() {
  const allPizzas = ref([])

  async function getPizzas() {
    const docs = await getDocs(dbPizzasRef)

    // Iterasi melalui docChanges

    docs.docChanges().forEach((change) => {
      if (change.type === 'added') {
        // Tambahkan data pizza ke array allPizzas

        allPizzas.value.push({
          id: change.doc.id, // ID dokumen
          ...change.doc.data(), // Data pizza
        })
      }
    })
  }

  onMounted(getPizzas)
  return {
    allPizzas,
  }
}
