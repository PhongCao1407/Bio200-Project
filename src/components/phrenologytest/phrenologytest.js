import './phrenologytest.css'
import firstImage from './static/phrenologytest1.jpg'

const PhrenologyImage = () => {
    return (
    <div className="phrenology-image">
        <div className="frame">
            <img src={firstImage} alt=""/>
        </div>
    </div>
    )
}

const PhrenologyOptions = () => {
    return (
        <div className="options">
            <div className="question">
                <p1>Match the Description to the Correct Picture</p1>
            </div>
            <div className="buttons">
                <div className="phrenology-button">
                    <button>DANGER!</button>
                </div>
                <div className="phrenology-button">
                    <button>Moral and Religious Sentiments</button>
                </div>
            </div>
        </div>
    );
}

export {PhrenologyImage, PhrenologyOptions};