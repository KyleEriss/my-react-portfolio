import { React, Component } from 'react';
import OttoPicture from '../../images/otto2.JPG';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className='about'>

                <div className='itemAbout'>

                    <h2>About Kyle</h2>
                    
                    <p>
                        I'm focused on removing barriers to employment for underserved communities. I'm ultimately seeking to
                        combine my experience in workforce development with my tech background to expand access to learning and
                        tech training opportunities for these communities.
                    </p>

                    <p>
                        Software development is fun, engaging, and it opens up so many new opportunities. I'd love to work with
                        a team of like-minded developers who want to inspire others to pursue these opportunities.
                    </p>

                    <p>
                        When I'm not coding, I'm typically exploring new places on my motorcycle or walking on the beach with
                        my dog, Otto.
                    </p>

                </div>

                <div className='itemAbout'>
                    <img src={OttoPicture} className='profilePictures' />
                </div>


            </div>
        )
    }
}