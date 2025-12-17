<script>
function copyText(el) {
  const text = el.innerText;
  navigator.clipboard.writeText(text);
  alert("Nomor berhasil disalin");
}
</script>
