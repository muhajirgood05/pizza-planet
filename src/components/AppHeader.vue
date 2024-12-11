<template>
  <header>
    <h1 class="site_title">
      <RouterLink t:to="{ name : 'home'}">~ Pizza Planet ~</RouterLink>
    </h1>
    <nav>
      <RouterLink class="link" :to="{ name: 'home' }"> Home</RouterLink>
      <RouterLink class="link" :to="{ name: 'menuLink' }"> Menu</RouterLink>
      <RouterLink class="link" :to="{ name: 'adminLink' }"> Admin</RouterLink>
      <RouterLink class="link" :to="{ name: 'aboutLink' }"> About</RouterLink>
    </nav>
    <h2>The No. 1 Place For Eating Pizza</h2>
  </header>
</template>

<style scoped>
.site_title {
  font-size: 3.6rem;
  color: aliceblue;
  transform: rotate(-8deg);
  margin-bottom: 2rem;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  color: aliceblue;
  background: url('../assets/images/main-bg.jpg') no-repeat;
  height: 650px;
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 3px rgb(20, 20, 20);
}

h2 {
  margin: 2rem 0;
  color: antiquewhite;
  font-size: 2rem;
}
</style>
