import React, {useState} from 'react';
import ItemMenu from '../components/ItemMenu';
import ItemDisplay from '../components/ItemDisplay';

function Home(props) {

    const [displayItem, setDisplayItem] = useState(false);
    const [itemIndex, setItemIndex] = useState();

    function Display(props) {

        if(displayItem){
            return <ItemDisplay item={itemArray[itemIndex]}/>
        }
        else{
            return null
        }
    }

    function Clicked(id) {
        console.log(id);
        setDisplayItem(true);
        setItemIndex(id);
    }

    const itemArray = [
        {
            title: "divdiv",
            id: "dividv",
            urlText: "check out the app",
            url: "https://divdiv.herokuapp.com/",
            description: "divdiv is a fundraising platform I built with React, Node, and MongoDB. Each time a user donates to a campaign, they get to add a colored div to the campaign canvas. Payments are processed throught the Stripe API. Go check it out! This is my favorite, and best app.",
            background: ["image","divdiv"],
            index: 0
        },
        {
            title: "linkedin",
            id: "linkedin",
            urlText: "view my profile",
            url: "https://www.linkedin.com/in/blake-sykes-7b5656140/",
            description: "Currently employed at Castle & Cooke Mortgage as a Financial Analyst.",
            background: ["color"],
            index: 1
        },
        {
            title: "contact",
            id: "contact",
            urlText: "or email me: blakesykes13@gmail.com",
            url: "mailto:blakesykes13@gmail.com",
            description: "call me: 385-445-5016",
            background: ["color"],
            index: 2
        },
        {
            title: "subloser",
            id: "subloser",
            urlText: "subloser.com",
            url: "https://psych0sykes.github.io/subloser.com/",
            description: "I write, record, produce and perform music under the name subloser. My music is distrubted on Spotify, Apple Music and really everywhere you can stream music. Click on the link to go to my webstie!",
            background: ["image","subloser"],
            index: 3
        },
        {
            title: "about me",
            id: "aboutMe",
            urlText: "",
            url: "",
            description: "My name is Blake. I am a Full Stack Developer, Financial Analyst, and Musician. Be sure to look at my app divdiv, it's my best work. If you like music, listen to my music.",
            background: ["color"],
            index: 4
        },
        {
            title: "github",
            id: "github",
            urlText: "see my profile",
            url: "https://github.com/psych0sykes/",
            description: "Dig into into my projects on GitHub. All the code, all the commits, all in one place.",
            background: ["color"],
            index: 5
        },
        {
            title: "resume",
            id: "resume",
            urlText: "view my resume",
            url: "https://drive.google.com/file/d/1xvg0Ak8Wv-NRAl3eadI5p1HkzkL6LsD7/view?usp=sharing",
            description: "Click the link below to see a fresh copy of my resume.",
            background: ["color"],
            index: 6
        }
    
    ];

    return(
        <div>
            <Display show={displayItem}/>
            <ItemMenu items={itemArray} show={(id) => Clicked(id)}/>
        </div>
    )
};

export default Home;