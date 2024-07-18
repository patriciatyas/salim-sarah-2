import React from 'react';

const BackgroundMusic = () => {
  return (
    <div>
      <iframe
        title="SoundCloud Music Player"
        width="70"
        height="100"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/4974548&color=%23090909&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      {/* <div
        style={{
          
        }}
      >
        <a
          href="https://soundcloud.com/reminiscience"
          title="reminiscience"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          reminiscience
        </a>
        {' '}·{' '}
        <a
          href="https://soundcloud.com/reminiscience/michael-giacchino-married-life"
          title="Michael Giacchino – Married Life"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Michael Giacchino – Married Life
        </a>
      </div> */}
    </div>
  );
};

export default BackgroundMusic;
