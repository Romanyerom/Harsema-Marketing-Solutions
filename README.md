Project Overview
Harsema Marketing Solutions is a marketing website designed to showcase the services, expertise, and value that Harsema offers to its clients. The website provides an intuitive and user-friendly experience with sections such as Home, About, Services, Contact, and a Subscribe page.

The project was built using React.js as the front-end framework, hosted via GitHub Pages, and integrated with a custom domain purchased through Bluehost.

Key Features
- Responsive Design: The website is fully responsive, ensuring a seamless experience on devices of all sizes.
- Multiple Pages: The website includes a Home page, About Us, Services, Contact Us, and a Subscribe page.
- Deployed on GitHub Pages: The project is deployed on GitHub Pages, and it uses a custom domain bought through Bluehost.

Live Demo
Visit the website at: https://harsemamarketing.com

Project Architecture
The website uses the following technologies:
- React.js: As the primary framework for building the front end of the website.
- GitHub Pages: For hosting and deploying the site.
- Bluehost: For domain registration and management.

Folder Structure
- /src: Contains all the source code for the website.
  - /assets: Images and other assets.
  - /components: React components for different sections (Home, About, Services, Contact, Subscribe).
- /public: Public files and index.html.

Setup Instructions
To set up the project on your local environment:

1. Clone the repository:
   ```
   git clone https://github.com/Romanyerom/harsema-marketing-solutions
   ```
   
2. Navigate to the project directory:
   ```
   cd harsema-marketing-solutions
   ```
   
3. Install dependencies:
   ```
   npm install
   ```
   
4. Run the project locally:
   ```
   npm start
   ```

5. Build for production:
   ```
   npm run build
   ```

6. Deploy to GitHub Pages:
   - Add the following line to your `package.json` under `scripts`:
     ```json
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
     ```
   - Then run:
     ```
     npm run deploy
     ```

Deployment Process
1. Create a React App: Set up the project using the `create-react-app` command.
   ```
   npx create-react-app harsema-marketing-solutions
   ```

2. Install necessary dependencies:
   - React Router, for page navigation:
     ```
     npm install react-router-dom
     ```

3. Develop the website:
   - Created the necessary folders and components for Home, About, Services, Contact, and Subscribe pages.

4. Deploy the website:
   - Configured GitHub Pages for deployment.
   - Purchased a domain from Bluehost and linked it with GitHub Pages.

Domain Setup
- Domain Purchased from Bluehost: The domain name was purchased from Bluehost.
- Linked to GitHub Pages: The custom domain was connected to GitHub Pages by updating the DNS settings in Bluehost to point to the GitHub Pages servers.
