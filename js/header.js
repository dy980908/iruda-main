const ROOT = "";

// fetch(ROOT + "/header.html")
fetch(ROOT + "header.html")
.then(r => r.text())
.then(html => {
    document.getElementById("header").innerHTML = html;

    // 모바일 메뉴 화살표
    document.querySelectorAll('.header_right_mobile .sub-menu').forEach(menu => {

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("width", "40");
        svg.setAttribute("height", "40");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M3 12H21M21 12L15 6M21 12L15 18");
        path.setAttribute("stroke", "currentcolor");
        path.setAttribute("stroke-width", "1");
        path.setAttribute("fill", "none");

        svg.appendChild(path);

        menu.appendChild(svg);
    });

    // 메인 헤더 바뀜
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // ===== 메뉴 슬라이드 =====
    document.querySelectorAll(".menu_link[data-target]").forEach(btn => {
        btn.addEventListener("click", function(e){
            e.preventDefault();

            const target = this.dataset.target;
            const next = document.getElementById(target);

            const current = document.querySelector(
                "#page1.active, .mobile_menu_subgroup.active"
            );
            if (!next) return;
            if (current) current.classList.remove("active");
            next.classList.add("active");
        });
    });
    document.querySelectorAll(".menu_back").forEach(btn => {
        btn.addEventListener("click", function(){
            document
                .querySelectorAll("#page1, .mobile_menu_subgroup")
                .forEach(p => p.classList.remove("active"));

            document
                .getElementById("page1")
                .classList.add("active");
        })
    });

    // 모바일 메뉴 열림 이벤트
    /* 모바일 메뉴 버튼 */
    const btn=document.querySelector(".mobile_menu_btn");
    const menu=document.querySelector(".header_right_mobile");
    const line=document.querySelector(".brush-line");

    btn.addEventListener("click",()=>{

        btn.classList.toggle("active");
        menu.classList.toggle("active");
        line.classList.toggle("active");
    });


    /* 모바일 서브페이지 이동 */

    document.querySelectorAll(".menu_link[data-target]").forEach(btn=>{
    btn.addEventListener("click",function(e){
    e.preventDefault();

    const target=this.dataset.target;
    const next=document.getElementById(target);

    const current=document.querySelector("#page1.active,.mobile_menu_subgroup.active");

        if(current)current.classList.remove("active");
        if(next)next.classList.add("active");
        });

    });


    /* 뒤로가기 */
    document.querySelectorAll(".menu_back").forEach(btn=>{
        btn.addEventListener("click",()=>{
        document.querySelectorAll("#page1,.mobile_menu_subgroup")
        .forEach(el=>el.classList.remove("active"));
        document.getElementById("page1").classList.add("active");

        });
    });


    /* ===== 현재 페이지 메뉴 active ===== */

    const bodyClass=document.body.className;

    const pages=[
    "brandstory",
    "place",
    "schedule",
    "diet",
    "flat",
    "moxi",
    "pigmen",
    "smp",
    "tattoo"
    ];

    pages.forEach(page=>{
        if(bodyClass.includes("page-"+page)){
            document.querySelectorAll(".menu-"+page).forEach(el=>{
                const li=el.closest("li");
                if(li) li.classList.add("active");
                
                if(el.classList.contains("sub-menu")){
                    el.classList.add("active");
                }
                
            });
        }
    });

})