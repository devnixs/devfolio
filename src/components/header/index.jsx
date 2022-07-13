import get from 'lodash/get';
import React from 'react';
import profileImg from '../../images/thera_just_logo.svg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-200 md:m-auto m-auto',
  image: 'transform transition-all duration-150 hover:scale-105',
  contentWrapper:
    'flex-none pt-6 md:pt-1 md:flex-1 md:pl-16 text-justify md:text-left',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-2 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={profileImg} alt={metadata.name} />
        <h1 className={'title-container'}>
          <span className="title1">THERA</span> <br />
          <span className="title2">ENGINEERING</span>
        </h1>
      </div>
      <div className={classes.contentWrapper}>
        <div className={'flex-none text-lg text-gray-600 font-light md:flex-1'}>
          I'm Raphael ATALLAH, founder of Thera Engineering. <br />
          I'm a senior software engineer working mostly with .NET technologies.{' '}
          <br />
          I've been building complex web applications professionally for the
          last eight years, and still loving it! <br />
          I'm based in the south of france, where it's nice and sunny 🌞
        </div>
        <ul className={classes.list}>
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
