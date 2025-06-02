<template>
  <div class="container my-4">
    <div class="col">
      <div class="ah-breadcrumb-container">
        <NuxtLink to="/">Home</NuxtLink> > About
      </div>
      <main class="text-left mt-4">
        <p class="mt-5">ahStore is a sample project built to test and showcase how apihero works.</p>
        <h1 class="my-4 text-indigo-500">&lt;apihero&gt;</h1>
        <p>apihero is a free and easy-to-use REST service designed to simplify API integration and testing for developers. Whether you're building web apps or mobile apps, apihero provides ready-to-use endpoints for you to test your front-end code or just to support your learning process.</p>
        <p>Built with simplicity and speed in mind, apihero offers a reliable playground for experimenting with HTTP requests or validating front-end functionality. It's an ideal tool for prototyping, teaching, and exploring RESTful principles.</p>
        <h5 class="mt-5">Why apihero?</h5>
        <ul class="ms-2 mt-3 mb-5">
          <li class="ms-2 my-2"><strong>Free & Fast</strong> - Instantly access public REST endpoints without registration or setup.</li>
          <li class="ms-2 my-2"><strong>Comprehensive Documentation</strong> - Easy-to-follow guides to get you up and running quickly.</li>
          <li class="ms-2 my-2"><strong>Developer-Friendly</strong> - Designed with developers in mind, offering predictable, lightweight, and useful responses.</li>
          <li class="ms-2 my-2"><strong>Great for Testing</strong> - Use it for testing HTTP clients, demo projects, or during learning exercises.</li>
        </ul>
        <p>Whether you're a beginner learning the ropes or a professional needing a quick mock backend, apihero is your go-to tool for hassle-free REST interactions.</p>
      </main>
    </div>
  </div>
</template>
<script setup>
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}nuxt store sample`,
  });
</script>
