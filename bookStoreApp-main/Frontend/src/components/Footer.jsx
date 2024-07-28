// src/components/Footer.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/aboutus" className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/omyadav049" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="http://linkedin.com/in/om-yadav-32b810219" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.792-1.75-1.766 0-.974.784-1.766 1.75-1.766s1.75.792 1.75 1.766c0 .974-.784 1.766-1.75 1.766zm13 12.268h-3v-5.598c0-1.335-.026-3.058-1.859-3.058-1.859 0-2.142 1.451-2.142 2.953v5.703h-3v-11h2.887v1.507h.042c.402-.761 1.382-1.563 2.846-1.563 3.043 0 3.605 2.002 3.605 4.605v6.451z"></path>
              </svg>
            </a>
            <a href="https://github.com/predator49" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.465-2.382 1.235-3.221-.124-.303-.535-1.525.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.004-.403 1.02.005 2.047.137 3.004.403 2.292-1.552 3.3-1.23 3.3-1.23.652 1.651.241 2.873.117 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.801 5.624-5.472 5.922.43.371.813 1.102.813 2.222 0 1.606-.014 2.902-.014 3.297 0 .322.219.692.825.575 4.764-1.585 8.201-6.082 8.201-11.383 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Om Yadav</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
