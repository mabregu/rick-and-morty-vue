<template>
    <div class="character">
        <div class="character__info">
            <img :src="character.image" :alt="character.name" />
            <h2>{{ character.name }}</h2>
            <p>{{ character.species }}</p>
            <p>{{ character.status }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    }
}

</script>