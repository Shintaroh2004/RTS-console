<script lang="ts">
    import { onMount } from "svelte";
    import { invoke } from "@tauri-apps/api";
    import { navigate } from "svelte-routing";

    let msg:string;

    function toPage(path:string){
        navigate(path,{replace:true});
    }

    onMount(async ()=>{
        msg=await invoke("greet",{name:"About"});
    });

</script>

<main>
    <h1>{msg}</h1>
    <button on:click={()=>toPage("/")}>
        <h3>To Home</h3>
    </button>
</main>