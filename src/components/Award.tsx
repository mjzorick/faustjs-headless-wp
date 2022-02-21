import React from 'react';
import styles from 'scss/components/Award.module.scss';
import { client, Award } from 'client';

interface Props {
  data: Award

}

function Award({
  data,
}: Props): JSX.Element {
  const duedate = data.dueDate;
  return (
    <section
      // eslint-disable-next-line react/jsx-props-no-spreading
     // {...(id && { id })}
      //style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      className={styles.award}>
      <div className={styles.wrap}>
        <h3>{data.awardName}</h3>
        {/* TODO - loop through array */}
        <pre>{JSON.stringify(data.communityName, null, 2)}</pre>
        <p>Total Scouts Needed: {data.totalScoutsNeeded}</p>
        {duedate? <p>Group Impacted: {data.groupImpacted}</p>: 'no date given'}
        
        {/* TODO - get related model */}
        <pre>Scouts: </pre>
        {/* <ul>
          <li>list communities here {communities}</li>
        </ul> */}
      </div>
    </section>
  );
}

export default Award;
