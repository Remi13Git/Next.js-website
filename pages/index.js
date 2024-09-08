import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d&apos;accueil !</p>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
