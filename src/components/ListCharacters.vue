<template>
    <section>
        <div class="characters">
            <div class="characters__item">
                <CardCharacter v-for="character in characters" :key="character.id" :character="character" />
            </div>
        </div>
    </section>
</template>

<script>

import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import CardCharacter from './CardCharacter.vue'

export default {
    components: {
        CardCharacter
    },
    setup() {
        const store = useStore()
        const characters = computed(() => store.state.charactersFiltered)

        onMounted(() => {
            store.dispatch('getCharacters')
        })

        return {
            characters
        }
    }
}

</script>