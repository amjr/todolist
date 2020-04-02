import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ContainerContext = createContext();

export const ContainerContextProvider = (props) => {
  const { children } = props;
  const list = useSelector((state) => state.list.list);

  const values = {
    insideContainer: true,
    list,
  };

  return <ContainerContext.Provider value={values}>{children}</ContainerContext.Provider>;
};

ContainerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ContainerContextConsumer = ContainerContext.Consumer;
export default ContainerContextProvider;
