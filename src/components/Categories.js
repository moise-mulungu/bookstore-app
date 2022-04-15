import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.CategoriesReducer);
  return (
    <div>
      <button className="configButton" type="button" onClick={() => dispatch(CheckStatus())}>Check status</button>
      {currentStatus}
    </div>
  );
}
