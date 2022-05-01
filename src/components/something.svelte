<script lang="coffee">
    count = 0
</script>

<section style="margin-bottom: 1rem;">
    <h1>Current Count: {count}</h1>
    <button on:click={() => ++count}>
        Click Me
    </button>
</section>