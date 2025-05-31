const rtpPorJogo = {
  "medusa": 96.50,
  "mahjong": 96.92,
  "lucky-neko": 96.73
};

document.getElementById("jogo").addEventListener("change", function() {
  const jogoSelecionado = this.value;
  const rtp = rtpPorJogo[jogoSelecionado];
  document.getElementById("resultado").textContent = `RTP deste jogo: ${rtp}%`;
});
