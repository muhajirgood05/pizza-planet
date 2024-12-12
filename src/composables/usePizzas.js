import { onMounted, ref } from 'vue'
import { getDocs, deleteDoc, doc } from 'firebase/firestore'
import { dbPizzasRef } from '../firebase'

export default function usePizzas() {
  const allPizzas = ref([])
  const message = ref('')

  async function getPizzas() {
    try {
      message.value = ''
      allPizzas.value = []

      const docs = await getDocs(dbPizzasRef)

      docs.forEach(function (doc) {
        // Tambahkan data pizza ke array allPizzas
        const pizza = {
          id: doc.id, // ID dokumen
          ...doc.data(),
        }
        allPizzas.value.push(pizza)
      })
    } catch (error) {
      message.value = 'There was an error fetching pizzas, plaese reload the page'
    }
  }

  onMounted(getPizzas)

  async function deletePizza(id) {
    try {
      message.value = ''
      const pizza = doc(dbPizzasRef, id)
      await deleteDoc(pizza)
      getPizzas()
    } catch (error) {
      message.value = 'There was an error deleteing the pizza, plaease try again!'
    }
  }
  return {
    allPizzas,
    deletePizza,
    message,
  }
}
