import { onMounted, ref } from 'vue'
import { getDocs, deleteDoc, doc } from 'firebase/firestore'
import { dbPizzasRef } from '../firebase'

export default function usePizzas() {
  const allPizzas = ref([])

  async function getPizzas() {
    allPizzas.value = []
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
  async function deletePizza(id) {
    const pizza = doc(dbPizzasRef, id)
    await deleteDoc(pizza)
    getPizzas()
  }
  return {
    allPizzas,
    deletePizza,
  }
}
