<!-- src/views/HelpView.vue -->
<template>
  <div class="help-container">
    <h1 class="title">About This App</h1>

    <section class="section">
      <h2>🍳 Why I Built This</h2>
      <p>
        I often found myself standing in front of my fridge, wondering what I
        could cook with the random ingredients I had. This web app was created
        to solve that problem — helping people quickly discover recipe ideas
        based on what they already have at home.
      </p>
    </section>

    <section class="section">
      <h2>🌏 For Whom?</h2>
      <p>
        This app is built for busy students, home cooks, or anyone looking to
        make the most of their pantry. It's especially designed with Singaporean
        and Malaysian kitchens in mind, featuring local ingredients and flavors.
      </p>
    </section>

    <section class="section">
      <h2>🔍 Features</h2>
      <ul>
        <li>Select ingredients and get recipe ideas instantly via YouTube.</li>
        <li>Supports both English and Chinese languages.</li>
        <li>Suggests nearby restaurants if you prefer eating out.</li>
        <li>Dark mode support for late-night chefs!</li>
      </ul>
    </section>

    <section class="section">
      <h2>🤝 Open Source & Feedback</h2>
      <p>
        This is an open-source project. Feel free to contribute or suggest
        improvements. Your feedback is always welcome!
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
// No logic needed for now
</script>

<style scoped>
.help-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem 2rem;
}
.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.section {
  margin-bottom: 2rem;
}
.section h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
}
.section p,
.section ul {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}
.section ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}
</style>
