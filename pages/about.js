import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1>À Propos</h1>
      <p>Bienvenue sur la page À Propos de notre site.</p>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Accueil
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutPage;
