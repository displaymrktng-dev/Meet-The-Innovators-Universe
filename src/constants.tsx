import React from 'react';
import { motion } from 'motion/react';
import { Radio, Music, Mic2, Tv, Camera, Instagram, ExternalLink, Play } from 'lucide-react';

export interface BrandNode {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  category: 'Media' | 'Podcast' | 'Entertainment' | 'Subsidiary';
  description: string;
  link?: string;
}

export const BRANDS: BrandNode[] = [
  {
    id: 'mti-radio',
    name: 'MTI Radio',
    subtitle: 'The Podcast',
    icon: <Radio className="w-6 h-6" />,
    color: '#FF3B30',
    category: 'Podcast',
    description: 'The heartbeat of the innovator universe. Raw conversations, real culture.'
  },
  {
    id: 'the-vault',
    name: 'The Vault',
    subtitle: 'Archives',
    icon: <Music className="w-6 h-6" />,
    color: '#FFCC00',
    category: 'Media',
    description: 'Unreleased gems and cultural artifacts preserved for the future.'
  },
  {
    id: 'tse',
    name: 'TSE',
    subtitle: 'Top Shelf Entertainment',
    icon: <Tv className="w-6 h-6" />,
    color: '#4CD964',
    category: 'Entertainment',
    description: 'Premium entertainment experiences. The gold standard of the region.'
  },
  {
    id: 'the-checkout',
    name: 'The Checkout',
    subtitle: 'MTI x MTV Ode',
    icon: <Play className="w-6 h-6" />,
    color: '#5856D6',
    category: 'Media',
    description: 'Featuring the latest regional, TSE, and indie black music.'
  },
  {
    id: 'coc-podcast',
    name: 'COC Podcast',
    subtitle: 'Culture of Class',
    icon: <Mic2 className="w-6 h-6" />,
    color: '#FF9500',
    category: 'Podcast',
    description: 'Exploring the intersection of class, culture, and innovation.'
  },
  {
    id: 'ohio-players',
    name: 'Ohio Players',
    subtitle: 'Podcast',
    icon: <Mic2 className="w-6 h-6" />,
    color: '#FF2D55',
    category: 'Podcast',
    description: 'The legends, the stories, and the sound of the Buckeye state.'
  },
  {
    id: 'shemuel',
    name: "Shemu'el Namaste",
    subtitle: '@shemeauto',
    icon: <Instagram className="w-6 h-6" />,
    color: '#AF52DE',
    category: 'Subsidiary',
    description: 'Auto, fashion, and lifestyle curation by Shemuel.'
  },
  {
    id: 'akata',
    name: 'Akata Visions',
    subtitle: 'Productions',
    icon: <Camera className="w-6 h-6" />,
    color: '#5AC8FA',
    category: 'Subsidiary',
    description: 'Visual storytelling and high-end production house.'
  }
];
