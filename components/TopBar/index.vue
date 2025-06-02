<template>
  <section id="ah-topbar">
    <div class="container">
      <div class="row">
        <div class="col">
          <nav>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/mftaskin/" target="_blank"><BaseIcon :icon-data="linkedinIcon" /></a>
                <a href="https://github.com/quixtools" target="_blank"><BaseIcon :icon-data="githubIcon" /></a>
              </li>
              <li class="mobile-hidden"><NuxtLink to="/">Customer Service</NuxtLink></li>
              <li class="mobile-hidden"><NuxtLink to="/support">Support</NuxtLink></li>
              <li class="mobile-hidden"><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import linkedinIcon from '~/assets/svg/linkedin.svg';
import githubIcon from '~/assets/svg/github.svg';
</script>
