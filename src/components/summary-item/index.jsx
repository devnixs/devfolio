import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  date: 'text-md text-gray-600 font-light ml-5',
};

const SummaryItem = ({
  name,
  description,
  link = false,
  date,
  internal = false,
}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3 className={`${classes.name}`}>
        <span className={` ${link ? 'hover:underline hover:text-black' : ''}`}>
          {link ? linkContent : name}
        </span>
        {date && <span className={classes.date}>{date}</span>}
      </h3>

      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
