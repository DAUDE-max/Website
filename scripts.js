function CopyToClipboard(text, targetEl, inverted = false) {
  if (!navigator.clipboard) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  } else {
    navigator.clipboard.writeText(text);
  }

  showCopiedTooltip(targetEl, inverted);
}

function showCopiedTooltip(target, inverted = false) {
  console.log("inverted:", inverted); // <== check!

  if (!target) return;

  const existingTooltip = document.querySelector(".copied-bubble");
    if (existingTooltip) existingTooltip.remove();

  const tooltip = document.createElement("div");
  tooltip.classList.add("copied-bubble");
  if (inverted) {
    tooltip.classList.add("inverted");
  }
  tooltip.textContent = "Kopiert!";

  document.body.appendChild(tooltip);

  const rect = target.getBoundingClientRect();
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  tooltip.style.left = `${rect.left + rect.width / 2}px`;
  tooltip.style.top = `${scrollY + rect.top - 30}px`;
  tooltip.style.transform = "translateX(-50%)";  // <--- richtiges Anführungszeichen!

  requestAnimationFrame(() => tooltip.classList.add("visible"));

  setTimeout(() => {
    tooltip.remove();
  }, 1500);
}