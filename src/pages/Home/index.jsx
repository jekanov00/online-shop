import React from 'react';
import styles from './home.module.sass';

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.logo}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logoName.png`}
              alt="Logo"
              className={styles.logo_img}
            />
          </div>
          <button className={styles.catalog}>
            <svg
              className={styles.catalog_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <title>Catalog</title>
              <path d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
            </svg>
            <p className={styles.catalog_text}>Catalog</p>
          </button>
          <div className={styles.search}>
            <form action="search-form" method="get" className={styles.searchForm}>
              <input
                type="text"
                name="search"
                className={styles.searchForm_input}
                placeholder="I'm searching for..."
              />
              <button type="button" className={styles.searchForm_clear} style={{ display: 'none' }}>
                X
              </button>
              <button type="button" className={styles.searchForm_submit}>
                Search
              </button>
            </form>
          </div>
          <div className={styles.profile}>
            <button className={styles.profile_button}>
              <svg  className={styles.profile_button_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>profile</title>
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
