function nextScreen(n) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`screen${i}`).classList.add("hidden");
  }
  document.getElementById(`screen${n}`).classList.remove("hidden");
}
