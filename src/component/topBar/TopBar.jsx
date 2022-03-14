import maximize from '../../icons/maximize.png';
import minimize from '../../icons/minimize.png';

export default function TopBar({ text, id, children }) {
  return (
    <div className='TopBar'>
        <input type="checkbox" name="" id={ id } />
        <div className="TopBar--container">

          <div>
          <h1>{ text }</h1>
          <label htmlFor={ id }>
              <img src={maximize} alt="maximize" />
              <img src={minimize} alt="minimize" />
          </label>
          </div>

          <article>
              { children }
          </article>

        </div>
    </div>
  )
}
