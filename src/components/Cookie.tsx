import React from 'react';
import styles from 'scss/components/Cookie.module.scss';
import { client, Cookie } from 'client';

interface Props {
  data: Cookie

}

function Cookie({
  data,
}: Props): JSX.Element {
  const cookieInfo = data.cookieInfo;
  const cookieImage = data.cookieInfo.cookieImage;
  return (
    <section
      className={styles.cookie}>
      <div className={styles.wrap}>
        <h3>{cookieInfo.cookieName}</h3>
        {/* TODO - map this */}
        <pre>{JSON.stringify(cookieInfo.specialDiet, null, 2)}</pre>
        <p>Check out this {cookieInfo.cookieName}! </p>
        <img src={cookieImage.mediaItemUrl}></img>
        
      </div>
    </section>
  );
}

export default Cookie;
