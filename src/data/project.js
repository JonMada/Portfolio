//ETXELIT CAPTURES
import homePageImg from '../assets/images/Etxelit/home-page.png';
import booksPage from '../assets/images/Etxelit/books-page.png';
import registerPage from '../assets/images/Etxelit/register-page.png';
import myLibrary from '../assets/images/Etxelit/myLibrary-page.png';
import formPage from '../assets/images/Etxelit/form.png';
import bookDetail from '../assets/images/Etxelit/book-detail.png';

//RESTAURANT CAPTURES
import restaurantHomePage from '../assets/images/DevCamp Restaurant/home-page.png';
import restaurantMenuPage from '../assets/images/DevCamp Restaurant/menu-page.png';
import restaurantContactPage from '../assets/images/DevCamp Restaurant/form-page.png';
import restaurantFooter from '../assets/images/DevCamp Restaurant/footer.png';

//RESTAURANTE SERVICE CAPTURES
import code1 from '../assets/images/Restaurante JS/Codigo1.png';
import code2 from '../assets/images/Restaurante JS/Codigo2.png';
import code3 from '../assets/images/Restaurante JS/Codigo3.png';

const projectData = [
    {
        "id": 1,
        "title": "ETXELIT - Book Management System",
        "description": "ETXELIT is a full-stack book management system that allows users to add, view, update, and delete book information. Developed as part of the Full Stack program at DevCamp by Bottega University.",
       "details": "The system features a clean and user-friendly interface built with React and SCSS, ensuring a smooth user experience. On the backend, Python and FastAPI are utilized to handle data operations, with PostgreSQL serving as the database to store all book-related information securely. Users can sign up to create personal accounts, allowing them to add, view, update, and delete their book entries with ease. The project includes a complete CRUD functionality, making it simple for users to manage their libraries. Version control is managed with Git, which enhances collaboration and tracking throughout the development process.",
        "technologies": {
        "frontend": ["React", "SCSS", "NPM"],
        "backend": ["Python", "FastAPI", "PostgreSQL"],
        "tools": ["Git", "Render.com"]
        },
        "features": [
        "Create, read, update, and delete book entries.",
        "Responsive user interface.",
        "Efficient relational database management.",
        "Unit testing to ensure code quality."
        ],
        "screenshots": [
        {
            "url": homePageImg,
            "caption": "Homepage of the book management system"
        },
        {
            "url": booksPage,
            "caption": "Overview of the community's registered books"
        },
        {
            "url": registerPage,
            "caption": "User registration page where new users can create an account"
        },
        {
            "url": myLibrary,
            "caption": "User's library showcasing all the books they have added"
        },
        {
            "url": formPage,
            "caption": "Form to add a new book entry"
        },
        {
            "url": bookDetail,
            "caption": "Detailed view of a book entry"
        }
        ],
        "demoLink": "https://devcamp-capstone-frontend-bmgm.onrender.com/",
        "codeLink": ["https://github.com/JonMada/DevCamp-Capstone-FrontEnd", "https://github.com/JonMada/DevCamp-Capstone-BackEnd"],
        "tags": ["React", "Python", "Full Stack", "CRUD", "Responsive Design"],
        "completionDate": "September 2024"
    },
    {
        "id": 2,
        "title": "DevCamp's Fantastic Fries - Restaurant Website",
        "description": "DevCamp's Fantastic Fries is a static restaurant website that showcases the menu, ambiance, and contact information for potential customers. Designed to be visually appealing and easy to navigate.",
        "details": "This website features a modern design built with pure HTML and CSS. It includes a homepage with a welcoming image, a menu page displaying various dishes, and a contact page with a simple form for inquiries. The site is optimized for both desktop and mobile devices, ensuring a seamless user experience across different platforms.",
        "technologies": {
            "frontend": ["HTML", "CSS"],
            "backend": ["None"],
            "tools": ["GitHub Pages"]
        },
        "features": [
            "Responsive design that adapts to mobile devices.",
            "Easy navigation through a simple menu.",
            "Contact form for customer inquiries."
        ],
        "screenshots": [
            {
                "url": restaurantHomePage,
                "caption": "Homepage of Delicious Bites"
            },
            {
                "url": restaurantMenuPage,
                "caption": "Menu showcasing various dishes"
            },
            {
                "url": restaurantContactPage,
                "caption": "Contact page for customer inquiries"
            },
            {
                'url': restaurantFooter,
                'caption': 'Web footer with various links'
            }
        ],
        "demoLink": "https://devcamp-coding-foundations-main-project.onrender.com/",
        "codeLink": ["https://github.com/JonMada/DevCamp-Coding-Foundations-Main-Project/tree/main/html-css"],
        "tags": ["HTML", "CSS", "Static Site"],
        "completionDate": "October 2023"
    },

    {
        "id": 3,
        "title": "Restaurant Service Assistant - JavaScript Program",
        "description": "The Restaurant Service Assistant is an interactive JavaScript application that simulates a waiter, offering dish recommendations based on the time of day specified by the user. Additionally, the app provides personalized comments for each dish, creating a more engaging user experience.",
        "details": "Built with JavaScript, HTML, and CSS, this application runs directly in the browser and allows users to interact via prompts, which render progressively on the screen. Depending on the time of day provided, the app suggests appropriate menu items (e.g., breakfast, lunch, or dinner options) and includes humorous or descriptive commentary on each dish. Designed as a client-side experience, the program does not require a backend, making it lightweight and easy to deploy. The project is hosted on CodePen.io, where users can experience its features interactively.",
        "technologies": {
            "frontend": ["JavaScript"],
            "backend": ["None"],
            "tools": ["CodePen"]
        },
        "features": [
            "Dish recommendations based on the time of day.",
            "Personalized comments on each dish for added engagement.",
            "Interactive prompt-based navigation within the browser.",
            "Lightweight and easy to deploy on client-side environments."
        ],
        "screenshots": [
            {
                "url": code1,
                "caption": "Code screenshot"
            },
            {
                "url": code2,
                "caption": "Code screenshot"
            },
            {
                "url": code3,
                "caption": "Code screenshot"
            }
        ],
        "demoLink": "https://codepen.io/Jon-Madariaga/pen/yLWLRmX?editors=0010",
        "codeLink": ["https://codepen.io/Jon-Madariaga/pen/yLWLRmX?editors=0010"],
        "tags": ["JavaScript", "Interactive", "Prompt-based", "Client-Side"],
        "completionDate": "May 2024"
    }
    
    
]

  


  export default projectData;