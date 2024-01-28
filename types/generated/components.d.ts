import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockHero extends Schema.Component {
  collectionName: 'components_block_heroes';
  info: {
    displayName: 'Hero';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cta: Attribute.Component<'reusable.cta', true>;
  };
}

export interface ButtonCta extends Schema.Component {
  collectionName: 'components_button_ctas';
  info: {
    displayName: 'CTA';
    icon: 'check';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface ReusableCta extends Schema.Component {
  collectionName: 'components_reusable_ctas';
  info: {
    displayName: 'CTA';
    icon: 'check';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.hero': BlockHero;
      'button.cta': ButtonCta;
      'reusable.cta': ReusableCta;
    }
  }
}
