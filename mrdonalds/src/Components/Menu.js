import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

export const Menu = () => (
    <MenuStyled>
        <section>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}/>
        </section>

        <section>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}/>
        </section>
    </MenuStyled>
);