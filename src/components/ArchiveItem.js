import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import get from 'lodash/get';

const StyledArchiveItem = styled.div`
  flex-basis: 100%;
  li {
    margin-bottom: 0;
    font-size: 14px;
  }
`

const ArchiveItem = (props) => {
  const title = get(props.node, 'frontmatter.title') || props.node.fields.slug
  return (
    <StyledArchiveItem>  
      <li key={props.node.fields.slug}>
        {props.node.frontmatter.date} » {' '}
        <Link to={props.node.fields.slug} className="archive-link">
          {title}
        </Link>
      </li>
    </StyledArchiveItem>
  )
}
export default ArchiveItem;