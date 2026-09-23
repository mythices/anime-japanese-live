const words = [
  {kana:'あした',romaji:'ashita',meaning:'Tomorrow',note:'A little word for what comes next.'},
  {kana:'また',romaji:'mata',meaning:'Again · see you',note:'Here, it adds the idea of meeting again.'},
  {kana:'あおう',romaji:'aou',meaning:'Let’s meet',note:'Together: “Let’s meet again tomorrow.”'}
];
document.querySelectorAll('.demo-word').forEach(button => {
  button.addEventListener('click', () => {
    const word = words[Number(button.dataset.word)];
    document.querySelectorAll('.demo-word').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    for (const key of ['kana','romaji','meaning','note']) document.getElementById('demo-' + key).textContent = word[key];
  });
});
