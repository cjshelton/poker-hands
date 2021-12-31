import Hand from '../hand/hand';
import styles from './Hands.module.scss';

import handsData from '../../data/hands';

export default function Hands() {
    return (
        <div className={styles['hands']}>
            {Object.entries(handsData).map(([hand, info]) => {
                return (
                    <Hand
                        key={hand}
                        name={hand}
                        description={info.description}
                        cards={info.cards}
                    />
                );
            })}
        </div>
    );
}
