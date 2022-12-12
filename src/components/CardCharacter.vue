<template>
    <div class="character">
        <div class="character__info">
            <img :src="character.image" :alt="character.name" />
            <h3>{{ character.name }}</h3>
            <div class="status">
                <span
                    :class="{
                        'alive': character.status === 'Alive',
                        'dead': character.status === 'Dead',
                        'unknown': character.status === 'unknown'
                    }"
                ></span>
                <span>
                    {{ character.species }} - {{ character.status }}
                </span>
            </div>
            <div class="origin">
                <span>Origin:</span>
                <span>{{ character.origin.name }}</span>
            </div>
            <div class="location">
                <span>Location:</span>
                <span>{{ character.location.name }}</span>
            </div>
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

<style lang="scss">
    .character {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.05);
            h3 {
                color: #333;
            }
        }
        span {
            font-size: 0.8rem;
        }
        h3 {
            font-size: 1.2rem;
            font-weight: 500;
            color: #999;
            margin: 0.5rem 0;
        }
        &__info {
            padding: 1rem;
            .status {
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;
                span {
                    color: #333;
                    &:first-child {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        margin-right: 0.5rem;
                    }
                }
                .alive {
                    background-color: #00ff00;
                }
                .dead {
                    background-color: #ff0000;
                }
                .unknown {
                    background-color: #999;
                }
            }
            .origin,
            .location {
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;
                span {
                    margin-left: 0.5rem;
                }
            }
        }
    }
</style>