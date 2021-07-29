<script>
    import {Route} from 'tinro'; 
    import './w3.css';
    import './bootstrap.min.css';
    import './bootstrap.bundle.min.js';
    import Home from './Pages/Home.svelte';
    import Header from './Components/Header.svelte';
    import Space from './Components/Space.svelte';
    import About from './Pages/About.svelte';
    import Mproducts from './Pages/Mproducts.svelte';
</script>
<style>

</style>
<Header></Header>
<Space></Space>


<Route path="/about"><About></About></Route>
<Route path="/"><Home></Home></Route>

<Route path="/products">
 <Mproducts></Mproducts>  
</Route>

<Route path="/portfolio/*">
        <Route path="/"><h1>Portfolio introduction</h1><nav> <a href="/portfolio/sites">Sites</a><a href="/portfolio/photos">Photos</a></nav></Route>                                                    
        <Route path="/sites"><h1>Portfolio: Sites</h1></Route>
        <Route path="/photos"><h1>Portfolio: Photos</h1></Route>
</Route>