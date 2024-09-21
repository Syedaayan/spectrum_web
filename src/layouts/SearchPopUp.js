const SearchPopUp = ({ open, close }) => {
  return (
    <div className={`search-popup ${open ? "active" : ""}`}>
      <div
        className="search-popup__overlay search-toggler"
        onClick={() => close()}
      />
      {/* /.search-popup__overlay */}
      <div className="search-popup__content">
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <label htmlFor="search" className="sr-only">
            search here
          </label>
          {/* /.sr-only */}
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="thm-btn2">
            <i className="icon-magnifiying-glass icon-search" />
          </button>
        </form>
      </div>
      {/* /.search-popup__content */}
    </div>
  );
};

export default SearchPopUp;
