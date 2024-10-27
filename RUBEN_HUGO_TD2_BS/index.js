document.addEventListener("DOMContentLoaded", () => {
  const setStyle = (el, styles) => Object.assign(el.style, styles);


  const heroText = document.querySelector(".hero h1");
  setStyle(heroText, { opacity: 0, transform: "translateY(-20px)", transition: "opacity 1.5s, transform 1.5s" });
  setTimeout(() => setStyle(heroText, { opacity: 1, transform: "translateY(0)" }), 500);


  document.querySelectorAll(".carousel-inner img").forEach(img => {
    setStyle(img, { transition: "transform 0.5s" });
    img.addEventListener("mouseover", () => img.style.transform = "scale(1.1)");
    img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
  });


  const observer = new IntersectionObserver(entries =>
    entries.forEach(e => e.isIntersecting && (setStyle(e.target, { opacity: 1, transform: "translateY(0)" }), observer.unobserve(e.target)))
  , { threshold: 0.1 });

  document.querySelectorAll("section").forEach(section => {
    setStyle(section, { opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s, transform 0.8s" });
    observer.observe(section);
  });
});

