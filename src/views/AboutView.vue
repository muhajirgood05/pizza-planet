<template>
  <div class="about">
    <section class="intro">
      <div class="info_text_wrappper">
        <h3>Quality Pizza For 30 years</h3>
        <p class="info_text">
          Nothing but the best quality ingredients, with a friendly atmosphere.
        </p>
      </div>
      <img class="info_img" src="../assets/images/calzone.jpg" alt="calzone tipe" />
    </section>
    <section class="more_info_wrapper">
      <h3>Clik on the links below for more info</h3>
      <nav>
        <ul>
          <RouterLink class="link" :to="{ name: 'historyLink' }"> Our History </RouterLink>
          <RouterLink class="link" :to="{ name: 'deliveryLink' }"> Delivery </RouterLink>
          <RouterLink class="link" :to="{ name: 'locationsLink' }"> Locations </RouterLink>
        </ul>
      </nav>
      <RouterView />
    </section>
  </div>
</template>
