<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
</script>

<Router>
  <main>
    <Route path="" component={Home} />
    <Route path="about" component={About} />
  </main>
</Router>