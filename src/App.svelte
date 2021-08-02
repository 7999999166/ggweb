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
    import Login from './Pages/Login.svelte';
    import Save from './Pages/Save.svelte';

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

<Route path="/login">
   <Login></Login>     
</Route>

<Route path="/register">
   <Save></Save>     
</Route>

