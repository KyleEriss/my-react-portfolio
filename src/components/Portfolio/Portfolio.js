import { React, Component } from 'react';
import './Portfolio.css';
import recipro from '../../images/recipro.jpg';
import reconnaissound from '../../images/reconnaissound.jpg';
import popupshop from '../../images/popupshop.jpg';
import SoundScout from '../../images/SoundScout2.png';

export default class Portfolio extends Component {
    render() {
        return (
            <article id='portfolio'>
                <div className='portfolio'>

                    <div className='title'>Check out my work</div>

                    <div className='groupPortfolio'>


                        <div className='itemPortfolio'>

                            <div className='portfolioTitle'>
                                <p><a href='https://recipro-client.vercel.app/' target='_blank'>Recipro</a></p>
                            </div>

                            <div className='portfolioFlex'>
                                <div className='portfolioItemFlex'>
                                    <img src={recipro} className='imgPortfolio' />
                                </div>

                                <div className='portfolioItemFlex'>

                                    <div className='portfolioText'>
                                        <p>
                                            The Recipro web app lets users explore recipes based on ingredients they have on hand. Users can also
                                            save any of the recipes to their own personalized list. Feel free to check out the html and css pages
                                            on <a href='https://github.com/KyleEriss/recipro-client' target='_blank'>GitHub</a>
                                        </p>
                                        <p>Tech used: React, Node, Express, PostgreSQL, JWTs for authorization, and CSS animations</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='itemPortfolio'>

                            <div className='portfolioTitle'>
                                <p><a href='https://reconnaissound-client.vercel.app/' target='_blank'>Reconnaissound</a></p>
                            </div>

                            <div className='portfolioFlex'>
                                <div className='portfolioItemFlex'>
                                    <img src={reconnaissound} className='imgPortfolio' />
                                </div>

                                <div className='portfolioItemFlex'>

                                    <div className='portfolioText'>
                                        <p>
                                            Reconnaissound is a React web app which lets users generate a list of trending YouTube music videos
                                            from any country of their choosing. Users can watch the videos directly on the web app. Check it out
                                            on <a href='https://github.com/KyleEriss/reconnaissound-client' target='_blank'>GitHub</a>
                                        </p>
                                        <p>Tech used: React, Node, Express, PostgreSQL, JWTs for authorization, and CSS animations</p>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='itemPortfolio'>

                            <div className='portfolioTitle'>
                                <p><a href='https://popupshop.vercel.app/' target='_blank'>Popup Shop</a></p>
                            </div>

                            <div className='portfolioFlex'>
                                <div className='portfolioItemFlex'>
                                    <img src={popupshop} className='imgPortfolio' />
                                </div>

                                <div className='portfolioItemFlex'>

                                    <div className='portfolioText'>
                                        <p>
                                            Popup Shop lets you set up an online shop with an easy drag and drop builder. Or select a
                                            template, add images, description, and price. Then set up payment processing and now your shop is ready. Check it out
                                            on <a href='https://github.com/chingu-voyages/v32-bears-team-07' target='_blank'>GitHub</a>
                                        </p>
                                        <p>Tech used: MERN stack, Stripe integration, GrapeJS, and JWTs</p>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='itemPortfolio'>

                            <div className='portfolioTitle'>
                                <p><a href='https://kyleeriss.github.io/SoundScout/' target='_blank'>SoundScout</a></p>
                            </div>

                            <div className='portfolioFlex'>
                                <div className='portfolioItemFlex'>
                                    <img src={SoundScout} className='imgPortfolio' />
                                </div>

                                <div className='portfolioItemFlex'>

                                    <div className='portfolioText'>
                                        <p>
                                            The SoundScout web app is an earlier version of Reconnaissound. Users can browse music videos from
                                            any country of their choosing. The app uses traditional JS, HTML, and CSS instead of React. Check
                                            it out on <a href='https://github.com/KyleEriss/SoundScout' target='_blank'>GitHub</a>
                                        </p>
                                        <p>Tech used: HTML, CSS, JavaScript, jQuery</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </article>

        )
    }
}