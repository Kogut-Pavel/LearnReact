import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const SectionTitle = styled.h2`
    padding-left: 30px;
`;

export const Menu = () => {
    
    const res = useFetch();
    const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner/>
            {res.response ?
            <>
                <SectionMenu>
                    <SectionTitle>Бургеры</SectionTitle>
                    <ListItem
                        itemList={dbMenu.burger}
                    />
                </SectionMenu>
        
                <SectionMenu>
                    <SectionTitle>Закуски / Напитки</SectionTitle>
                    <ListItem 
                        itemList={dbMenu.other}
                    />
                </SectionMenu>
            </> :  res.error ? 
            <div>Sorry, we will fix it soon...</div> :
            <div>Loading...</div>
            }
        </MenuStyled>
    );
}