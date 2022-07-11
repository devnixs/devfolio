import React from 'react';
import Section from '../section';

const SectionContact = ({ experience }) => {
  const [emailAddress, setEmailAddress] = React.useState(null);

  React.useEffect(() => {
    setEmailAddress('contact [at] thera-engineering.com');
  });

  return (
    <Section title="Contact">Feel free to contact me at {emailAddress}</Section>
  );
};

export default SectionContact;
