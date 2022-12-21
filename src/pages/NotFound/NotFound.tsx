import React from 'react';
import { Link } from 'react-router-dom';
let styles = require('./NotFound.module.scss');
type Props = {};

const NotFound: React.FC<Props> = (props: Props) => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div className={styles['mpbody']}>
                <div className={styles['mars']}></div>
                <img
                    src="https://assets.codepen.io/1538474/404.svg"
                    className={styles['logo-404']}
                />
                <img
                    src="https://assets.codepen.io/1538474/meteor.svg"
                    className={styles['meteor']}
                />
                <p className={styles['title']}>Oh no!!</p>
                <p className={styles['subtitle']}>
                    You’re either misspelling the URL <br /> or requesting a page that's
                    no longer here.
                </p>
                <div>
                    <Link className={styles['btn-back']} to="/dashboard">
                        Back to previous page
                    </Link>
                </div>
                <img
                    src="https://assets.codepen.io/1538474/astronaut.svg"
                    className={styles['astronaut']}
                />
                <img
                    src="https://assets.codepen.io/1538474/spaceship.svg"
                    className={styles['spaceship']}
                />
            </div>
        </div>
    );
};

export default NotFound;
