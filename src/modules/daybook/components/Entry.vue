<template>
    <div class="mb-3 pointer p-2 entry-container entry" @click="$router.push({name: 'entry', params: {id: 10}})">
        <div class="entry-title d-flex">
            <span class="entry-title__day">15</span>
            <span class="entry-title__month mx-1">Julio</span>
            <span class="entry-title__year mx-4">2023, Lunes</span>
        </div>
        <div class="entry-description">
            Irure Lorem eu occaecat incididunt cupidatat pariatur nisi. Non labore aute tempor anim excepteur irure incididunt. Esse non ad excepteur voluptate veniam cupidatat anim nostrud. Nisi veniam laboris nulla ad laboris nostrud sit qui pariatur aliqua. Veniam officia velit sit dolor labore ad. Magna quis mollit ipsum commodo mollit et adipisicing est ut sint.
        </div>
    </div>
</template>

<script>
export default {
    methods: {

    }
}
</script>