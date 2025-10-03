# ServeYou: An Interactive Company Website

ServeYou is a modern, responsive website built with Next.js, featuring a headless CMS integration. It's designed to showcase a company's information, services, team members and blog content.

## Features:

**Next.js Framework:** Utilizes either the App Router for a robust and efficient development experience.

**Headless CMS Integration:** Content is managed and served from a headless CMS (Strapi), providing flexibility and easy content updates.

**Static Site Generation (SSG):** Pages like the home, about, team members and services are pre-rendered at build time for lightning-fast load speeds.

**Dynamic Routing:** Includes dynamic pages for individual team members and blog posts.

**Client-Side Search:** Users can easily search and filter blog posts on the blog page.

## Technologies Used:

**Next.js -** For building the user interface.

**Tailwind CSS -** A utility-first CSS framework for rapid and responsive styling.

## Bonus Tasks:

**Team Member Page -** A dynamic route at /team/[id] displays detailed information about each team member.

**Blog Search: -** The blog page includes a client-side search bar that filters the list of posts.

## CMS Content Model(Strapi):

**Site Settings:** Global site information like the company name, logo, and footer text.

**Services:** Details for each service offered, including a title, description, price, and image.

**Team Members:** Information about each team member, including their name, photo, designation, and a short bio.

**Blog Posts:** Comprehensive content for the blog, with fields for the title, URL-friendly slug, author, date, body content, and a featured image.

## API Endpoints:

**Get Team Member -** `GET /api/team-members/${id}`

**Get All Team Members -** `GET /api/team-members/${id}`

**Get All Posts -** `GET /api/articles`

**Get Post -** `GET /api/articles?populate=*&filters[slug][$eq]=${slug}`

**Get All services -** `GET /api/services`

**Get Site Settings -** `GET /api/site-setting`

## Explanation of Directories:

- **`.` (Root Directory):** Contains configuration files, `node_modules`, and the top-level application folders.
- **`app/`:** Core Next.js App Router structure with layouts, routes, and server actions.
  - **`layout.js`:** Root layout file including `<html>`, `<body>`, and global components (Header, Footer, Navigation).
  - **`page.js`:** Home page component (`/`).
  - **`about/`:** Files for the `/about` route.
    - **`page.js`:** About page component.
  - **`blog/`:** Files for the `/blog` route and nested dynamic routes.
    - **`page.js`:** Blog listing page.
    - **`[slug]/`:** Dynamic route folder for individual blog posts.
      - **`page.js`:** Individual blog post page.
  - **`member/`:** Files for the `/member` route and nested dynamic routes.
    - **`page.js`:** Team members listing page.
    - **`[id]/`:** Dynamic route folder for individual team members.
      - **`page.js`:** Individual team member profile page.
  - **`services/`:** Files for the `/services` route.
    - **`page.js`:** Services listing page.
- **`actions/`:** Server Actions for data fetching and mutation.
  - **`fetchMember.js`:** Fetch a single member.
  - **`fetchMembers.js`:** Fetch all members.
  - **`fetchPost.js`:** Fetch a single blog post.
  - **`fetchPosts.js`:** Fetch all blog posts.
  - **`fetchServices.js`:** Fetch all services.
  - **`fetchSetting.js`:** Fetch site settings.
- **`context/`:** Global state management using React Context.
  - **`layoutContext.js`:** Defines the Layout context.
  - **`LayoutProvider.js`:** Provides layout context state across the app.
- **`components/`:** Reusable UI components.
  - **`blog/`:** Blog-specific components.
    - **`post-list.js`:** Renders list of posts (with Search & Loader).
    - **`post-list.test.js`:** Tests for post-list.
    - **`post.js`:** Renders a single blog post.
    - **`post.test.js`:** Tests for post.
    - **`posts.js`:** Renders multiple blog posts.
  - **`common/`:** Shared, general-purpose UI components.
    - **`Footer.js`:** Global site footer.
    - **`Header.js`:** Global site header.
    - **`Loader.js`:** Loader image.
    - **`Navigation.js`:** Main navigation bar.
    - **`search.js`:** Search bar component.
  - **`member/`:** Team member-specific components.
    - **`member.js`:** Single team member profile.
    - **`member.test.js`:** Tests for member component.
    - **`members.js`:** List of team members.
    - **`members.test.js`:** Tests for members component.
- **`lib/`:** Utilities and configuration.
  - **`api.js`:** Centralized API client (e.g., Strapi requests).
  - **`globalConst.js`:** Global constants (API URLs, etc.).
  - **`helpers.js`:** General utility functions.
- **`public/`:** Contains static assets served directly by the web server.

## Installation and Usage

To get statred first setup Strapi headless CMS on your local machine, follow these steps:

Create a new Strapi project(Replace my-strapi-project with your desired project name), Follow the prompts to choose your installation type (e.g., "Quickstart" for a default SQLite setup or "Custom" for manual database configuration) and preferred language (JavaScript or TypeScript):

     npx create-strapi-app@latest my-strapi-project

Configure the Project, if you chose "Custom," you will be prompted to select your database client (e.g., PostgreSQL, MySQL, MongoDB) and provide connection details like host, port, username, and password. Ensure your chosen database is running and accessible:

Navigate to the strapi project directory:

    cd my-strapi-project

Start the development server:

    npm run develop

[Access the Admin Panel](http://localhost:1337/admin):

**Create Content Models:**
After logging in, go to the Content-Type Builder in the left sidebar. Here, you'll define the content models (collections) outlined in the CMS Content Model section above:

1. Site Settings - Single type (company name, logo, footer text)
2. Services - Collection Type (title, description, price, image)
3. Team Members - Collection Type (name, photo, designation, bio)
4. Blog Posts - Collection Type (title, slug, author, date, content, image)

**Add Content:**
After defining the models, go to the Content Manager to add content. Populate each collection with some sample data.

**Now to setup next.js project on your local machine, follow these steps:**

Clone the repository:

     git clone https://github.com/manojkmfsi/company_website_with_headless_cms.git

Navigate to the project directory:

    cd company_website_with_headless_cms

Create .env.local file and add following lines:

    NEXT_PUBLIC_STRAPI_API_TOKEN=your-strapi-api-token
    NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
    NEXT_PUBLIC_PAGE_LIMIT=3

Install the dependencies:

    npm install

Start the development server:

    npm run dev

## Credits

Strapi: The free and open-source headless CMS.
