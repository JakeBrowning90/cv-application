# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project is my second attempt at making a CV Building Application using React, as a result of The Odin Project revamping their React course and moving it to a later point in the overall curriculum. Most of the logic for handling props and state is reused from my first build, but I made a point to improve in a few ways:

1. Expanded use of Components: My first build limited Components to the Education and Experience Output sections as they were the most obvious places for HTML to be repeated. This time, I tried to make each section of the page as modular as possible: the body's 3 child divs, all forms, and all sections of the CV Output have been reworked as Components. I'm not entirely sure if this is a best practice in the industry, but it helped me to better keep track of my work and make adjustments to the layout.

2. Togglable classes: My first build had buttons to edit or delete underneath each entry. This time, I added a function to change their display attribute to "none" so the CV Output better resembles a document from a word processor. This inspired me to also add the checkboxes to show and hide entire sections of the CV, as different users may not wish to include all sections.

3. Transforming forms: I added a simple scale transform to the forms as they expand. I included the function to hide the forms in my original version as having all at full size would run off the screen, so this felt like a small way to make that feature smoother.

Going forward, I'd like to eventually add more options for adjusting the look of the CV Output, such as letting the user pick their margins and padding, or reorder the sections. I'd also like to add a "Print view" locking the CV Output to a chosen side and make that printable as a hardcopy CV. 