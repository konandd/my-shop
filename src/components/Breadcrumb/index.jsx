import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = ({ history, name, id }) => (
  <div className="breadcrumb">
    <button type="button" onClick={() => (history.push('/'))} className="bread">Home</button>
    <span>&gt;</span>
    <button type="button" onClick={() => (history.push(`/${name}`))} className="bread">{name.charAt(0).toUpperCase() + name.slice(1)}</button>
    { id ? <span>&gt;</span> : ''}
    {id ? <button type="button" onClick={() => (history.push(`${history.location.pathname}`))} className="bread">{id}</button> : ''}
  </div>
);
export default Breadcrumb;
