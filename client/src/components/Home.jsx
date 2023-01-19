import { SiDjango, SiReact, SiGithub } from 'react-icons/si';
import reactIcon from '../img/react.svg';
import Count from '../components/Count';
import '../css/Home.css';

export default function Home({ count, increaseCount }) {
  return (
    <>
      <main className='HomePage'>
        <div className='section-container'>
          <h1 className='section__title'>" Django Hello World "</h1>

          <img
            src={reactIcon}
            alt='react-icon'
            className='react-icon'
            style={{ animationDuration: `${15 / count}s` }}
          />

          <p className='section__description'>
            Hello World programs are used to illustrate how the process of
            coding works, as well as to ensure that a language or system is
            operating correctly. They are usually the first programs that new
            coders learn, because even those with little or no experience can
            execute Hello World both easily and correctly.
          </p>

          <p className='section__summary'>
            <strong>"Hello, World!"</strong> program build using{' '}
            <a href='https://reactjs.org/' target='_blank' className='redirect'>
              ReactJS{' '}
            </a>
            {' & '}
            <a
              href='https://www.djangoproject.com/'
              className='redirect'
              target='_blank'
            >
              Django
            </a>
            .
            <br />
            <a
              href='https://github.com/sam4web/Django-React-HelloWorld'
              className='redirect'
              target='_blank'
            >
              Source code
              <SiGithub className='redirect__icon' />
            </a>
          </p>
        </div>
        {/* /section-container */}

        <Count count={count} handleClick={increaseCount} />

        <SiReact className='background-icon bg-react' />
        <SiDjango className='background-icon bg-django' />
        {/* /background-icon */}
      </main>
    </>
  );
}
