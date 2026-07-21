document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".faq_item");
  items.forEach((item) => {
    const btn = item.querySelector(".quastion_btn");
    const box = item.querySelector(".answer_box");

    btn.addEventListener("click", function () {
      const isOpen = item.classList.contains("active");

      if (isOpen) {
        box.style.height = box.scrollHeight + "px";
        requestAnimationFrame(() => {
          box.style.height = "0px";
        });
        item.classList.remove("active");
      } else {
        item.classList.add("active");
        box.style.height = box.scrollHeight + "px";
        box.addEventListener("transitionend", function handler() {
          box.style.height = "auto";
          box.removeEventListener("transitionend", handler);
        });
      }
    });
  });
});

// 시술과정- 상세보기 토글
document.addEventListener("DOMContentLoaded", function () {
  const processItems = document.querySelectorAll(
    ".treatment-process li:not(.process-icon)"
  );
  const descItems = document.querySelectorAll(
    ".intro_description p"
  );
  const imageItems = document.querySelectorAll(
    ".intro_image p"
  );

  processItems.forEach((item, index) => {
    item.addEventListener("click", function () {

      // li active 제거
      processItems.forEach(li => {
        li.classList.remove("active");
      });

      // 현재 li active
      item.classList.add("active");

      // 설명 초기화
      descItems.forEach(p => {
        p.classList.remove("active");
      });

      // 이미지 초기화
      imageItems.forEach(img => {
        img.classList.remove("active");
      });

      // 해당 설명 표시
      if (descItems[index]) {
        descItems[index].classList.add("active");
      }

      // 해당 이미지 표시
      if (imageItems[index]) {
        imageItems[index].classList.add("active");
      }
    });
  });
});


// 최초 섹션 로딩 효과
document.addEventListener("DOMContentLoaded", () => {

    const targets = document.querySelectorAll(".section_load");

    if (!targets.length) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                // 한 번만 실행 (재등장 방지)
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15,       // 15% 보이면 실행
        rootMargin: "0px 0px -10% 0px" // 살짝 일찍 등장
    });

    targets.forEach(el => observer.observe(el));

});