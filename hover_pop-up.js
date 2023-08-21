const tooltipTrigger = document.querySelector('.tooltip-trigger');
const tooltip = document.querySelector('.tooltip');
const fullText = tooltipTrigger.textContent;
const shortText = fullText.substring(0, 25);

tooltipTrigger.textContent = shortText + '...';
tooltipTrigger.addEventListener('mouseover', () => {

  tooltip.textContent = fullText;
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';
  
  tooltip.addEventListener('mouseout', () => {
  
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  });
});