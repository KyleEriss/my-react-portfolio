import { React, Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <article id='contact'>
                <div className='contact'>

                <div className='title'>Contact Kyle</div>

                    <div className='groupContact'>
                        <div className='itemContact'>

                            <p>If you'd like to connect, follow me on:</p>
                            <ol>
                                <li><a href='https://www.linkedin.com/in/kyle-eriss-94a95a13/' target='_blank'>LinkedIn</a></li>
                                <li><a href='https://github.com/KyleEriss' target='_blank'>GitHub</a></li>
                            </ol>
                            <p>Or shoot me an <a href='mailto:kyle.eriss@.com' target='_blank'>email</a>.<br /></p>

                        </div>

                        <div className='itemContact'>

                            <form action='https://formspree.io/kyle.eriss@gmail.com' method='post'>
                                <label for='user-name'>Name:</label>
                                <input id='user-name' type='text' name='name'></input>
                                <label for='user-email'>Email:</label>
                                <input id='user-email' type='text' name='email'></input>
                                <label for='user-message'>Message:</label>
                                <textarea id='user-message' name='message'></textarea>
                                <button type='submit'>Submit</button>
                            </form>

                        </div>
                    </div>

                </div>
            </article>

        )
    }
}