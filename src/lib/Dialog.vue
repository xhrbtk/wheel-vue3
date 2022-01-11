<template>
    <div class="dialog-wrapper">
        <header>
            标题
        </header>
        <main>
            <p>lin1</p>
            <p>line2</p>
        </main>
        <footer>
            <Button>cancel</Button>
            <Button>ok</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default{
    components: {
        Button
    }

}
</script>