import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faFolderOpen, faEnvelope, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Project1 from './assets/SeiYou.png'
import Project2 from './assets/Quick Recipe.jpeg'

export const navbarIcons = [
    {
        id: 1,
        name: 'Home',
        icon: <FontAwesomeIcon icon={faHouse} className='nav_icon' />,
        path: '/'
    },
    {
        id: 2,
        name: 'About',
        icon: <FontAwesomeIcon icon={faUser} className='nav_icon' />,
        path: '/about'
    },
    {
        id: 3,
        name: 'Projects',
        icon: <FontAwesomeIcon icon={faFolderOpen} className='nav_icon' />,
        path: '/projects'
    },
    {
        id: 4,
        name: 'Contact',
        icon: <FontAwesomeIcon icon={faEnvelope} className='nav_icon' />,
        path: '/contact'
    }
];

export const personalInfos = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Jason'
    },
    {
        id: 2,
        title: 'Last Name : ',
        description: 'Tandiono'
    },
    {
        id: 3,
        title: 'Age : ',
        description: '21 Years'
    },
    {
        id: 4,
        title: 'Nationality : ',
        description: 'Indonesia'
    },
    {
        id: 5,
        title: 'Address : ',
        description: 'South Tangerang'
    },
    {
        id: 6,
        title: 'Languages : ',
        description: 'Indonesia, English'
    }
];

export const stats = [
    {
        id: 1,
        number: '1',
        title: 'Years of Experience'
    },
    {
        id: 2,
        number: '3+',
        title: 'Completed Projects'
    },
    {
        id: 3,
        number: '3',
        title: 'Certificates'
    }
]

export const skills = [
    {
        id: 1,
        title: 'C Language',
        level: 'Intermediate'
    },
    {
        id: 2,
        title: 'HTML',
        level: 'Intermediate'
    },
    {
        id: 3,
        title: 'CSS',
        level: 'Intermediate'
    },
    {
        id: 4,
        title: 'ReactJs',
        level: 'Beginner'
    },
    {
        id: 5,
        title: 'Typescript',
        level: 'Beginner'
    },
    {
        id: 6,
        title: 'Java',
        level: 'Beginner'
    },
    {
        id: 7,
        title: 'Javascript',
        level: 'Intermediate'
    },
    {
        id: 8,
        title: 'My SQL',
        level: 'Beginner'
    },
    {
        id: 9,
        title: 'PHP',
        level: 'Beginner'
    },
    {
        id: 10,
        title: 'Python',
        level: 'Intermediate'
    },
    {
        id: 11,
        title: 'Angular',
        level: 'Beginner'
    },
    {
        id: 12,
        title: 'English Language',
        level: 'Intermediate'
    },
    {
        id: 13,
        title: 'Indonesian Language',
        level: 'Advanced'
    }
]

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FontAwesomeIcon icon={faBriefcase} className='resume_icon' />,
        date: 'August 2022 - December 2022',
        title: 'UI/UX Engineer <span> GreatDay HR </span>',
        desc: 'I have the task and responsibility to develop user interfaces for GreatDay HR applications, websites, create high-quality UX, and work with the development team to ensure the website is suitable for digital users.'
    },
    {
        id: 2,
        category: 'education',
        icon: <FontAwesomeIcon icon={faGraduationCap} className='resume_icon' />,
        date: 'June 2016 - May 2019',
        title: 'High School Student <span> SMAK Penabur Bintaro Jaya </span>',
        desc: "I'm a high school student who majored in natural science."
    },
    {
        id: 3,
        category: 'education',
        icon: <FontAwesomeIcon icon={faGraduationCap} className='resume_icon' />,
        date: 'August 2019 - Now',
        title: 'University Student <span> Multimedia Nusantara University </span>',
        desc: 'I am a student of Universitas Multimedia Nusantara majoring in Informatics.'
    },
]

export const projectsItem = [
    {
        id: 1,
        img: Project1,
        title: 'SeiYou',
        description: 'SeiYou is a cross-platform mobile application used by people who want to share their voice acting skills.',
        link: 'https://sei-you.vercel.app/welcome'
    },
    {
        id: 2,
        img: Project2,
        title: 'Quick Recipe',
        description: 'Quick Recipe is a mobile application that provides the steps and ingredients needed to make various types of food recipes in the form of videos and writings.',
        link: 'https://play.google.com/store/apps/details?id=quick_recipe.didi_x_djongers'
    },
]