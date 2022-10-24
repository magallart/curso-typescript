// import { Hero as SuperHero } from './classes/Hero';
import * as HeroClases from './classes/Hero';
import powers from './data/powers';

const Hero = 123;

// const ironman = new SuperHero('Ironman', 1, 55);
const ironman = new HeroClases.Hero('Ironman', 1, 55);

console.log({ ironman });

console.log(powers);
