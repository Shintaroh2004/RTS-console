<script lang="ts">
    import { onMount } from "svelte";
    import { invoke } from "@tauri-apps/api";
    import { navigate } from "svelte-routing";

    let msg:string;

    function toPage(path:string){
        navigate(path,{replace:true});
    }

    onMount(async ()=>{
        msg=await invoke("greet",{name:"Home"});
    });

</script>

<main>
    <h1>{msg}</h1>
    <button on:click={()=>toPage("/about")}>
        <h3>To About</h3>
    </button>
</main>