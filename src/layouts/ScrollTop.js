const ScrollTop = () => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <a
      href="#scroll-top"
      onClick={() => onClick()}
      data-target="html"
      className="scroll-to-target scroll-to-top"
      id="back-to-top"
    >
      <i className="fa fa-angle-up" />
    </a>
  );
};

export default ScrollTop;
