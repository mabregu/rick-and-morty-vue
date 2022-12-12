<template>
    <div class="filter">
        <div class="item" @click="filter('all')">
            <label for="all">All</label>
        </div>
        <div class="item" @click="filter('Alive')">
            <label for="alive">Alive</label>
        </div>
        <div class="item" @click="filter('Dead')">
            <label for="dead">Dead</label>
        </div>
        <div class="item" @click="filter('unknown')">
            <label for="unknown">Unknown</label>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();

        const filter = (status => {
            store.dispatch("filterByStatus", status);
        })

        return {
            filter
        }
    }
}
</script>

<style lang="scss">
    .filter {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        .item {
            margin: 0 0.5rem;
            input {
                display: none;
            }
            label {
                cursor: pointer;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                &:hover {
                    background-color: #f2f2f2;
                }
            }
        }
    }
</style>