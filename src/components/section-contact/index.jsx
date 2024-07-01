import React from 'react';
import Section from '../section';

function rot13(message) {
  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)
    )
  );
}

const SectionContact = () => {
  const [emailAddress, setEmailAddress] = React.useState(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    setEmailAddress(rot13(atob('cGJhZ25wZ0BndXJlbi1yYXR2YXJyZXZhdC5wYno=')));
  }, []);

  return (
    <Section title="Contact">
      {revealed ? (
        <>
          Feel free to contact me at{' '}
          <a className="email-address" href={'mailto:' + emailAddress}>
            {emailAddress}
          </a>
        </>
      ) : (
        <span className="reveal" onClick={() => setRevealed(true)}>
          Reveal email address
        </span>
      )}
    </Section>
  );
};

export default SectionContact;
