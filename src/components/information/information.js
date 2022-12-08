import './information.css'
import skullImage from './static/phrenology-chart-skull-divisions.jpg';
import gallImage from './static/Franz_Josef_Gall.jpg'
import brocaImage from './static/Paul-Broca.jpg'

const test = () => {
    console.log("Hello World")
}

const PhrenologyTestButton = () => {
    return (
      <div className="test-your-phrenology">
          <button onClick={test}>
              Test Your Phrenology Skill
          </button>
      </div>
    );
  }

function Information() {
    return (
        <div className="information">
            <div className="header">
                <h1>Pseudoscience: Phrenology</h1>
            </div>
            <div className="info-cards">
                <div className="info-card information">
                    <h2>What is Phrenology?</h2>
                    <h3>(noun) the study of the conformation and especially the contours of the skull 
                        based on the former belief that they are indicative of mental faculties and character</h3>
                </div>
                <div className="info-card image">
                    <img src={skullImage} alt=""/>
                </div>
                <div className="info-card image">
                    <img src={gallImage} alt=""/>
                </div>
                <div className="info-card information">
                    <h2>The Origins of Phrenology</h2>
                    <h3>Phrenology was developed by German physician Franz Joseph Gall in 1796. The discipline was influential in 
                        the 19th century, especially from about 1810 until 1840.</h3>
                </div>
                <div className="info-card information">
                    <h2>Why is it a Pseudoscience?</h2>
                    <h3>Phrenology was mostly discredited as a scientific theory by the 1840s, when scientific experiments showed that
                        the mental faculties proposed by Phrenologist does not correspond to the actual functions of that part of the brain
                    </h3>
                </div>
                <div className="info-card image">
                    <img src={brocaImage} alt=""/>
                </div>
            </div>
            <PhrenologyTestButton />
        </div>
    )
}


export default Information;