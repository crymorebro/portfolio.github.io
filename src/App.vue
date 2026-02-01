<script setup>
import { ref } from 'vue'

const darkMode = ref(true)

const toggleTheme = () => {
  darkMode.value = !darkMode.value
  document.body.style.backgroundColor = darkMode.value ? '#000000' : '#ffffff'
  document.body.style.color = darkMode.value ? '#ffffff' : '#000000'
  document.documentElement.classList.toggle('light')
}

const goToGithub=()=>{
  window.location.href='https://github.com/crymorebro'
}

const goToTelegram=()=>{
  window.location.href='https://t.me/crymorebro'
}


</script>

<template>
  <div class="glow-capture">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>
  <nav>
    <button @click="toggleTheme" class="theme-toggle">
      {{ darkMode ? '☀️' : '🌙' }}
    </button>
    <div class="nav-links">
      <a href="#about">About me</a>
      <a href="#projects">Projects</a>
      <a href="#contacts">Contacts</a>
      <div class="nav-githublink">
        <img class="nav-git-ico" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="">
        <a href="https://github.com/crymorebro" class="nav-git" target="blank_">Github</a>
      </div>
      </div>
    </nav>
    <div class="hero" data-aos="fade-up" id="about">
      <div class="hero-left">
        <h2>Frontend Dev From Russia</h2>
        <p>
          Crafting high-performance, responsive, and visually stunning web interfaces. Focused on Vue 3 and clean, scalable code that turns ideas into digital reality.
        </p>
        <button class="doc" @click="goToTelegram">Hire Me Now </button>
        <button class="hero-git" @click="goToGithub" style="cursor: pointer;">My Github </button>
      </div>
      <img src="https://i.pinimg.com/originals/81/a3/81/81a3814b744a05eef011eb7efd07b153.gif" class="right-img" alt="">
    </div>
    <div class="projects" id="projects">
      <div class="project-top">
        <h2>My Projects</h2>
        <p>A collection of my recent works where design meets functional code.</p>
      </div>
      <div class="project-calc" data-aos="fade-left" data-aos-delay="200">
        <h3>Benchpress Calculator</h3>
        <p>Analyze and track your lifting performance with precise strength formulas.</p>
        <a href="https://crymorebro.github.io/GYMlezha.github.io/" target="_blank" class="project-link">Link</a>
      </div>
      <div class="project-portf" data-aos="fade-left" data-aos-delay="200">
        <h3>My Porfolio</h3>
        <p>My digital identity built with Vue 3, featuring glassmorphism and smooth motion.</p>
        <a href="#" target="_blank" class="project-link">Link</a>
      </div>
      <div class="project-soon" data-aos="fade-left" data-aos-delay="200">
        <h3>Upcoming...</h3>
        <p>Exploring new technologies and expnding my stack</p>
      </div>
    </div>
    <div class="contacts" id="contacts">
    <div class="contacts-container">
      <div class="contacts-header" >
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello</p>
      </div>
      <div class="contacts-content" data-aos="zoom-in">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Email</h3>
              <p>fallendreamin@email.com</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Location</h3>
              <p>Russia</p>
            </div>
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.5 2.5L2.5 9.5L9.5 13.5L13.5 21.5L21.5 2.5Z"></path>
              <path d="M9.5 13.5L21.5 2.5"></path>
              <path d="M9.5 13.5L13.5 21.5"></path>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Telegram</h3>
              <p>@crymorebro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
