import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/me.jpg'
          alt='my img'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kate</h1>
      <p>
        This is a blog about web development - especially frontend frameworks like
        Next or React.
      </p>
    </section>
  );
}

export default Hero;
