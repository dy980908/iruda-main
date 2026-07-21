document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("bgVideo");
    if (!video) return;

    const section = document.querySelector(".section01");

    // ===== 1. 기본 세팅 =====
    video.muted = true;
    video.defaultMuted = true;

    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");

    video.controls = false;
    video.removeAttribute("controls");

    // ===== 2. 소스 주입 =====
    video.src = "/public/image/main/hero_media.mp4";


    // ===== 3. fallback 함수 =====
    const fallback = () => {
        video.style.display = "none";
        section.style.background =
            "url('/public/image/main/hero_fallback.jpg') center/cover no-repeat";
    };


    // ===== 4. 재생 시도 =====
    const tryPlay = () => {
        const promise = video.play();

        if (promise !== undefined) {
            promise.catch(() => {
                // autoplay 실패 → 터치 유도 or fallback
            });
        }
    };


    // ===== 5. 로드되면 1차 시도 =====
    video.addEventListener("loadeddata", tryPlay);


    // ===== 6. 카톡/인앱 핵심 (이게 핵심이다) =====
    document.addEventListener("touchstart", () => {
        video.play().catch(fallback);
    }, { once: true });


    // ===== 7. 일정 시간 후도 실패하면 fallback =====
    setTimeout(() => {
        if (video.paused) {
            fallback();
        }
    }, 2000);

});