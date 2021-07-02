import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import { Context } from '../Functions/context';

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
    const { openItem: { setOpenItem }} = useContext(Context);
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
                        setOpenItem={setOpenItem}
                    />
                </SectionMenu>
        
                <SectionMenu>
                    <SectionTitle>Закуски / Напитки</SectionTitle>
                    <ListItem 
                        itemList={dbMenu.other}
                        setOpenItem={setOpenItem}
                    />
                </SectionMenu>
            </> :  res.error ? 
            <div>Sorry, we will fix it soon...</div> :
            <div>Loading...</div>
            }
        </MenuStyled>
    );
}