import React from 'react'
import poster from '../../images/temp.jpg'
import './banner.scss'
import { Info, PlayArrow } from '@material-ui/icons'

export default function Banner({ isMovie }) {
    return (
        <div className='banner'>
            {isMovie &&
                (<div className='genre'>
                    <h2>{isMovie === "movies" ? "Movies" : "TV Shows"}</h2>
                    <select name="genre" id="">
                        <option>Genre</option>
                        <option value="genre1">1</option>
                        <option value="genre2">2</option>
                        <option value="genre3">3</option>
                        <option value="genre4">4</option>
                        <option value="genre5">5</option>
                    </select>
                </div>)}
            <img src={poster} alt="banner" />
            <div className='info'>
                <p className='description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt quos odit rem quia velit sunt? Natus odit dignissimos fugit, sapiente pariatur quidem, corrupti quas distinctio esse aspernatur atque! Quidem?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur maiores, aliquam obcaecati consequuntur ab repellendus repellat voluptas quae, deleniti ad architecto unde perferendis saepe odio voluptatem, eveniet nostrum reprehenderit temporibus.
                    Rem ab laborum saepe cupiditate quasi et beatae possimus excepturi, iusto officiis eveniet enim ea dignissimos! Harum iste quos reiciendis dolor quaerat laborum cum deleniti voluptatum incidunt, quidem voluptatibus porro!
                    Sequi ipsam nemo dolore sapiente autem quis, vel consequatur tempore accusantium aperiam repudiandae dicta id impedit excepturi laboriosam laborum mollitia dignissimos illo pariatur dolorem error similique soluta iusto? Minus, alias.
                    Vero quasi veniam commodi iste quia, sed doloribus laboriosam tempora nemo doloremque iusto atque fuga ad rerum modi. Voluptatum modi quisquam rerum numquam libero itaque labore, ab quasi odio ratione.
                    Dolorum aut, recusandae consequatur ullam quibusdam suscipit, omnis quae, eaque expedita explicabo dolorem odit iusto mollitia ex aperiam? Non distinctio obcaecati ullam velit nisi rerum cumque modi sint aliquid odit.
                </p>
                <div className='buttons'>
                    <button className='play-button'><PlayArrow />Play</button>
                    <button className='info-button'><Info />More Info</button>
                </div>
            </div>
        </div>
    )
}
