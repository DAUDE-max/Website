// script.js (regular script)
function CopyToClipboard(text, targetEl) {
  if (!navigator.clipboard) {
    // Fallback for browsers without Clipboard API
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  } else {
    navigator.clipboard.writeText(text);
  }

  showCopiedTooltip(targetEl);
}

function showCopiedTooltip(target) {
  if (!target) return;

  const tooltip = document.createElement("div");
  tooltip.className = "copied-bubble";
  tooltip.textContent = "Kopiert!";

  document.body.appendChild(tooltip);

  const rect = target.getBoundingClientRect();
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  tooltip.style.left = `${rect.left + rect.width / 2}px`;
  tooltip.style.top = `${scrollY + rect.top - 30}px`;
  tooltip.style.transform = "translateX(-50%)";

  requestAnimationFrame(() => tooltip.classList.add("visible"));

  setTimeout(() => {
    tooltip.remove();
  }, 1500);
}
