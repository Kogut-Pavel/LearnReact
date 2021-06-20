import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const SectionTitle = styled.h2`
    padding-left: 30px;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <SectionTitle>Бургеры</SectionTitle>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>

        <SectionMenu>
            <SectionTitle>Закуски / Напитки</SectionTitle>
            <ListItem itemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
);