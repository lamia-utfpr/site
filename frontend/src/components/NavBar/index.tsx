import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import api from '../../services/api';
import { Nav } from './style';

interface NavItemProps {
  name: string;
  description: string | null;
}

interface MenuNavProps {
  name: string;
  description: string | null;
  types: NavItemProps[];
}

const NavBar: React.FC = () => {
  const [categoryWorks, setCategoryWorks] = useState<MenuNavProps[]>([]);
  const [members, setMembers] = useState<MenuNavProps | null>(null);
  // const [categoryWorks, setCategoryWorks] = useState<CategoryWorkProps[]>([]);

  useEffect(() => {
    api.get(`category-works`).then((response) => {
      setCategoryWorks(response.data);
    });
    api.get(`type-members`).then((response) => {
      setMembers(response.data);
    });
  }, []);

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <ul className="DropDraw">
            <li>
              <HashLink smooth to="#News">
                Noticias
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Histoty">
                Missão
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#LatestPublications">
                Ultimas publicações
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Statistics">
                Linhas de Códigos Produzidas
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#AreasExpertise">
                Áreas de Atuação
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Partners">
                Parceiros
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Advisors">
                Orientadores
              </HashLink>
            </li>
          </ul>
        </li>
        {categoryWorks.map((category) => (
          <li>
            <Link to={category.name}>{category.name}</Link>
            <ul className="DropDraw">
              {category.types.map((type) => (
                <li>
                  <a href={type.name}>{type.name}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <Link to="Integrantes">{members?.name}</Link>
          <ul className="lastDropDraw">
            {members?.types.map((type) => (
              <li>
                <a href={type.name}>{type.name}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
