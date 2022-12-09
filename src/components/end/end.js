import './end.css'
import image1 from './static/image1.jpg'
import image3 from './static/image3.jpg'


const End = () => {
    return (
        <div className="end">
            <div className="end-header">
                <h1>Thank You For Playing!</h1>
            </div>
            <div className="end-images">
                <div className="end-image">
                    <img src={image1} alt=""/>
                </div>
                <div className="end-image">
                    <img src={image3} alt=""/>
                </div>
            </div>
        </div>
    )
}

export {End}