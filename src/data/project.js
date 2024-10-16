//ETXELIT CAPTURES
import homePageImg from '../assets/images/Etxelit/home-page.png';
import booksPage from '../assets/images/Etxelit/books-page.png';
import registerPage from '../assets/images/Etxelit/register-page.png';
import myLibrary from '../assets/images/Etxelit/myLibrary-page.png';
import formPage from '../assets/images/Etxelit/form.png';
import bookDetail from '../assets/images/Etxelit/book-detail.png';

const projectData = [
    {
        "id": 1,
        "title": "ETXELIT - Book Management System",
        "description": "ETXELIT is a full-stack book management system that allows users to add, view, update, and delete book information. Developed as part of the Full Stack program at DevCamp by Bottega University.",
        "details": "The project features a dynamic and modern user interface built with React and SCSS, along with a robust backend developed using Python and FastAPI. Data is stored in a PostgreSQL database and managed via a complete CRUD system. The project also leverages Git for version control, enabling efficient development.",
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
    }
]

  


  export default projectData;