# My Portfolio

This is a personal portfolio project built with Next.js. It showcases my projects, articles, and provides a contact form for inquiries.

## Features

- **Project Carousel**: A carousel displaying links or iframes of my hosted projects.
- **Articles Section**: A section that lists articles I've written, populated with random content using Faker.js.
- **Comments System**: Users can create, view, edit, and delete comments on articles after logging in.
- **Authentication**: Utilizes NextAuth (Auth.js) with a Credentials provider for user authentication.
- **Weather Display**: Fetches and displays the most recent weather forecast for Cache Valley, UT.
- **Contact Form**: A form that saves inquiries to a Vercel Postgres database.

## Technical Requirements

- Built with Next.js using the App Router.
- Implements server actions with try/catch blocks for all database CRUD operations.
- Uses slugs to identify articles.
- Ensures user authorization for creating, updating, and deleting comments.
- Includes a custom hook for interacting with the NWA API.
- Facilitates navigation using the Link tag, revalidatePath(), and redirect().
- Renders loading states for streaming components.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables for NextAuth and database connection.

5. Run the development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Explore the projects in the carousel.
- Read articles and leave comments if logged in.
- Use the contact form for inquiries.

## License

This project is licensed under the MIT License.