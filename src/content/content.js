import React from 'react';
import TextCard from '../components/card/TextCard';
import ParallaxImage from '../components/parallax/ParallaxImage';
import RsvpSubCard from '../components/card/RsvpSubCard';

import engagementSpot from './engagementSpot.jpg';
import travel from './travel.jpg';
import ring from './ring.jpg';
import napa from './napa.jpg';

export const nl2br = (text) => (
  text.split("\n").map((item, idx) => (
    <span key={idx}>
      {item}
      <br />
    </span>
  ))
);

export const title = "alan & stevie";

const card1Text = `Summer 2014: she lived down the street from him. She said she had Persona 4 for PS3. He couldn't resist.
A true end, 78 hours of gameplay together, and a finished game later - Liana, her roommate, went to take a shower. He asked her out. She said yes.
Exactly two years and two Japan trips later, atop the Tokyo Skytree (picture above), he gave her a ring. She said yes.
`;
const card2Text = `The ceremony will be at the Hakone Estate and Gardens in Saratoga, CA.
The reception will take place after, at the same venue. Dinner & drinks will be provided.
Formal attire requested, but note that this is an outdoors wedding on unpaved grounds.
`;
const card2WithLink = (
  <div>
    {nl2br(card2Text)}
    <a href="https://goo.gl/maps/XGtSokdkes22">Map</a>
  </div>
);
const card3Text = (
  <div>
    There will be a small box at the wedding for cards, 红包(red envelopes), and anything else. Checks can be made out to Alan Yao.<br />
    If you feel led to express love and/or give congratulations through gifts, we are registered with <a href="https://www.amazon.com/wedding/alan-yao-stevie-chang-saratoga-august-2017/registry/2MKO8H55UHTBQ">Amazon</a>.<br />
  </div>
);

export const cards = [
  {
    id: 1,
    card: (
      <TextCard
        title="The Story"
        text={nl2br(card1Text)}
      />
    ),
    parallaxImage: (
      <ParallaxImage imageUrl={engagementSpot} />
    ),
  },
  {
    id: 2,
    card: (
      <TextCard
        title="August 26 2017, 4:30 PM"
        text={card2WithLink}
      />
    ),
    parallaxImage: (
      <ParallaxImage imageUrl={ring} />
    ),
  },
  {
    id: 3,
    card: (
      <TextCard
        title="Registry & Gifts"
        text={card3Text}
      />
    ),
    parallaxImage: (
      <ParallaxImage imageUrl={napa} />
    ),
  },
  {
    id: 4,
    card: (
      <TextCard
        title="RSVP"
        text={<RsvpSubCard  />}
      />
    ),
    parallaxImage: (
      <ParallaxImage imageUrl={travel} />
    ),
  },
];

