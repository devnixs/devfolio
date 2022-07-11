import React from 'react';
import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        {about.split('\n').map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </Section>
  );
};

export default SectionAbout;
