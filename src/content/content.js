import React from 'react';
import TextCard from '../components/card/TextCard';
import ParallaxImage from '../components/parallax/ParallaxImage';

import engagementSpot from './engagementSpot.jpg';
import travel from './travel.jpg';

export const title = "alan & stevie";

export const cards = [
  {
    id: 1,
    card: (
      <TextCard
        title="How We Met"
        text="Lorem ipsum dolor sit amet, ex fabulas moderatius vis. Eum ancillae appetere at. Ad quo nullam philosophia, at mei suscipit percipit disputando. Autem audiam pri ut, doctus vivendum mel at. Mel impedit periculis te, eos aliquid meliore iudicabit no. Omnes salutandi periculis usu et, pro errem efficiendi ea, sed id fugit cetero commune."
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
        title="When and Where"
        text="Lorem ipsum dolor sit amet, ex fabulas moderatius vis. Eum ancillae appetere at. Ad quo nullam philosophia, at mei suscipit percipit disputando. Autem audiam pri ut, doctus vivendum mel at. Mel impedit periculis te, eos aliquid meliore iudicabit no. Omnes salutandi periculis usu et, pro errem efficiendi ea, sed id fugit cetero commune."
      />
    ),
    parallaxImage: (
      <ParallaxImage imageUrl={travel} />
    ),
  },
  {
    id: 3,
    card: (
      <TextCard
        title="Registry & Gifts"
        text="Lorem ipsum dolor sit amet, ex fabulas moderatius vis. Eum ancillae appetere at. Ad quo nullam philosophia, at mei suscipit percipit disputando. Autem audiam pri ut, doctus vivendum mel at. Mel impedit periculis te, eos aliquid meliore iudicabit no. Omnes salutandi periculis usu et, pro errem efficiendi ea, sed id fugit cetero commune."
      />
    ),
    parallaxImage: (
      <ParallaxImage imageUrl={engagementSpot} />
    ),
  },
  {
    id: 4,
    card: (
      <TextCard
        title="RSVP"
        text="Lorem ipsum dolor sit amet, ex fabulas moderatius vis. Eum ancillae appetere at. Ad quo nullam philosophia, at mei suscipit percipit disputando. Autem audiam pri ut, doctus vivendum mel at. Mel impedit periculis te, eos aliquid meliore iudicabit no. Omnes salutandi periculis usu et, pro errem efficiendi ea, sed id fugit cetero commune."
      />
    ),
    parallaxImage: (
      <ParallaxImage imageUrl={travel} />
    ),
  },
];

