//TMDB https://api.themoviedb.org/3/movie/550?api_key=9b9f59b225c20d2ea95eb110d552fc50

//Steps
/**
 * Get TMDB API key
 * Create a React App
 * Setup Firebase hosting
 * Get all the MOVIES object
 * Build the Row Component and Others
 * Build the Banner and Others
 * Build the Nav-Bar and Others
 * Add Trailers popUP's
 * Deploy App to the Firebase Hosting
 */
import React from "react";
import "./Footer.css";

const footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      &copy; October 2020 Made with ❤️ by{" "}
      <a
        className="footer__link"
        href="https://github.com/NirajanWEB"
      >
        {" "}
        Nirajan Mahara
      </a>
    </div>
  </footer>
);

export default footer;
