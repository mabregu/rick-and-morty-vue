<template>
    <section>
        <div class="characters">
            <CardCharacter v-for="character in characters" :key="character.id" :character="character" />
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

<style lang="scss">    
    .characters {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1rem;
        padding: 1rem;
    }
</style>