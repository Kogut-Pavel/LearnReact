import React from 'react';
import styled from 'styled-components';

const Item = styled.li`

`;

export const ListItem = (props) => (
    <ul>
        {props.itemList.map(item => (
            <Item>
                {item.name}
            </Item>
        ))}
    </ul>
);