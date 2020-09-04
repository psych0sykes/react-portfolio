import React, {useState} from 'react';
import ItemMenu from '../components/ItemMenu';
import ItemDisplay from '../components/ItemDisplay';
import subloserImage from '../images/subloser.JPG';
import divdivImage from '../images/divdiv.jpg';
import aepImage from '../images/aep.png';
import mortgageCalculatorImage from '../images/mcimg.png';

function Home(props) {

    const [displayItem, setDisplayItem] = useState(false);
    const [itemIndex, setItemIndex] = useState();
    const [itemColor, setItemColor] = useState('#333333');

    function Display(props) {

        if(displayItem){
            return <ItemDisplay item={itemArray[itemIndex]} itemColor={itemColor}/>
        }
        else{
            return null
        }
    }

    function Clicked(id, color) {
        console.log(id);
        setDisplayItem(true);
        setItemIndex(id);
        setItemColor(color)
    }

    const itemArray = [
        {
            title: "divdiv",
            id: "dividv",
            urlText: "check out the app",
            url: "https://divdiv.herokuapp.com/",
            description: "divdiv is a fundraising platform I built with React, Node, and MongoDB. Each time a user donates to a campaign, they get to add a colored div to the campaign canvas. User authentication through Passport.js and payments processing throught the Stripe API. Go check it out!",
            background: ["image",divdivImage],
        },
        {
            title: "mortgage calculator",
            id: "mortgageCalculator",
            urlText: "try it out!",
            url: "https://mortgage-calculator-bsykes.vercel.app/",
            description: "A next.js react app I built to calculate mortgage payments, and home affordability; tying my professionl experience in the mortgage industry into my software portfolio.",
            background: ["image",mortgageCalculatorImage],
        },
        {
            title: "accountable enforcement project",
            id: "accountableEnforcementProject",
            urlText: "view the project",
            url: "https://projectaccountableenforcement.vercel.app/",
            description: "The Accountable Enforcement Project is a react app built with Next.js. I created the project as a resource to identify racism withing American law enforcement using data from a study conducted by the Bureau of Justice Statistics.",
            background: ["image",aepImage]
        },
        {
            title: "click_this",
            id: "click_this",
            urlText: "take a look",
            url: "https://click-this-psych0sykes.herokuapp.com/",
            description: "A clicking game built with React. Practice making components, using hooks, and handling state with React.",
            background: ["color"],
        },
        {
            title: "food fight!",
            id: "food_fight",
            urlText: "start a fight",
            url: "https://psych0sykes.github.io/unit-4-game/",
            description: "One of my first javascript projects! Pick a pastry and duke it out with other pastries, each with their own hp and attack stats. Built with JS and jQuery.",
            background: ["color"],
        },
        {
            title: "linkedin",
            id: "linkedin",
            urlText: "view my profile",
            url: "https://www.linkedin.com/in/blake-sykes-7b5656140/",
            description: "Currently employed at Castle & Cooke Mortgage as a Financial Analyst.",
            background: ["color"],
        },
        {
            title: "contact",
            id: "contact",
            urlText: "or email me: blakesykes13@gmail.com",
            url: "mailto:blakesykes13@gmail.com",
            description: "call me: 385-445-5016",
            background: ["color"],
        },
        {
            title: "music",
            id: "subloser",
            urlText: "subloser.com",
            url: "https://psych0sykes.github.io/subloser.com/",
            description: "I write, record, produce and perform music under the name subloser. My music is distrubted on Spotify, Apple Music and really everywhere you can stream music. Click on the link to go to my webstie!",
            background: ["image", subloserImage],
        },
        {
            title: "about me",
            id: "aboutMe",
            description: "My name is Blake. I am a Full Stack Developer, Financial Analyst, and Musician. Be sure to look at my app divdiv, it's my best work. If you like music, listen to my music.",
            background: ["color"],
        },
        {
            title: "github",
            id: "github",
            urlText: "see my profile",
            url: "https://github.com/psych0sykes/",
            description: "Dig into into my projects on GitHub. All the code, all the commits, all in one place.",
            background: ["color"],
        },
        {
            title: "resume",
            id: "resume",
            urlText: "view my resume",
            url: "https://drive.google.com/file/d/1liClTdUKnaO_VSg2IecL2T4ilHQHXT5c/view?usp=sharing",
            description: "Click the link below to see a fresh copy of my resume.",
            background: ["color"],
        }
    
    ];

    return(
        <div>
            <Display show={displayItem}/>
            <ItemMenu items={itemArray} show={(id, color) => Clicked(id, color)}/>
        </div>
    )
};

export default Home;