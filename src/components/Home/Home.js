import { React, Component } from 'react';
import './Home.css';
import GitHubProfilePic from '../../images/GitHubProfilePic.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>

                <div className='itemHome'>
                    <img src={GitHubProfilePic} className='profilePictures' />
                </div>

                <div className='itemHome'>

                    <h2>Hi. I'm Kyle!</h2>

                    <div className='itemText'>
                        <p>
                            I'm a software developer with a background in workforce development living in Boston, MA.
                        </p>

                        <p>My interests include:</p>

                        <ul className="bulletpoints">
                            <li>Expanding access to learning and technology</li>
                            <li>Designing quality websites that engage users</li>
                            <li>Exploring new places and exchanging ideas with other developers</li>
                        </ul>
                    </div>



                </div>

            </div>
        )
    }
}