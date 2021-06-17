import { heroes } from "../data/heroes";


export const getHeroBypublisher = (publisher) => {

  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error("Publisher not is correct");
  } else {
    return  heroes.filter(hero => hero.publisher === publisher);
  }
};
