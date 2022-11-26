<template>
  <section>
    <nav>
      <ul>
        <li class="home">
          <router-link to="/">
            <span class="label">Резултати</span>
            <img
              src="@/images/svgs/results-icon.svg"
              alt="Класиране"
              height="28"
              width="28"
            />
          </router-link>
        </li>
        <li class="home">
          <router-link to="/rankings">
            <span class="label">Класиране</span>
            <img
              src="@/images/svgs/rankings-icon.svg"
              alt="Класиране"
              height="28"
              width="28"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  position: fixed;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  z-index: 999;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
nav ul {
  display: flex;
  list-style: none;
  background: var(--color-dark);
  padding: 15px 15px 7px;
  border-radius: 9px;

}
li {
  margin-right: 14px;
}
li:last-child {
  margin-right: 0;
}
a {
  text-decoration: none;
}
.label {
  display: none;
}
</style>
