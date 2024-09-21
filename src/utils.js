

 



export const scrollTop = () => {
  let backToTop = document.getElementById("back-to-top");
  let offset = window.scrollY;
  if (backToTop) {
    if (offset > 60) {
      backToTop.classList.add("d-block");
    } else {
      backToTop.classList.remove("d-block");
    }
  }
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("#header-sticky");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("stricky-fixed");
      } else {
        sticky.classList.remove("stricky-fixed");
      }
    }
  }
};

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const dataFilter = (filterTrigger, filteritems) => {
  const filterLi = document.querySelectorAll(
      filterTrigger ? filterTrigger : ".filter-item"
    ),
    items = document.querySelectorAll(
      filteritems ? filteritems : ".masonary-layout .filter-item"
    );
  filterLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      let filterAtrr = li.getAttribute("data-filter");
      filterAtrr = filterAtrr.split(".")[1];
      let active = li.getAttribute("data-filter");
      filterLi.forEach((li_) => {
        if (li_.getAttribute("data-filter") === active) {
          li_.classList.add("active");
        } else {
          li_.classList.remove("active");
        }
      });
      items.forEach((item) => {
        if (item.classList.contains(filterAtrr)) {
          item.classList.add("d-block");
          item.classList.remove("d-none");
        } else {
          item.classList.remove("d-block");
          item.classList.add("d-none");
        }
      });
    });
  });
};

export const color = (header) => {
  const header_ = [
    {
      header1: [
        { name: "thm-base", value: "#f94d1c" },
        { name: "thm-base-rgb", value: "149, 77, 28" },
      ],
      header2: [
        { name: "thm-base", value: "#15b1c0" },
        { name: "thm-base-rgb", value: "21, 177, 192" },
      ],
      header3: [
        { name: "thm-base", value: "#d92300" },
        { name: "thm-base-rgb", value: "217, 35, 0" },
      ],
    },
  ];
  header_.forEach((header_) => {
    header_[`header${header ? header : 1}`].forEach((styleP) => {
      document.documentElement.style.setProperty(
        `--${styleP.name}`,
        styleP.value
      );
    });
  });
};

export const isotopLayout = (container, item) => {
  setTimeout(() => {
    if (typeof window !== "undefined") {
      const Isotope = require("isotope-layout");
      new Isotope(container ? container : ".masonary-layout", {
        itemSelector: item ? item : ".filter-item",
        percentPosition: true,
        masonry: {
          columnWidth: item ? item : ".filter-item",
        },
      });
    }
  }, 1000);
};

export const activeNavMenu = (path) => {
  const navItem = document.querySelectorAll(".main-menu__list li a");
  navItem.forEach((nav) => {
    if (nav.pathname === path) {
      if (!nav.href.includes("#")) {
        if (nav.pathname === "/about" || nav.pathname === "/contact") {
          nav.parentElement.className = "current";
        } else {
          nav.parentElement.parentElement.parentElement.className =
            "dropdown current";
        }
      }
    }
  });
};
