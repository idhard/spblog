export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook: string;
  twitter: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'Sidepro',
  description: 'Yet another side project site',
  coverImage: 'img/blog-cover.jpg',
  //logo: 'img/ghost-logo.png',
  siteUrl: 'https://blog.sidepro.com',
  twitter: 'https://twitter.com/IvanHoromanski',
  showSubscribe: true,
  mailchimpAction: 'https://sidepro.us19.list-manage.com/subscribe/post?u=b480165f7ec386742047d86bf&amp;id=fa113a8da2',
  mailchimpName: 'b_b480165f7ec386742047d86bf_fa113a8da2',
};

export default config;
