import './phrenologytest.css'
import firstImage from './static/phrenologytest1.jpg'
import secondImage from './static/phrenologytest2.jpg'
import thirdImage from './static/phrenologytest3.jpg'
import ReactDOM from 'react-dom/client';
import {useState} from 'react'

let curr_question = "first"

const PhrenologyTest = () => {

    const [imageClicked, setImageClicked] = useState({
        first: true,
        second: false,
        third: false
    });

    
    const onClickHandler = (order, option_choosen) => {
        const resetImages =  {
            first: false,
            second: false,
            third: false
        }
        console.log(order)

        if (order == "first") {
            let button1 = document.getElementsByClassName("button1")[0];
            button1.setAttribute('id', 'incorrect-button');
            let button2 = document.getElementsByClassName("button2")[0];
            button2.setAttribute('id', "correct-button");

            let incorrectMark = document.getElementsByClassName("left-mark")[0];
            incorrectMark.setAttribute("id", "incorrect-mark");
            let correctMark = document.getElementsByClassName("right-mark")[0];
            correctMark.textContent = "V"
            correctMark.setAttribute("id", "correct-mark");


            setTimeout(
                () => {
                    setImageClicked({
                        ...resetImages,
                        ["second"]: true
                    })
                    button1.removeAttribute('id', 'correct-button')
                    button2.removeAttribute('id', "incorrect-button")

                    incorrectMark.removeAttribute("id", "incorrect-mark");
                    correctMark.removeAttribute("id", "correct-mark");
                }
            , 5000)
            curr_question = "second"

        }
        else if (order == "second") {
            let button1 = document.getElementsByClassName("button1")[0];
            button1.setAttribute('id', 'incorrect-button')
            let button2 = document.getElementsByClassName("button2")[0];
            button2.setAttribute('id', "correct-button")

            let incorrectMark = document.getElementsByClassName("left-mark")[0];
            incorrectMark.setAttribute("id", "incorrect-mark");
            let correctMark = document.getElementsByClassName("right-mark")[0];
            correctMark.textContent = "V"
            correctMark.setAttribute("id", "correct-mark");

            setTimeout(
                () => {
                    setImageClicked({
                        ...resetImages,
                        ["third"]: true
                    })
                    button1.removeAttribute('id', 'correct-button')
                    button2.removeAttribute('id', "incorrect-button")

                    incorrectMark.removeAttribute("id", "incorrect-mark");
                    correctMark.removeAttribute("id", "correct-mark");
                }
            , 5000)
            curr_question = "third"
        }
        else {
            let button1 = document.getElementsByClassName("button1")[0];
            button1.setAttribute('id', 'correct-button')
            let button2 = document.getElementsByClassName("button2")[0];
            button2.setAttribute('id', "incorrect-button")

            let correctMark = document.getElementsByClassName("left-mark")[0];
            correctMark.setAttribute("id", "correct-mark");
            correctMark.textContent = "V"
            let incorrectMark = document.getElementsByClassName("right-mark")[0];
            incorrectMark.textContent = "X"
            incorrectMark.setAttribute("id", "incorrect-mark");

            console.log("Congratulation")
        }


    };

    return (
        <div className='phrenologytest'>
            <div className="phrenology-image">
                <div className="frame">
                    {imageClicked.first && <img src={firstImage}/>}
                    {imageClicked.second && <img src={secondImage}/>}
                    {imageClicked.third && <img src={thirdImage}/>}
                </div>
            </div>
            <div className="options">
                <div className="question">
                    <p>Match the Description to the Correct Picture</p>
                </div>
                <div className="buttons">
                    <div className="phrenology-button">
                        <h1 className='left-mark'>X</h1>
                        <button className='button1' onClick={() => onClickHandler(curr_question, 1)}>
                            {imageClicked.first && "DANGER!"}
                            {imageClicked.second && "An Unreliable Husband"}
                            {imageClicked.third && "An Unreliable Mother"}
                        </button>
                    </div>
                    <div className="phrenology-button">
                        <h1 className='right-mark'>X</h1>
                        <button className='button2' onClick={() => onClickHandler(curr_question, 2)}>
                            {imageClicked.first && "Moral And Religious Sentiments"}
                            {imageClicked.second && "A Genuine Husband"}
                            {imageClicked.third && "A Genuine Mother"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {PhrenologyTest};